import { getMessages, getTranslations } from 'next-intl/server';
import { PLACE_SLUGS, labels, local, placesBySlug } from '@/content/topics/visit';

type FeaturedPlace = { slug: string; name: string; distance: string; text: string };

export default async function NearbySection({ locale }: { locale: string }) {
  const [t, messages] = await Promise.all([getTranslations('nearby'), getMessages()]);
  const items = (messages.nearby as { items: FeaturedPlace[] }).items;
  const featuredSlugs = new Set(items.map((item) => item.slug));

  return (
    <section id="nearby" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {t('title')}
        </h2>
        <p className="text-center mb-6" style={{ color: 'var(--text-muted)' }}>
          {t('subtitle')}
        </p>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.slug}
              className="rounded-2xl p-6 border border-white/10 shadow-sm hover:shadow-md transition-shadow"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <h3 className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                <a href={`/${locale}/${item.slug}`} className="hover:underline">{item.name}</a>
              </h3>
              <span
                className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3"
                style={{ background: 'var(--accent)', color: '#fff' }}
              >
                {item.distance}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
        <h3 className="font-display text-2xl font-semibold mt-10 mb-4">{local(labels.explore, locale)}</h3>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
          {PLACE_SLUGS.filter((slug) => !featuredSlugs.has(slug)).map((slug) => (
            <li key={slug}>
              <a href={`/${locale}/${slug}`} className="underline underline-offset-4">
                {local(placesBySlug[slug].name, locale)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
