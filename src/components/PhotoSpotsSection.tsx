'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function PhotoSpotsSection() {
  const t = useTranslations('photoSpots');
  const messages = useMessages() as any;
  const items = (messages?.photoSpots?.items || []) as Array<{ name: string; tip: string }>;

  return (
    <section id="photos" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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
        <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 border border-white/10"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.tip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
