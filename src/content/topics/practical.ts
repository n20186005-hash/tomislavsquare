import { local, placesBySlug } from './visit';

type Copy = readonly string[];
type VisitFact = { hours?: Copy; price?: Copy | string; source: string; priceSource?: string; notice?: Copy; transport?: Copy };
const facts: Record<string, VisitFact> = {
  'maksimir-park': {
    hours: ['Park paths are open 24 hours. The zoo and other facilities have separate hours.', 'Park je otvoren 24 sata. Zoološki vrt i drugi sadržaji imaju zasebno radno vrijeme.', 'Der Park ist rund um die Uhr geöffnet. Zoo und Einrichtungen haben eigene Zeiten.', '公园步道全天开放。动物园及园内设施有各自的开放时间。'],
    source: 'https://park-maksimir.hr/faq-items/koje-je-radno-vrijeme-parka-maksimir/',
  },
  'british-square': {
    hours: ['The outdoor market lists 06:30–14:00 Monday to Saturday and 06:30–14:30 on Sunday. Check the fair schedule separately.', 'Otvoreni dio radi pon–sub 06:30–14:00 i ned 06:30–14:30. Sajmovi imaju zaseban raspored.', 'Der Freiluftmarkt nennt Mo–Sa 06:30–14:00 und So 06:30–14:30. Sondermärkte haben eigene Termine.', '露天市集周一至周六 06:30–14:00，周日 06:30–14:30。主题市集另查日程。'],
    source: 'https://trznice-zg.hr/default.aspx?id=303',
  },
  'croatian-state-archives': {
    hours: ['The building can be visited on guided tours on working days. Check available times and booking instructions.', 'Zgrada se radnim danom može posjetiti uz stručno vodstvo. Provjerite termine i upute za rezervaciju.', 'Das Gebäude kann werktags mit einer Führung besichtigt werden. Prüfen Sie Termine und Anmeldung.', '工作日可参加建筑导览。请查看可选场次及预约方式。'],
    source: 'https://www.arhiv.hr/hr-hr/Kulturno-prosvjetne-aktivnosti/Posjetite-nas/Zgrada-HDA/Obilasci',
  },
  'croatian-national-theatre': {
    hours: ['Performance and guided-tour times depend on the programme. Book tours through the theatre.', 'Termini predstava i obilazaka ovise o programu. Obilazak rezervirajte kod kazališta.', 'Vorstellungs- und Führungszeiten stehen im Programm. Führungen über das Theater buchen.', '演出与场馆导览按各自日程开放，导览请向剧院预约。'],
    source: 'https://www.hnk.hr/en/information/special-programs/theatre-tours-information/',
    priceSource: 'https://www.hnk.hr/en/information/tickets/',
  },

  'art-pavilion': {
    hours: ['Reopening announced for 15 December 2026. Check the programme for exhibition hours.', 'Ponovno otvorenje najavljeno je za 15. prosinca 2026. Radno vrijeme izložbi provjerite u programu.', 'Wiedereröffnung für den 15. Dezember 2026 angekündigt. Ausstellungszeiten stehen im Programm.', '馆方公告将于 2026 年 12 月 15 日重新开放。展览开放时间以馆方日程为准。'],
    source: 'https://umjetnicki-paviljon.hr/en/reopening-of-the-art-pavilion-and-the-exhibitionthe-right-place/',
  },
  'botanical-garden': {
    hours: ['The garden announced a winter closure starting 23 November 2026. Check the reopening notice before visiting.', 'Vrt je najavio zimsko zatvaranje od 23. studenoga 2026. Prije dolaska provjerite datum ponovnog otvaranja.', 'Die Winterpause beginnt laut Garten am 23. November 2026. Prüfen Sie den Termin der Wiedereröffnung.', '园方公告自 2026 年 11 月 23 日起冬休闭园，入园前请查看重新开放日期。'],
    source: 'https://botanickivrt.biol.pmf.hr/en/location-and-visiting-hours/',
    priceSource: 'https://botanickivrt.biol.pmf.hr/wp-content/uploads/2026/02/CJENIK-ROBA-I-USLUGA-I-NAJMA-u-Botanickom-vrtu-Bioloskog-odsjeka-PMFA-za-2026.pdf',
  },
  'ethnographic-museum': {
    hours: ['Tue–Fri 10:00–18:00. Sat–Sun 10:00–13:00. Closed on Mondays and public holidays.', 'Uto–pet 10:00–18:00. Sub–ned 10:00–13:00. Ponedjeljkom i blagdanima zatvoreno.', 'Di–Fr 10:00–18:00, Sa–So 10:00–13:00. Montag und an Feiertagen geschlossen.', '周二至周五 10:00–18:00，周六、周日 10:00–13:00。周一及公共假日闭馆。'],
    price: '€4',
    source: 'https://emz.hr/en/visits/',
  },
  'technical-museum': {
    hours: ['Tue–Fri 09:00–17:00. Sat–Sun 09:00–13:00. Closed on Mondays and holidays.', 'Uto–pet 09:00–17:00. Sub–ned 09:00–13:00. Ponedjeljkom i blagdanima zatvoreno.', 'Di–Fr 09:00–17:00, Sa–So 09:00–13:00. Montag und an Feiertagen geschlossen.', '周二至周五 09:00–17:00，周六、周日 09:00–13:00。周一及公共假日闭馆。'],
    price: ['€7 per adult for the permanent collection. Check fees for separate programmes.', 'Stalni postav 7 € za odrasle. Provjerite cijene zasebnih programa.', '7 € für Erwachsene für die Dauerausstellung. Sonderprogramme haben eigene Preise.', '常设展成人 €7。天文馆等独立项目请另查票价。'],
    source: 'https://tmnt.hr/posjet',
    transport: ['By tram, use Tehnički muzej or Studentski centar. Check ZET for current routes.', 'Tramvajem do stajališta Tehnički muzej ili Studentski centar. Aktualne linije provjerite kod ZET-a.', 'Mit der Straßenbahn bis Tehnički muzej oder Studentski centar. Aktuelle Linien nennt ZET.', '乘电车可在 Tehnički muzej 或 Studentski centar 下车，实时线路以 ZET 公告为准。'],
  },
  'archaeological-museum': {
    hours: ['Tue–Fri 10:00–18:00, Sat 10:00–20:00, Sun 10:00–13:00. Last entry 20 minutes before closing. Closed Mondays and holidays.', 'Uto–pet 10:00–18:00, sub 10:00–20:00, ned 10:00–13:00. Zadnji ulaz 20 minuta prije zatvaranja. Ponedjeljkom i blagdanima zatvoreno.', 'Di–Fr 10:00–18:00, Sa 10:00–20:00, So 10:00–13:00. Letzter Einlass 20 Minuten vorher. Montags und an Feiertagen geschlossen.', '周二至周五 10:00–18:00，周六 10:00–20:00，周日 10:00–13:00。闭馆前 20 分钟停止入场，周一及公共假日闭馆。'],
    price: '€8',
    source: 'https://amz.hr/en/visit/archaeological-museum-in-zagreb/',
    priceSource: 'https://www.amz.hr/hr/usluge/cjenik-usluga/',
  },
  'zagreb-city-museum': {
    hours: ['Tue–Sat 10:00–18:00, Sun 10:00–14:00. Last entry 30 minutes before closing. Closed on holidays.', 'Uto–sub 10:00–18:00, ned 10:00–14:00. Zadnji ulaz 30 minuta prije zatvaranja. Blagdanima zatvoreno.', 'Di–Sa 10:00–18:00, So 10:00–14:00. Letzter Einlass 30 Minuten vorher. Feiertags geschlossen.', '周二至周六 10:00–18:00，周日 10:00–14:00。闭馆前 30 分钟停止入场，公共假日闭馆。'],
    price: '€8',
    notice: ['The museum does not allow indoor photography. Use the street-side spot described below.', 'Fotografiranje u muzeju nije dopušteno. Iskoristite opisano mjesto na ulici.', 'Im Museum ist Fotografieren untersagt. Nutzen Sie den unten beschriebenen Standort auf der Straße.', '馆内禁止拍照，拍摄建议见下方的街边机位。'],
    source: 'https://www.mgz.hr/en/visit-us/',
  },
  'zagreb-funicular': {
    hours: ['Daily 06:30–21:50. ZET lists departures every ten minutes.', 'Svakodnevno 06:30–21:50. Prema ZET-u, polasci su svakih deset minuta.', 'Täglich 06:30–21:50. Laut ZET verkehren die Wagen alle zehn Minuten.', '每日 06:30–21:50，ZET 公布的班距为 10 分钟。'],
    price: ['€0.66 per ride. Eligible ZET passes are accepted.', 'Jedna vožnja 0,66 €. Vrijede odgovarajuće ZET-ove karte.', '0,66 € pro Fahrt. Entsprechende ZET-Zeitkarten gelten ebenfalls.', '单程 €0.66，也可使用符合条件的 ZET 通票。'],
    source: 'https://www.zet.hr/uspinjaca/detaljnije/403',
  },
  'mirogoj': {
    hours: ['1 Apr–30 Oct 06:00–20:00. 3 Nov–31 Mar 07:30–18:00. 31 Oct–2 Nov 06:00–24:00.', '1. 4.–30. 10. 06:00–20:00. 3. 11.–31. 3. 07:30–18:00. 31. 10.–2. 11. 06:00–24:00.', '1. Apr.–30. Okt. 06:00–20:00. 3. Nov.–31. März 07:30–18:00. 31. Okt.–2. Nov. 06:00–24:00.', '4 月 1 日至 10 月 30 日 06:00–20:00，11 月 3 日至次年 3 月 31 日 07:30–18:00，10 月 31 日至 11 月 2 日 06:00–24:00。'],
    notice: ['Keep clear of services and give people visiting graves room and privacy.', 'Ne ometajte obrede i ostavite prostora i privatnosti posjetiteljima grobova.', 'Halten Sie Abstand zu Trauerfeiern und achten Sie auf die Privatsphäre der Grabbesucher.', '遇到葬礼或扫墓，请主动让路并尊重访客隐私。'],
    source: 'https://www.gradskagroblja.hr/radno-vrijeme-139/139',
  },
  'mestrovic-pavilion': {
    hours: ['The pavilion is closed for renovation. HDLU lists events at alternative venues.', 'Paviljon je zatvoren zbog obnove. HDLU objavljuje događanja na drugim lokacijama.', 'Der Pavillon ist wegen Sanierung geschlossen. Der HDLU meldet Veranstaltungen an Ausweichorten.', '展亭因整修关闭。克罗地亚美术家协会另行公布其他场馆的活动。'],
    source: 'https://www.hdlu.hr/eng/events/',
  },
  'museum-of-arts-and-crafts': {
    hours: ['Check the museum’s announcements for restoration progress and off-site programmes before going to the main building.', 'Prije odlaska u glavnu zgradu provjerite obavijesti o obnovi i programima na drugim lokacijama.', 'Prüfen Sie vor dem Besuch die Meldungen zur Sanierung und zu Programmen an anderen Standorten.', '主馆整修期间，出发前请核对馆方的工程公告与馆外展出地点。'],
    source: 'https://www.muo.hr/',
  },
  'mimara-museum': {
    hours: ['The museum lists Mon–Sat 10:00–18:00, with last entry one hour before closing. Closed on public holidays.', 'Muzej navodi pon–sub 10:00–18:00, zadnji ulaz sat prije zatvaranja. Blagdanima zatvoreno.', 'Laut Museum Mo–Sa 10:00–18:00, letzter Einlass eine Stunde vor Schließung. Feiertags geschlossen.', '馆方公布周一至周六 10:00–18:00，闭馆前一小时停止入场，公共假日闭馆。'],
    source: 'https://www.mimara.hr/posjet/radno-vrijeme',
  },
  'museum-of-broken-relationships': {
    price: '€9',
    hours: ['Daily 09:00–22:00 from June to September and 09:00–21:00 from October to May. Last entry 30 minutes before closing. Check holiday closures.', 'Svakodnevno 09:00–22:00 od lipnja do rujna i 09:00–21:00 od listopada do svibnja. Zadnji ulaz 30 minuta prije zatvaranja. Provjerite blagdane.', 'Täglich 09:00–22:00 Juni bis September, 09:00–21:00 Oktober bis Mai. Letzter Einlass 30 Minuten vorher. Feiertagsregelung beachten.', '6–9 月每日 09:00–22:00，10 月至次年 5 月每日 09:00–21:00。闭馆前 30 分钟停止入场，节假日另查公告。'],
    source: 'https://brokenships.com/hr/visit/museum-details/zagreb?open=faq',
  },
  'dolac-market': {
    hours: ['Check current trading locations and times with Tržnice Zagreb before going. Individual stalls keep their own hours.', 'Prije dolaska provjerite aktualne lokacije i radno vrijeme kod Tržnica Zagreb. Pojedini štandovi imaju svoje termine.', 'Prüfen Sie vorab aktuelle Standorte und Zeiten bei Tržnice Zagreb. Einzelne Stände haben eigene Zeiten.', '出发前查看萨格勒布市场管理方公布的当前营业地点和时间，各摊位营业时间可能不同。'],
    source: 'https://www.trznice-zg.hr/default.aspx?id=298',
  },
  'jesuit-square': {
    hours: ['The gallery lists Tue–Sun 11:00–19:00. Individual exhibitions and holidays may follow a different schedule.', 'Galerija navodi uto–ned 11:00–19:00. Pojedine izložbe i blagdani mogu imati drukčiji raspored.', 'Die Galerie nennt Di–So 11:00–19:00. Einzelne Ausstellungen und Feiertage können abweichen.', '展馆公布周二至周日 11:00–19:00，单项展览和节假日可能另有安排。'],
    price: ['Check the price for the exhibition you plan to see.', 'Provjerite cijenu izložbe koju želite posjetiti.', 'Prüfen Sie den Eintritt für die gewünschte Ausstellung.', '票价按展览而定，请查所选展览的票务。'],
    source: 'https://gkd.hr/za-posjetitelje/',
  },
};

const areaNames = {
  lower: ['Lower Town, Zagreb', 'Donji grad, Zagreb', 'Unterstadt, Zagreb', '萨格勒布下城区'],
  upper: ['Historic center, Zagreb', 'Povijesno središte Zagreba', 'Historisches Zentrum, Zagreb', '萨格勒布历史中心'],
  east: ['Eastern Zagreb', 'Istočni Zagreb', 'Osten Zagrebs', '萨格勒布东部'],
  north: ['Northern Zagreb', 'Sjeverni Zagreb', 'Norden Zagrebs', '萨格勒布北部'],
};

const categories = {
  public: ['Public space', 'Javni prostor', 'Öffentlicher Raum', '公共空间'],
  venue: ['Visitor venue', 'Ustanova za posjetitelje', 'Besuchereinrichtung', '参观场馆'],
  transit: ['Transport landmark', 'Prometna znamenitost', 'Verkehrsdenkmal', '交通地标'],
  passage: ['Pedestrian passage', 'Pješački prolaz', 'Fußgängerpassage', '步行通道'],
  church: ['Place of worship', 'Vjerski objekt', 'Gotteshaus', '宗教场所'],
};

const paid = ['Check the current price and concessions on the operator’s website.', 'Aktualnu cijenu i popuste provjerite kod upravitelja.', 'Aktuelle Preise und Ermäßigungen stehen beim Betreiber.', '当前票价及优惠以管理方公布为准。'];
const prices = {
  public: ['No ticket is required for the public area. Purchases or separate attractions are charged independently.', 'Za javni prostor ne treba ulaznica. Kupnje i zasebni sadržaji naplaćuju se posebno.', 'Der öffentliche Bereich ist kostenlos. Einkäufe und separate Attraktionen kosten extra.', '公共区域无需购票，商品或另设的游览项目单独收费。'],
  passage: ['No separate ticket for the pedestrian passage when open.', 'Za otvoreni pješački prolaz nema zasebne ulaznice.', 'Für die geöffnete Passage gibt es keinen gesonderten Eintritt.', '步行通道开放时无须单独购票。'],
  transit: ['Check the fare for the service and route you plan to take.', 'Provjerite cijenu vožnje za polazak i odabranu rutu.', 'Prüfen Sie den Tarif Ihrer konkreten Fahrt.', '乘车票价按运营服务和所选路线查询。'],
  church: ['Check site notices for any separately ticketed tours or areas.', 'Na obavijestima provjerite naplaćuju li se pojedini obilasci ili prostori.', 'Prüfen Sie vor Ort, ob Führungen oder einzelne Bereiche kostenpflichtig sind.', '若计划参加导览或进入特定区域，请查看现场是否另设门票。'],
  venue: paid,
};

const stays = {
  lower: ['Look near Glavni kolodvor or Zrinjevac for a mostly level walk. If you need a quiet room, check which side faces the tram line.', 'Za uglavnom ravnu šetnju potražite smještaj kod Glavnog kolodvora ili Zrinjevca. Za mirniju sobu provjerite gleda li na tramvajsku prugu.', 'Nahe Hauptbahnhof oder Zrinjevac sind die Wege weitgehend eben. Für ein ruhiges Zimmer prüfen Sie die Lage zu den Gleisen.', '想以平路步行为主，可选中央车站或兹里涅瓦茨公园附近。若在意噪音，订房时确认房间是否面向电车轨道。'],
  upper: ['Stay near Ban Jelačić Square for tram access, or in the Upper Town if evening walks are a priority. Check stairs and luggage access.', 'Za tramvaj odaberite smještaj kod Trga bana Jelačića, a za večernje šetnje Gornji grad. Provjerite stube i pristup s prtljagom.', 'Am Ban-Jelačić-Platz gibt es Straßenbahnen, in der Oberstadt kurze Abendspaziergänge. Prüfen Sie Treppen und Gepäckzugang.', '需要电车换乘可住耶拉契奇广场附近，偏爱夜间步行可住上城区。带行李时请先确认坡道和台阶。'],
  east: ['For an early walk, look along Maksimirska cesta. A central stay also works if your accommodation is near a tram stop.', 'Za ranu šetnju potražite smještaj uz Maksimirsku cestu. Praktičan je i centar uz tramvajsko stajalište.', 'Für einen frühen Spaziergang bietet sich die Maksimirska cesta an. Alternativ wählen Sie eine zentrale Unterkunft nahe einer Straßenbahnhaltestelle.', '想清晨入园，可选马克西米尔街沿线。也可住市中心靠近电车站的位置。'],
  north: ['A room near Kaptol makes it easy to reach the bus toward Mirogoj. Check return services if you are staying outside the center.', 'Iz smještaja kod Kaptola lako je do autobusa za Mirogoj. Ako ste izvan centra, provjerite povratne polaske.', 'Von einer Unterkunft am Kaptol ist der Bus nach Mirogoj leicht erreichbar. Außerhalb des Zentrums lohnt der Blick auf die Rückfahrt.', '住卡普托尔附近便于搭乘前往米罗戈伊的公交。住市中心以外时，可提前核对返程班次。'],
};

const advice = {
  public: ['Keep paths, crossings and entrances clear. Follow signs for works and special events.', 'Ostavite staze, prijelaze i ulaze prohodnima. Pratite oznake za radove i događanja.', 'Halten Sie Wege, Übergänge und Eingänge frei. Beachten Sie Hinweise zu Bauarbeiten und Veranstaltungen.', '请保持步道、过街通道和入口畅通。施工或活动期间遵循现场指引。'],
  venue: ['Check the last admission time and any restrictions on bags or photography before entering.', 'Prije ulaska provjerite posljednji termin ulaza te pravila o torbama i fotografiranju.', 'Prüfen Sie Einlassschluss sowie Regeln für Taschen und Fotos.', '进馆前先确认最晚入场时间、背包规定与摄影规则。'],
  church: ['Keep voices low and follow signs during worship. Ask before photographing inside.', 'Tijekom bogoslužja budite tihi i pratite oznake. Za fotografiranje u unutrašnjosti prvo pitajte.', 'Verhalten Sie sich beim Gottesdienst leise und folgen Sie den Hinweisen. Fragen Sie vor Innenaufnahmen nach.', '礼拜期间请保持安静并遵守现场标示。拍摄内部前请先询问。'],
  transit: ['Allow extra time for service changes. Stay behind platform safety markings.', 'Ostavite dovoljno vremena za promjene prometa. Ostanite iza sigurnosnih oznaka na peronu.', 'Planen Sie Zeit für Betriebsänderungen ein und bleiben Sie hinter den Sicherheitsmarkierungen.', '为运营调整预留时间，并站在站台安全线以内。'],
  passage: ['Leave room for people crossing the arcade. Stop on the side when looking up at the roof.', 'Ostavite mjesta prolaznicima. Za pogled na krov zastanite sa strane.', 'Lassen Sie Platz für Passanten und treten Sie beim Blick zum Dach zur Seite.', '拱廊是通行空间，驻足看屋顶时请靠边。'],
};

export function practicalDetails(slug: string, locale: string, defaultHours: string) {
  const place = placesBySlug[slug];
  const fact = facts[slug];
  const type = local(categories[place.kind], locale);
  const area = local(areaNames[place.area], locale);
  const price = fact?.price ?? prices[place.kind];
  return {
    type,
    area,
    localName: place.mapName,
    tagline: `${type} · ${area}`,
    hours: fact?.hours ? local(fact.hours, locale) : defaultHours,
    source: fact?.source ?? place.website,
    priceSource: fact?.priceSource ?? fact?.source ?? place.website,
    price: typeof price === 'string'
      ? `${local(['Adult admission', 'Ulaznica za odrasle', 'Eintritt für Erwachsene', '成人票'], locale)} ${price}`
      : local(price, locale),
    notice: local(fact?.notice ?? advice[place.kind], locale),
    stay: local(stays[place.area], locale),
    transport: fact?.transport && local(fact.transport, locale),
  };
}
