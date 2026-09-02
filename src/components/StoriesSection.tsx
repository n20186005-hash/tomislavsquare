'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function StoriesSection() {
  const t = useTranslations('stories');
  const messages = useMessages() as any;
  const items = (messages?.stories?.items || []) as Array<{ kind: string; tag: string; title: string; text: string }>;

  const kindColor = (kind: string) => {
    switch (kind) {
      case 'verified':
        return { background: '#2d5a3d', color: '#fff' };
      case 'tradition':
        return { background: '#5a4a2d', color: '#fff' };
      case 'local':
        return { background: '#2d4a5a', color: '#fff' };
      default:
        return { background: '#5a2d3d', color: '#fff' };
    }
  };

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-4xl mx-auto">
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

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl p-6 md:p-8 border border-white/10 shadow-sm hover:shadow-md transition-shadow"
              style={{ background: 'var(--bg-tertiary)' }}
            >
              <span
                className="inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3"
                style={kindColor(item.kind)}
              >
                {item.tag}
              </span>
              <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                {item.title}
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
