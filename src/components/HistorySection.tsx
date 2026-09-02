'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function HistorySection() {
  const t = useTranslations('history');
  const messages = useMessages() as any;
  const timeline = (messages?.history?.timeline || []) as Array<{ year: string; title: string; text: string }>;

  return (
    <section id="history" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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

        <div className="relative space-y-8">
          <div
            className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
            style={{ background: 'var(--border-color)' }}
          />
          {timeline.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row gap-4 sm:gap-0 items-start ${
                index % 2 === 0 ? 'sm:pr-8' : 'sm:flex-row-reverse sm:pl-8'
              }`}
            >
              <div
                className="absolute left-4 sm:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 mt-2 z-10"
                style={{ background: 'var(--accent)', border: '2px solid var(--bg-secondary)' }}
              />
              <div
                className="flex-1 w-full ml-10 sm:ml-0 rounded-2xl p-6 border border-white/10"
                style={{ background: 'var(--bg-tertiary)' }}
              >
                <span
                  className="inline-block text-sm font-semibold mb-2 px-3 py-1 rounded-full"
                  style={{ background: 'var(--accent)', color: '#fff' }}
                >
                  {item.year}
                </span>
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {item.title}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
