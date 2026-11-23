import hr from './hr.json';
import en from './en.json';
import zh from './zh.json';
import de from './de.json';
import { practicalDetails } from './practical';
import { guideDetails, guideLabels } from './field-notes';
import { labels, local, PLACE_SLUGS, photosBySlug, placesBySlug, placeVisit } from './visit';

export const LEGACY_SLUGS = [
  'king-tomislav-monument',
  'things-to-do-near-king-tomislav-square',
  'green-horseshoe-walking-route',
  'advent-king-tomislav-square',
] as const;

export const TOPIC_SLUGS = [...LEGACY_SLUGS, ...PLACE_SLUGS];

function baseVisit(locale: string, slug: string) {
  const icePark = slug === 'advent-king-tomislav-square';
  const monument = slug === 'king-tomislav-monument';
  const mapName = monument ? 'Spomenik kralju Tomislavu' : icePark ? 'Ledeni park' : 'Trg kralja Tomislava';
  return {
    ...placeVisit({
      ...placesBySlug.zrinjevac,
      address: 'Trg kralja Tomislava',
      mapName,
    }, locale),
    operator: icePark
      ? local(['Event organizer listed in the Advent Zagreb program', 'Organizator naveden u programu Adventa Zagreb', 'Veranstalter laut Programm von Advent Zagreb', '萨格勒布圣诞节活动日程所列主办方'], locale)
      : local(['City of Zagreb (public spaces)', 'Grad Zagreb (javne površine)', 'Stadt Zagreb (öffentliche Flächen)', '萨格勒布市政府（公共空间）'], locale),
    access: icePark
      ? local(['Seasonal program, opening times and tickets vary by edition.', 'Sezonski program, radno vrijeme i ulaznice ovise o izdanju.', 'Programm, Öffnungszeiten und Tickets ändern sich je nach Saison.', '活动日程、开放时间和票务随每一届活动调整。'], locale)
      : local(['Outdoor visit. Follow signs for any temporary access restrictions.', 'Posjet na otvorenom. Pratite oznake za privremena ograničenja.', 'Besuch im Freien. Beachten Sie vorübergehende Hinweise zum Zugang.', '户外参观，请遵循临时通行限制标示。'], locale),
    transport: local(['Cross from the Glavni kolodvor tram stop to the square at the pedestrian crossing.', 'Od tramvajskog stajališta Glavni kolodvor prijeđite do trga preko pješačkog prijelaza.', 'Gehen Sie von der Haltestelle Glavni kolodvor über den Fußgängerüberweg zum Platz.', '在中央车站电车站下车后，经人行横道进入广场。'], locale),
    website: icePark ? 'https://www.adventzagreb.hr/' : undefined,
    singlePlace: monument,
    directions: undefined,
  };
}

export const topicData: Record<string, Record<string, any>> = Object.fromEntries(
  Object.entries({ hr, en, zh, de }).map(([locale, topics]) => {
    const legacy = Object.entries(topics).map(([slug, topic]) => [
      slug, { ...topic, visit: baseVisit(locale, slug) },
    ]);
    const nearby = PLACE_SLUGS.map((slug) => {
      const place = placesBySlug[slug];
      const name = local(place.name, locale);
      const highlight = local(place.highlight, locale);
      const visit = placeVisit(place, locale);
      const practical = practicalDetails(slug, locale, visit.access);
      const guide = guideDetails(slug, locale, practical.hours);

      return [slug, {
        card: { label: name, text: highlight },
        h1: name,
        title: `${name} · Zagreb`,
        intro: place.mapName === name ? 'Zagreb' : `${place.mapName} · Zagreb`,
        description: highlight,
        photo: photosBySlug[slug],
        source: place.source,
        isPlace: true,
        visit,
        guide: {
          ...guide,
          history: local(place.context, locale),
          advice: highlight,
        },
        practical,
        faqTitle: local(guideLabels.faq, locale),
        faq: guide.faq,
        exploreTitle: local(labels.related, locale),
        backLabel: local(labels.back, locale),
      }];
    });
    return [locale, Object.fromEntries([...legacy, ...nearby])];
  }),
);

export function relatedTopics(slug: string) {
  const place = placesBySlug[slug];
  const nearby = place
    ? PLACE_SLUGS.filter((candidate) => candidate !== slug && placesBySlug[candidate].area === place.area)
    : LEGACY_SLUGS.filter((candidate) => candidate !== slug);
  return [...nearby, ...LEGACY_SLUGS].filter((candidate, index, all) => candidate !== slug && index === all.indexOf(candidate)).slice(0, 3);
}
