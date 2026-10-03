import { MetadataRoute } from 'next';
import { routing } from '@/i18n/routing';
import { TOPIC_SLUGS } from '@/content/topics/loader';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tomislavsquare.com';
  const lastModified = new Date('2026-09-02');

  const entries: MetadataRoute.Sitemap = [];

  const pages = [
    '',
    ...TOPIC_SLUGS.map((slug) => `/${slug}`),
  ];

  for (const locale of routing.locales) {
    for (const page of pages) {
      const alternates: Record<string, string> = {};
      for (const altLocale of routing.locales) {
        alternates[altLocale] = `${baseUrl}/${altLocale}${page}`;
      }
      alternates['x-default'] = `${baseUrl}/${routing.defaultLocale}${page}`;

      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified,
        changeFrequency: 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return entries;
}
