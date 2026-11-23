import { labels, local, placeVisit } from '@/content/topics/visit';

type Visit = Omit<ReturnType<typeof placeVisit>, 'directions'> & { directions?: string };

export default function TopicVisit({ visit, locale }: { visit: Visit; locale: string }) {
  const text = (key: keyof typeof labels) => local(labels[key], locale);

  return (
    <section className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-5">{text('details')}</h2>
        <dl className="grid gap-4 sm:grid-cols-2">
          <div><dt className="font-semibold">{text('address')}</dt><dd>{visit.address}</dd></div>
          {visit.operator && (
            <div>
              <dt className="font-semibold">{text('manager')}</dt>
              <dd>{visit.managementSource
                ? <a className="underline" href={visit.managementSource} target="_blank" rel="noopener noreferrer">{visit.operator}</a>
                : visit.operator}</dd>
            </div>
          )}
          <div><dt className="font-semibold">{text('access')}</dt><dd>{visit.access}</dd></div>
          <div><dt className="font-semibold">{text('transport')}</dt><dd>{visit.transport}</dd></div>
        </dl>
        <div className="flex flex-wrap gap-5 mt-6">
          <a className="font-medium underline" href={visit.map} target="_blank" rel="noopener noreferrer">{text('map')}</a>
          {visit.directions && (
            <a className="font-medium underline" href={visit.directions} target="_blank" rel="noopener noreferrer">
              {text(visit.publicTransport ? 'transitDirections' : 'directions')}
            </a>
          )}
          {visit.website && (
            <a className="font-medium underline" href={visit.website} target="_blank" rel="noopener noreferrer">{text('website')}</a>
          )}
        </div>
      </div>
    </section>
  );
}

export function TopicReviews({ visit, locale }: { visit: Visit; locale: string }) {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-3">{local(labels.reviews, locale)}</h2>
        {visit.singlePlace ? (
          <a className="underline" href={visit.map} target="_blank" rel="noopener noreferrer">{local(labels.liveReviews, locale)}</a>
        ) : (
          <p>{local(labels.noSingleRating, locale)}</p>
        )}
      </div>
    </section>
  );
}
