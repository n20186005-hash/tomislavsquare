import fieldNotes from './field-notes.json';
import { local, placesBySlug } from './visit';

const notes: Record<string, { before: string; after: string; photoSpot: string[]; architecture: string[] }> = fieldNotes;

export const guideLabels = {
  about: ['About {name}', 'O lokaciji {name}', 'Über {name}', '关于{name}'],
  background: ['History and architecture', 'Povijest i arhitektura', 'Geschichte und Architektur', '历史与建筑'],
  advice: ['Planning your visit', 'Planiranje posjeta', 'Besuch planen', '游览建议'],
  visit: ['Visit {name}.', 'Posjetite: {name}.', 'Besuchen Sie {name}.', '参观{name}。'],
  route: ['Suggested route', 'Predložena ruta', 'Empfohlene Route', '建议游览路线'],
  photoSpot: ['Where to take photos', 'Mjesto za fotografiranje', 'Fotostandpunkt', '拍摄机位'],
  gallery: ['Photo of the site', 'Fotografija lokacije', 'Foto des Ortes', '景点实景'],
  faq: ['Frequently asked questions', 'Česta pitanja', 'Häufige Fragen', '常见问题'],
  access: ['What should I check before visiting?', 'Što provjeriti prije posjeta?', 'Was sollte ich vor dem Besuch prüfen?', '出发前要核对什么？'],
  pair: ['What can I visit next?', 'Što mogu posjetiti nakon toga?', 'Was kann ich danach besuchen?', '下一站可以去哪里？'],
  arrive: ['Start at {name}.', 'Početna točka: {name}.', 'Beginnen Sie hier: {name}.', '从{name}出发。'],
  continue: ['Continue to {name}.', 'Sljedeća postaja: {name}.', 'Gehen Sie weiter zu {name}.', '接着步行前往{name}。'],
} satisfies Record<string, readonly string[]>;

const monument = ['King Tomislav Monument', 'Spomenik kralju Tomislavu', 'König-Tomislav-Denkmal', '托米斯拉夫国王雕像'];
const localStop = (slug: string, locale: string) =>
  local(slug === 'king-tomislav-monument' ? monument : placesBySlug[slug].name, locale);

const outerRoutes: Record<string, string[][]> = {
  'maksimir-park': [
    ['Start at the Maksimirska cesta entrance.', 'Počnite na ulazu s Maksimirske ceste.', 'Beginnen Sie am Eingang an der Maksimirska cesta.', '从马克西米尔街入口出发。'],
    ['After the belvedere, choose a lakeside path or return to the main entrance.', 'Nakon Vidikovca odaberite stazu uz jezero ili se vratite na glavni ulaz.', 'Wählen Sie nach dem Aussichtspavillon einen Uferweg oder kehren Sie zum Haupteingang zurück.', '到观景亭后，选择一条湖边小径，或沿主路回入口。'],
  ],
  mirogoj: [
    ['Start at the main gate on Aleja Hermanna Bollea.', 'Počnite na glavnom ulazu u Aleji Hermanna Bollea.', 'Beginnen Sie am Haupteingang an der Aleja Hermanna Bollea.', '从赫尔曼·博莱大道上的正门开始。'],
    ['Follow the open path along the arcades before returning to the main gate.', 'Slijedite otvorenu stazu uz arkade pa se vratite na glavni ulaz.', 'Folgen Sie dem freigegebenen Weg an den Arkaden und kehren Sie zum Haupttor zurück.', '沿拱廊旁开放的小路步行，再返回正门。'],
  ],
};

export function guideDetails(slug: string, locale: string, access: string) {
  const note = notes[slug];
  const place = placesBySlug[slug];
  const [start, onward] = note.before
    ? [local(guideLabels.arrive, locale).replace('{name}', localStop(note.before, locale)),
      local(guideLabels.continue, locale).replace('{name}', localStop(note.after, locale))]
    : outerRoutes[slug].map((step) => local(step, locale));

  const name = local(place.name, locale);
  return {
    aboutTitle: local(guideLabels.about, locale).replace('{name}', name),
    route: [start, local(guideLabels.visit, locale).replace('{name}', name), onward],
    links: [note.before, '', note.after],
    photoSpot: local(note.photoSpot, locale),
    architecture: local(note.architecture, locale),
    faq: [
      { question: local(guideLabels.access, locale), answer: access },
      { question: local(guideLabels.pair, locale), answer: onward },
    ],
  };
}
