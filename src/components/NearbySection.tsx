'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function NearbySection() {
  const t = useTranslations('nearby');
  const messages = useMessages() as any;
  const items = (messages?.nearby?.items || []) as Array<{ name: string; distance: string; text: string }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 border border-white/10 shadow-sm hover:shadow-md transition-shadow"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <h3 className="font-display text-xl font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {item.name}
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
      </div>
    </section>
  );
}
