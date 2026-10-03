import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { topicData, TOPIC_SLUGS } from '@/content/topics/loader';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TopicContentView from '@/components/TopicContentView';

const baseUrl = 'https://tomislavsquare.com';
const langMap: Record<string, string> = {
  zh: 'zh-CN',
  hr: 'hr-HR',
  de: 'de-DE',
  en: 'en',
};

export function generateStaticParams() {
  return TOPIC_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const topic = topicData[locale]?.[slug];
  if (!topic) return {};

  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `${baseUrl}/${l}/${slug}`;
  languages['x-default'] = `${baseUrl}/${routing.defaultLocale}/${slug}`;

  return {
    metadataBase: new URL(baseUrl),
    title: topic.title,
    description: topic.description,
    alternates: {
      canonical: `${baseUrl}/${locale}/${slug}`,
      languages,
    },
    openGraph: {
      title: topic.title,
      description: topic.description,
      siteName: 'Trg Kralja Tomislava',
      locale: langMap[locale] || 'hr',
      type: 'article',
      url: `${baseUrl}/${locale}/${slug}`,
      images: [
        {
          url: `${baseUrl}/gallery/trg-kralja-tomislava-1.jpg`,
          width: 1200,
          height: 630,
          alt: topic.h1,
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TopicRoute({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const topic = topicData[locale]?.[slug];
  if (!topic) notFound();

  const languages: Record<string, string> = {};
  for (const l of routing.locales) languages[l] = `${baseUrl}/${l}/${slug}`;
  languages['x-default'] = `${baseUrl}/${routing.defaultLocale}/${slug}`;

  const faqJsonLd = topic.faq && topic.faq.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: topic.faq.map((f: any) => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      }
    : null;

  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${baseUrl}/${locale}/${slug}#webpage`,
    url: `${baseUrl}/${locale}/${slug}`,
    name: topic.title,
    description: topic.description,
    inLanguage: langMap[locale] || 'hr',
    isPartOf: { '@id': `${baseUrl}/#website` },
    breadcrumb: { '@id': `${baseUrl}/${locale}/${slug}#breadcrumb` },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${baseUrl}/${locale}/${slug}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Trg Kralja Tomislava',
        item: `${baseUrl}/${locale}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: topic.h1,
        item: `${baseUrl}/${locale}/${slug}`,
      },
    ],
  };

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Header />
      <TopicContentView topic={topic} locale={locale} slug={slug} />
      <Footer />
    </>
  );
}
