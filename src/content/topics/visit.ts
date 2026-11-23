import places from './places.json';
import photos from './photos.json';

type Copy = readonly string[];
type Place = {
  mapName: string;
  address: string;
  name: Copy;
  highlight: Copy;
  context: Copy;
  area: 'lower' | 'upper' | 'east' | 'north';
  kind: 'public' | 'venue' | 'church' | 'transit' | 'passage';
  operator: string;
  managementNote?: Copy;
  managementSource?: string;
  website?: string;
  source?: string;
};

type Photo = {
  src: string;
  source: string;
  credit: string;
  license: string;
};

export const placesBySlug: Record<string, Place> = places as Record<string, Place>;
export const photosBySlug: Record<string, Photo> = photos;
export const PLACE_SLUGS = Object.keys(placesBySlug);

const localeIndex: Record<string, number> = { en: 0, hr: 1, de: 2, zh: 3 };
export const local = (copy: Copy, locale: string) => copy[localeIndex[locale] ?? 1];

export const labels = {
  explore: ['Explore central Zagreb', 'Istražite središte Zagreba', 'Zagrebs Zentrum entdecken', '探索萨格勒布市中心'],
  back: ['Back to King Tomislav Square', 'Natrag na Trg kralja Tomislava', 'Zurück zum König-Tomislav-Platz', '返回托米斯拉夫国王广场'],
  details: ['Visitor information', 'Informacije za posjet', 'Besuchsinformationen', '基本信息'],
  address: ['Address or entrance', 'Adresa ili ulaz', 'Adresse oder Eingang', '地址或入口'],
  manager: ['Management and operations', 'Upravljanje i održavanje', 'Verwaltung und Betrieb', '管理主体'],
  access: ['Opening and admission', 'Radno vrijeme i ulaz', 'Öffnungszeiten und Eintritt', '开放与门票'],
  transport: ['Getting there', 'Kako doći', 'Anreise', '交通方式'],
  highlight: ['What to look for', 'Što pogledati', 'Was sich anzusehen lohnt', '游览看点'],
  map: ['Open in Google Maps', 'Otvori u Google kartama', 'In Google Maps öffnen', '在 Google 地图中打开'],
  reviews: ['Visitor reviews', 'Recenzije posjetitelja', 'Besucherbewertungen', '游客评价'],
  liveReviews: ['See current ratings and reviews on Google Maps.', 'Pogledajte aktualne ocjene i recenzije na Google kartama.', 'Aktuelle Bewertungen und Rezensionen stehen in Google Maps.', '在 Google 地图查看当前评分和评价。'],
  website: ['Official visitor information', 'Službene informacije za posjet', 'Offizielle Besuchsinformationen', '官方参观信息'],
  directions: ['Walking directions from the square', 'Pješačke upute od trga', 'Fußweg ab dem Platz', '从国王广场出发的步行路线'],
  transitDirections: ['Public transport directions', 'Upute za javni prijevoz', 'Anreise mit öffentlichen Verkehrsmitteln', '查询公共交通路线'],
  source: ['Background reference', 'Izvor podataka', 'Quelle zum Hintergrund', '背景资料来源'],
  photo: ['Photo source and attribution', 'Izvor fotografije i autorstvo', 'Fotoquelle und Urheber', '照片来源与署名'],
  related: ['Nearby guides', 'Vodiči u blizini', 'Reiseführer in der Nähe', '周边景点指南'],
  noSingleRating: ['This guide covers a route or event. Reviews are available on the individual place listings.', 'Ovaj vodič opisuje rutu ili događaj. Recenzije su dostupne na karticama pojedinih mjesta.', 'Dieser Führer beschreibt eine Route oder Veranstaltung. Bewertungen stehen bei den einzelnen Orten.', '本指南介绍路线或活动，评价请查看各地点的独立地图条目。'],
} satisfies Record<string, Copy>;

const access = {
  passage: ['Covered pedestrian passage. Check posted access at the doors.', 'Natkriveni pješački prolaz. Provjerite obavijesti na vratima.', 'Überdachte Fußgängerpassage. Beachten Sie die Hinweise an den Türen.', '有顶盖的步行通道，开放安排以门口公告为准。'],
  public: ['Public outdoor space. Local signs apply during events and works.', 'Javna površina na otvorenom. Za događanja i radove vrijede lokalne oznake.', 'Öffentlicher Außenbereich. Bei Veranstaltungen und Bauarbeiten gelten die Hinweise vor Ort.', '公共户外空间。遇到活动或施工，请遵循现场标示。'],
  venue: ['Check the venue’s current opening, ticket prices and exhibition access before leaving.', 'Prije polaska provjerite radno vrijeme, cijene ulaznica i pristup izložbama.', 'Prüfen Sie vorab die Öffnungszeiten, Eintrittspreise und den Zugang zur Ausstellung.', '出发前查看场馆当前的开放时间、票价与展览入场安排。'],
  church: ['Follow posted access and worship times. Allow for temporary restrictions.', 'Pratite obavijesti o pristupu i rasporedu bogoslužja te računajte na privremena ograničenja.', 'Beachten Sie die Zugangs- und Gottesdienstzeiten sowie vorübergehende Einschränkungen.', '按现场公告核对参观与礼拜时间，留意临时通行限制。'],
  transit: ['Consult the operator’s timetable for passenger service and fares.', 'Za polaske i cijene karata pogledajte vozni red prijevoznika.', 'Fahrzeiten und Fahrpreise finden Sie beim Betreiber.', '乘车时间与票价以运营方公告为准。'],
} satisfies Record<Place['kind'], Copy>;

const transport = {
  lower: ['Start at Glavni kolodvor and follow the walking directions to the address below. The route stays in the Lower Town.', 'Krenite od Glavnog kolodvora i slijedite pješačke upute do navedene adrese. Put ostaje u Donjem gradu.', 'Starten Sie am Hauptbahnhof und folgen Sie der Fußroute zur Adresse in der Unterstadt.', '从中央车站出发，按下方地址查看步行路线，全程位于下城区。'],
  upper: ['Walk from Ban Jelačić Square toward the Upper Town. Expect an uphill section and check the map for step-free options.', 'S Trga bana Jelačića krenite prema Gornjem gradu. Računajte na uspon i provjerite pristup bez stuba na karti.', 'Gehen Sie vom Ban-Jelačić-Platz in Richtung Oberstadt. Rechnen Sie mit einer Steigung und prüfen Sie stufenarme Wege auf der Karte.', '从耶拉契奇广场向上城区步行，途中有上坡。需要避开台阶时，请先查看地图上的路线。'],
  east: ['Use ZET’s tram planner for the Maksimir stop on Maksimirska cesta, then walk to the park entrance.', 'U ZET-ovu planeru potražite stajalište Maksimir na Maksimirskoj cesti pa prošećite do ulaza u park.', 'Suchen Sie im ZET-Fahrplan die Haltestelle Maksimir an der Maksimirska cesta und gehen Sie zum Parkeingang.', '用 ZET 路线规划查询马克西米尔街的 Maksimir 电车站，下车后步行至公园入口。'],
  north: ['Use ZET’s bus planner from Kaptol toward the main Mirogoj entrance.', 'U ZET-ovu planeru potražite autobus s Kaptola do glavnog ulaza na Mirogoj.', 'Suchen Sie im ZET-Fahrplan eine Busverbindung vom Kaptol zum Haupteingang von Mirogoj.', '在 ZET 路线规划中查询从卡普托尔到米罗戈伊正门的公交。'],
} satisfies Record<Place['area'], Copy>;

export function placeVisit(place: Place, locale: string) {
  const query = encodeURIComponent(`${place.mapName}, ${place.address}, Zagreb, Croatia`);
  return {
    address: `${place.address}, Zagreb`,
    operator: place.managementNote
      ? local(place.managementNote, locale)
      : place.operator === 'Grad Zagreb'
        ? local(['City of Zagreb', 'Grad Zagreb', 'Stadt Zagreb', '萨格勒布市政府'], locale)
        : place.operator,
    managementSource: place.managementSource,
    website: place.website,
    map: `https://www.google.com/maps/search/?api=1&query=${query}`,
    directions: `https://www.google.com/maps/dir/?api=1&origin=Trg+kralja+Tomislava%2C+Zagreb&destination=${query}&travelmode=${place.area === 'east' || place.area === 'north' ? 'transit' : 'walking'}`,
    publicTransport: place.area === 'east' || place.area === 'north',
    access: local(access[place.kind], locale),
    transport: local(transport[place.area], locale),
    singlePlace: true,
  };
}
