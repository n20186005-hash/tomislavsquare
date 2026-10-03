import { topicData, TOPIC_SLUGS } from '@/content/topics/loader';

const baseUrl = 'https://tomislavsquare.com';

function Section({ s, index }: { s: any; index: number }) {
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
  const otherTopics = TOPIC_SLUGS.filter((s) => s !== slug)
    .map((s) => ({ slug: s, card: topicData[locale]?.[s]?.card }))
    .filter((t) => t.card);

  return (
    <article>
      <header className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src="/gallery/trg-kralja-tomislava-1.jpg" alt={topic.h1} className="w-full h-full object-cover" />
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
        </div>
      </header>

      <div>
        {topic.sections.map((s: any, i: number) => (
          <Section key={i} s={s} index={i} />
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
