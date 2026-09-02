'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function SourcesSection() {
  const t = useTranslations('sources');
  const messages = useMessages() as any;
  const items = (messages?.sources?.items || []) as Array<{ name: string; url: string }>;

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-3xl mx-auto">
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

        <ul className="space-y-3 mb-8">
          {items.map((item, index) => (
            <li key={index}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="block rounded-xl px-5 py-4 border border-white/10 hover:shadow-md transition-shadow"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <span className="font-medium hover:underline" style={{ color: 'var(--accent)' }}>
                  {item.name}
                </span>
                <span className="block text-xs mt-1 break-all" style={{ color: 'var(--text-muted)' }}>
                  {item.url.replace(/^https?:\/\//, '')}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <p
          className="text-sm text-center rounded-xl px-4 py-3"
          style={{ background: 'var(--bg-tertiary)', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
        >
          {t('disclaimer')}
        </p>
      </div>
    </section>
  );
}
