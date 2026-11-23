import type { ReactNode } from 'react';
import { labels, local, type placeVisit } from '@/content/topics/visit';
import type { practicalDetails } from '@/content/topics/practical';

export const practicalLabels = {
  discover: ['Explore the site', 'Istražite lokaciju', 'Den Ort entdecken', '探索景点'],
  features: ['What makes it distinctive', 'Posebnosti lokacije', 'Besonderheiten des Ortes', '景区特色'],
  type: ['Type of site', 'Vrsta lokacije', 'Art des Ortes', '景点类型'],
  localName: ['Local name', 'Lokalni naziv', 'Ortsname', '当地名称'],
  area: ['District', 'Gradsko područje', 'Stadtgebiet', '所在区域'],
  hours: ['Opening hours', 'Radno vrijeme', 'Öffnungszeiten', '开放时间'],
  tickets: ['Admission and tickets', 'Ulaznice i cijene', 'Eintritt und Preise', '门票价格'],
  notice: ['Before you go', 'Prije posjeta', 'Hinweise für den Besuch', '游览须知'],
  stay: ['Where to stay', 'Gdje odsjesti', 'Wo übernachten', '住宿建议'],
  directions: ['Address and map', 'Adresa i karta', 'Adresse und Karte', '交通指南'],
  rating: ['Google Maps ratings', 'Ocjene na Google kartama', 'Bewertungen in Google Maps', 'Google 地图评分'],
};

type Visit = ReturnType<typeof placeVisit>;
type Details = ReturnType<typeof practicalDetails>;

export function GuideBlock({ title, children, alternate = false }: { title: string; children: ReactNode; alternate?: boolean }) {
  return (
    <section className="section-padding" style={{ background: alternate ? 'var(--bg-secondary)' : 'var(--bg-primary)' }}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h2 className="font-display text-2xl sm:text-3xl font-semibold mb-2">{title}</h2>
        <div className="w-12 h-0.5 mb-6" style={{ background: 'var(--accent)' }} />
        <div className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{children}</div>
      </div>
    </section>
  );
}

export function GuideFacts({ visit, details, locale }: { visit: Visit; details: Details; locale: string }) {
  const officialLink = (url?: string) => url && (
    <a className="underline inline-block mt-3" href={url} target="_blank" rel="noopener noreferrer">{local(labels.website, locale)}</a>
  );

  return (
    <>
      <GuideBlock title={local(labels.details, locale)} alternate>
        <table className="w-full text-left">
          <tbody>
            {[
              [local(practicalLabels.localName, locale), details.localName],
              [local(practicalLabels.type, locale), details.type],
              [local(practicalLabels.area, locale), details.area],
              [local(labels.address, locale), visit.address],
              [local(labels.manager, locale), visit.operator],
            ].map(([name, value]) => (
              <tr key={name} className="border-b" style={{ borderColor: 'var(--border-color)' }}>
                <th scope="row" className="font-semibold pr-4 py-3 align-top">{name}</th>
                <td className="py-3">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GuideBlock>
      <GuideBlock title={local(practicalLabels.hours, locale)}>
        <p>{details.hours}</p>
        {officialLink(details.source)}
      </GuideBlock>
      <GuideBlock title={local(practicalLabels.tickets, locale)} alternate>
        <p>{details.price}</p>
        {officialLink(details.priceSource)}
      </GuideBlock>
      <GuideBlock title={local(labels.transport, locale)}>
        <p>{visit.transport}</p>
        {details.transport && <p className="mt-3">{details.transport}</p>}
        <a className="underline inline-block mt-3" href={visit.directions} target="_blank" rel="noopener noreferrer">
          {local(visit.publicTransport ? labels.transitDirections : labels.directions, locale)}
        </a>
      </GuideBlock>
    </>
  );
}

export function GuideMap({ visit, locale }: { visit: Visit; locale: string }) {
  return (
    <GuideBlock title={local(practicalLabels.directions, locale)} alternate>
      <p>{visit.address}</p>
      <div className="flex flex-wrap gap-4 mt-3">
        <a className="underline" href={visit.map} target="_blank" rel="noopener noreferrer">{local(labels.map, locale)}</a>
        <a className="underline" href={visit.directions} target="_blank" rel="noopener noreferrer">
          {local(visit.publicTransport ? labels.transitDirections : labels.directions, locale)}
        </a>
      </div>
    </GuideBlock>
  );
}
