'use client';

import { useLocale, useMessages } from 'next-intl';

export default function TopicHighlights() {
  const locale = useLocale();
  const messages = useMessages() as any;
  const data = messages?.topicLinks;
  if (!data) return null;
  const items = (data.items || []) as Array<{ slug: string; label: string; text: string }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="font-display text-3xl sm:text-4xl font-semibold mb-2 text-center"
          style={{ color: 'var(--text-primary)' }}
        >
          {data.title}
        </h2>
        <p className="text-center mb-6" style={{ color: 'var(--text-muted)' }}>
          {data.subtitle}
        </p>
        <div className="w-12 h-0.5 mb-12 mx-auto" style={{ background: 'var(--accent)' }} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <a
              key={it.slug}
              href={`/${locale}/${it.slug}`}
              className="rounded-2xl p-6 border border-white/10 shadow-sm hover:shadow-md transition-shadow block h-full"
              style={{ background: 'var(--bg-primary)' }}
            >
              <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {it.label}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {it.text}
              </p>
              <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium" style={{ color: 'var(--accent)' }}>
                {data.cta || 'Read guide'} →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
