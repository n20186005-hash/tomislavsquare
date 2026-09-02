'use client';

import { useTranslations, useMessages } from 'next-intl';

export default function EtiquetteSection() {
  const t = useTranslations('etiquette');
  const messages = useMessages() as any;
  const dos = (messages?.etiquette?.dos || []) as string[];
  const donts = (messages?.etiquette?.donts || []) as string[];

  return (
    <section id="etiquette" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl p-6 border" style={{ background: 'var(--bg-tertiary)', borderColor: 'rgba(45,90,61,0.4)' }}>
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: '#2d5a3d' }}>
              {t('doTitle')}
            </h3>
            <ul className="space-y-3">
              {dos.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#2d5a3d' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl p-6 border" style={{ background: 'var(--bg-tertiary)', borderColor: 'rgba(90,45,61,0.4)' }}>
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: '#5a2d3d' }}>
              {t('dontTitle')}
            </h3>
            <ul className="space-y-3">
              {donts.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#5a2d3d' }} />
                  <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p
          className="text-sm text-center rounded-xl px-4 py-3 mt-8"
          style={{ background: 'var(--bg-primary)', color: 'var(--text-muted)', border: '1px solid var(--border-color)' }}
        >
          {t('note')}
        </p>
      </div>
    </section>
  );
}
