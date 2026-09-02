'use client';

import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const t = useTranslations('cookieBanner');
  const locale = useLocale();
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem('cookiePrefs')) setShow(true);
    } catch {}
  }, []);

  function save(analytics: boolean, marketing: boolean) {
    try {
      localStorage.setItem('cookiePrefs', JSON.stringify({ analytics, marketing }));
      window.dispatchEvent(new Event('consent-updated'));
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div role="dialog" aria-label={t('title')} className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6">
      <div
        className="max-w-3xl mx-auto rounded-xl p-5 sm:p-6 shadow-lg"
        style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)' }}
      >
        <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--text-secondary)' }}>
          {t('text')}
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => save(true, true)}
            className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
            style={{ background: 'var(--accent)' }}
          >
            {t('acceptAll')}
          </button>
          <button
            onClick={() => save(false, false)}
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            style={{ background: 'var(--bg-tertiary)', color: 'var(--text-primary)', border: '1px solid var(--border-color)' }}
          >
            {t('acceptEssential')}
          </button>
          <a
            href={`/${locale}/cookie-settings`}
            className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
            style={{ color: 'var(--accent)' }}
          >
            {t('settings')}
          </a>
        </div>
      </div>
    </div>
  );
}
