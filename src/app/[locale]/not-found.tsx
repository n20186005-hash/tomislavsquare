'use client';

import { useTranslations, useLocale } from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('notFound');
  const ht = useTranslations('header');
  const locale = useLocale();
  const homeHref = `/${locale}`;

  return (
    <div className="min-h-screen flex items-center justify-center px-4" style={{ background: 'var(--bg-primary)' }}>
      <div className="text-center max-w-lg">
        <div className="font-display text-7xl sm:text-8xl font-bold mb-6" style={{ color: 'var(--accent)' }}>
          404
        </div>
        <h1 className="font-display text-2xl sm:text-3xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
          {t('title')}
        </h1>
        <p className="text-sm sm:text-base mb-10" style={{ color: 'var(--text-muted)' }}>
          {t('description')}
        </p>
        <a
          href={homeHref}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
          style={{ background: 'var(--accent)' }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          {ht('backToHome')}
        </a>
      </div>
    </div>
  );
}
