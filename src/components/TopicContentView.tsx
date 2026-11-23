import { topicData, relatedTopics } from '@/content/topics/loader';

import TopicVisit, { TopicReviews } from './TopicVisit';
import { labels, local } from '@/content/topics/visit';
import { guideLabels } from '@/content/topics/field-notes';

function Section({ s, index, locale }: { s: any; index: number; locale: string }) {
  const bg = index % 2 === 0 ? 'var(--bg-primary)' : 'var(--bg-secondary)';

  if (s.type === 'text') {
    return (
      <section className="section-padding" style={{ background: bg }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            {s.heading}
          </h2>
          <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
          {s.paragraphs.map((p: string, i: number) => (
            <p key={i} className="leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
              {p}
            </p>
          ))}
        </div>
      </section>
    );
  }

  if (s.type === 'route') {
    return (
      <section className="section-padding" style={{ background: bg }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-6">{s.heading}</h2>
          <ol className="list-decimal pl-6 space-y-4">
            {s.items.map((item: string, i: number) => (
              <li key={item} className="pl-1 leading-relaxed">
                {s.links[i] ? <a className="underline" href={`/${locale}/${s.links[i]}`}>{item}</a> : item}
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  if (s.type === 'list') {
    return (
      <section className="section-padding" style={{ background: bg }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
            {s.heading}
          </h2>
          <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
          <ul className="space-y-3">
            {s.items.map((it: string, i: number) => (
              <li key={i} className="flex gap-3" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ color: 'var(--accent)' }}>•</span>
                <span className="leading-relaxed">{it}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  if (s.type === 'cards') {
    return (
      <section className="section-padding" style={{ background: bg }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2 text-center" style={{ color: 'var(--text-primary)' }}>
            {s.heading}
          </h2>
          <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {s.cards.map((c: any, i: number) => (
              <div
                key={i}
                className="rounded-2xl p-6 border border-white/10 shadow-sm"
                style={{ background: 'var(--bg-secondary)' }}
              >
                <h3 className="font-display text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {c.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (s.type === 'gallery') {
    return (
      <section className="section-padding" style={{ background: bg }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {s.heading && (
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2 text-center" style={{ color: 'var(--text-primary)' }}>
              {s.heading}
            </h2>
          )}
          {s.heading && <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {s.images.map((img: any, i: number) => (
              <img
                key={i}
                src={img.src}
                alt={img.alt}
                className="w-full h-48 object-cover rounded-xl"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return null;
}

export default function TopicContentView({ topic, locale, slug }: { topic: any; locale: string; slug: string }) {
  const otherTopics = relatedTopics(slug)
    .map((s) => ({ slug: s, card: topicData[locale]?.[s]?.card }))
    .filter((t) => t.card);

  return (
    <article>
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden" style={{ background: '#20382e' }}>
        <div className="absolute inset-0">
          {(topic.photo || !topic.isPlace) && <img src={topic.photo?.src ?? '/gallery/trg-kralja-tomislava-1.jpg'} alt="" className="w-full h-full object-cover" />}
          <div className="absolute inset-0" style={{ background: 'var(--hero-overlay)' }} />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6">
          <nav className="mb-4 text-sm" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <a href={`/${locale}`} className="hover:underline">
              Trg Kralja Tomislava
            </a>
            <span className="mx-2">/</span>
            <span>{topic.h1}</span>
          </nav>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-4">{topic.h1}</h1>
          <p className="text-lg text-white/80 font-light">{topic.intro}</p>
          {topic.isPlace && (
            <a href={topic.visit.map} className="inline-block mt-4 text-white underline" target="_blank" rel="noopener noreferrer">
              {local(labels.map, locale)}
            </a>
          )}
        </div>
      </header>

      {topic.guide && (
        <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-4">{topic.guide.aboutTitle}</h2>
            <div className="w-12 h-0.5 mb-5" style={{ background: 'var(--accent)' }} />
            <p className="leading-relaxed">
              <strong>{local(labels.manager, locale)}</strong>
              {' · '}
              {topic.visit.managementSource
                ? <a className="underline" href={topic.visit.managementSource}>{topic.visit.operator}</a>
                : topic.visit.operator}
            </p>
            <p className="mt-3 leading-relaxed">{topic.visit.access}</p>
          </div>
        </section>
      )}
      <TopicVisit visit={topic.visit} locale={locale} showManager={!topic.guide} />
      <div>
        {topic.sections.map((s: any, i: number) => (
          <Section key={i} s={s} index={i} locale={locale} />
        ))}

        {topic.faq && topic.faq.length > 0 && (
          <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {topic.faqTitle || 'FAQ'}
              </h2>
              <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
              <div className="space-y-3">
                {topic.faq.map((f: any, i: number) => (
                  <details
                    key={i}
                    className="rounded-xl border border-white/10 p-4"
                    style={{ background: 'var(--bg-secondary)' }}
                  >
                    <summary className="cursor-pointer font-medium" style={{ color: 'var(--text-primary)' }}>
                      {f.question}
                    </summary>
                    <p className="mt-3 leading-relaxed text-sm" style={{ color: 'var(--text-secondary)' }}>
                      {f.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        )}

        {topic.photo && (
          <figure className="max-w-3xl mx-auto px-4 sm:px-6 py-8" style={{ color: 'var(--text-secondary)' }}>
            <h2 className="font-display text-2xl font-semibold mb-4">{local(guideLabels.gallery, locale)}</h2>
            <img className="mx-auto max-h-[32rem] w-auto max-w-full rounded-xl" src={topic.photo.src} alt={topic.h1} loading="lazy" />
            <figcaption className="text-sm mt-3">
              <a className="underline" href={topic.photo.source} target="_blank" rel="noopener noreferrer">
                {local(labels.photo, locale)}
              </a>
              {' · '}{topic.photo.credit}{' · '}{topic.photo.license}
            </figcaption>
          </figure>
        )}

        {topic.source && (
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3 text-sm">
            <a className="underline" href={topic.source} target="_blank" rel="noopener noreferrer">{local(labels.source, locale)}</a>
          </div>
        )}

        <TopicReviews visit={topic.visit} locale={locale} />

        {otherTopics.length > 0 && (
          <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2 text-center" style={{ color: 'var(--text-primary)' }}>
                {topic.exploreTitle || 'Explore more'}
              </h2>
              <div className="w-12 h-0.5 mb-10 mx-auto" style={{ background: 'var(--accent)' }} />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {otherTopics.map((t) => (
                  <a
                    key={t.slug}
                    href={`/${locale}/${t.slug}`}
                    className="rounded-2xl p-6 border border-white/10 shadow-sm transition-shadow hover:shadow-md block h-full"
                    style={{ background: 'var(--bg-primary)' }}
                  >
                    <h3 className="font-display text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      {t.card.label}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                      {t.card.text}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <a href={`/${locale}/#nearby`} className="block mb-4 underline" style={{ color: 'var(--accent)' }}>
              {local(labels.explore, locale)}
            </a>
            <a
              href={`/${locale}`}
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: 'var(--accent)' }}
            >
              ← {topic.backLabel || 'Back to Trg Kralja Tomislava'}
            </a>
          </div>
        </section>
      </div>
    </article>
  );
}
