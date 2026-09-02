'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function FacilitiesSection() {
  const t = useTranslations('facilities');
  const messages = useMessages() as any;
  const items = (messages?.facilities?.items || []) as Array<{ type: string; hint: string }>;

  return (
    <section id="facilities" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
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
        <div className="w-12 h-0.5 mb-8 mx-auto" style={{ background: 'var(--accent)' }} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-5 border border-white/10 hover:shadow-md transition-shadow"
              style={{ background: 'var(--bg-secondary)' }}
            >
              <h3 className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                {item.type}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.hint}
              </p>
            </div>
          ))}
        </div>

        <p
          className="text-sm text-center rounded-xl px-4 py-3"
          style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
        >
          {t('note')}
        </p>
      </div>
    </section>
  );
}
