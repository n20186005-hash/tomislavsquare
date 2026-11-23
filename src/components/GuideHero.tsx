import { labels, local, type placeVisit } from '@/content/topics/visit';
import type { practicalDetails } from '@/content/topics/practical';
import { practicalLabels } from './GuidePractical';

const pill = 'inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 bg-black/25 px-4 py-2 text-sm text-white backdrop-blur-sm hover:bg-white/25';

export default function GuideHero({
  name, homeLabel, image, visit, details, locale,
}: {
  name: string;
  homeLabel: string;
  image: string;
  visit: ReturnType<typeof placeVisit>;
  details: ReturnType<typeof practicalDetails>;
  locale: string;
}) {
  return (
    <header className="relative isolate flex min-h-[65svh] items-end overflow-hidden bg-[#20382e] pt-24 pb-12 sm:min-h-[72svh] sm:pb-16">
      <img src={image} alt="" fetchPriority="high" className="absolute inset-0 -z-20 size-full object-cover" />
      <div className="absolute inset-0 -z-10" style={{ background: 'var(--hero-overlay)' }} />
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="max-w-3xl text-white">
          <p className="mb-4 text-sm text-white/90">
            <a className="underline underline-offset-4 hover:text-white" href={`/${locale}/#nearby`}>{homeLabel}</a>
          </p>
          <h1 className="font-display mb-4 text-4xl leading-tight font-bold sm:text-5xl md:text-6xl">{name}</h1>
          <p className="mb-5 text-lg text-white/90 sm:text-xl">{details.tagline}</p>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <a href={visit.map} target="_blank" rel="noopener noreferrer" className={pill}>
              <span aria-hidden="true" className="text-amber-300">★</span>
              {local(practicalLabels.rating, locale)}
            </a>
            <a href={visit.map} target="_blank" rel="noopener noreferrer" className={pill}>
              {local(labels.map, locale)}
            </a>
          </div>
          <p className="max-w-xl text-sm leading-relaxed text-white/90">
            <strong>{local(practicalLabels.hours, locale)}</strong> · {details.hours}
          </p>
        </div>
      </div>
    </header>
  );
}
