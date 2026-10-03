import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import CookieBanner from '@/components/CookieBanner';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const baseUrl = 'https://tomislavsquare.com';
const langMap: Record<string, string> = {
  zh: 'zh-CN',
  hr: 'hr-HR',
  de: 'de-DE',
  en: 'en',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  const languages: Record<string, string> = {};
  for (const l of routing.locales) {
    languages[l] = `${baseUrl}/${l}`;
  }
  languages['x-default'] = `${baseUrl}/${routing.defaultLocale}`;

  return {
    metadataBase: new URL(baseUrl),
    title: messages.meta.title,
    description: messages.meta.description,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages,
    },
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      siteName: 'Trg Kralja Tomislava',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'hr' ? 'hr_HR' : locale === 'de' ? 'de_DE' : 'en_US',
      type: 'website',
      url: `${baseUrl}/${locale}`,
      images: [
        {
          url: `${baseUrl}/gallery/trg-kralja-tomislava-1.jpg`,
          width: 1200,
          height: 630,
          alt: messages.hero.imgAlt || 'Trg Kralja Tomislava, Zagreb',
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${baseUrl}/#organization`,
        name: 'Trg Kralja Tomislava',
        url: baseUrl,
        logo: `${baseUrl}/icons/icon.svg`,
      },
      {
        '@type': 'WebSite',
        '@id': `${baseUrl}/#website`,
        url: baseUrl,
        name: 'Trg Kralja Tomislava – Zagreb, Croatia',
        publisher: { '@id': `${baseUrl}/#organization` },
        inLanguage: ['hr', 'en', 'zh', 'de'],
      },
      {
        '@type': 'WebPage',
        '@id': `${baseUrl}/${locale}/#webpage`,
        url: `${baseUrl}/${locale}`,
        name: messages.meta.title,
        description: messages.meta.description,
        isPartOf: { '@id': `${baseUrl}/#website` },
        inLanguage: langMap[locale] || 'hr',
        datePublished: '2026-08-01',
        dateModified: '2026-09-02',
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${baseUrl}/${locale}/#breadcrumb`,
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
            name: 'Zagreb',
            item: `${baseUrl}/${locale}`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Croatia',
            item: `${baseUrl}/${locale}`,
          },
        ],
      },
      {
        '@type': ['TouristAttraction', 'Park'],
        '@id': `${baseUrl}/#attraction`,
        name: 'Trg Kralja Tomislava',
        alternateName: 'King Tomislav Square, Tomislavac, Tomislavov trg',
        url: `${baseUrl}/${locale}`,
        image: `${baseUrl}/gallery/trg-kralja-tomislava-1.jpg`,
        description: messages.meta.description,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Trg Kralja Tomislava 10',
          addressLocality: 'Zagreb',
          postalCode: '10000',
          addressCountry: 'HR',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 45.8065479,
          longitude: 15.9786702,
        },
        hasMap: 'https://maps.app.goo.gl/6kLmtVRx9kFHrjND7',
        isAccessibleForFree: true,
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          reviewCount: '7558',
          bestRating: '5',
        },
        touristType: ['City Park', 'Landmark', 'Public Square'],
        sameAs: [
          'https://maps.app.goo.gl/6kLmtVRx9kFHrjND7',
          'https://www.infozagreb.hr/hr/istrazi-zagreb/atrakcije/trgovi/trg-kralja-tomislava',
          'https://kraljtomislav.hazu.hr/en-naslovna/',
        ],
        openingHoursSpecification: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
  };

  return (
    <html lang={langMap[locale] || 'hr'} suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function loadGtag() {
                  if (window.gtagLoaded || document.getElementById('ga4-script')) return;
                  window.gtagLoaded = true;
                  var s = document.createElement('script');
                  s.id = 'ga4-script';
                  s.async = true;
                  s.src = 'https://www.googletagmanager.com/gtag/js?id=G-HXM22WWPKP';
                  document.head.appendChild(s);
                  window.dataLayer = window.dataLayer || [];
                  window.gtag = function() { window.dataLayer.push(arguments); };
                  window.gtag('js', new Date());
                  window.gtag('config', 'G-HXM22WWPKP');
                }
                try {
                  var prefs = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                  if (prefs.analytics) loadGtag();
                } catch(e) {}
                document.addEventListener('consent-updated', function() {
                  try {
                    var p = JSON.parse(localStorage.getItem('cookiePrefs') || '{}');
                    if (p.analytics) loadGtag();
                  } catch(e) {}
                });
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function() {});
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen">
        <NextIntlClientProvider messages={messages}>
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
