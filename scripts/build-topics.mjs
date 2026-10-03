import { readFileSync, writeFileSync } from 'fs';

const gallery = (alt) => [
  { src: '/gallery/trg-kralja-tomislava-1.jpg', alt },
  { src: '/gallery/trg-kralja-tomislava-4.jpg', alt },
  { src: '/gallery/trg-kralja-tomislava-2.jpg', alt },
];

const data = {
  en: {
    'king-tomislav-monument': {
      card: { label: 'King Tomislav Monument', text: 'The bronze equestrian statue that gives the square its name.' },
      title: 'King Tomislav Monument, Zagreb | History & Visiting Guide',
      description: 'The King Tomislav Monument on Trg Kralja Tomislava: a bronze equestrian statue by Robert Frangeš-Mihanović, unveiled in 1947. History, facts and the best photo spots.',
      h1: 'The King Tomislav Monument',
      intro: 'At the heart of Trg Kralja Tomislava stands the bronze equestrian monument to Tomislav, the first King of Croatia. Facing the Main Railway Station, it is the square’s defining landmark and the first thing most travellers see when they arrive in Zagreb by train.',
      exploreTitle: 'Explore more on Trg Kralja Tomislava',
      backLabel: 'Back to Trg Kralja Tomislava',
      faqTitle: 'Frequently asked questions',
      sections: [
        { type: 'text', heading: 'Who was King Tomislav?', paragraphs: [
          'Tomislav was crowned the first King of Croatia in 925, with the blessing of the Pope. He united the Croatian duchies, repelled Magyar invasions and laid the foundations of the medieval Croatian kingdom.',
          'He died around 928 – barely three years after his coronation – and the circumstances of his death remain unknown to this day, feeding centuries of legend.'
        ]},
        { type: 'text', heading: 'The sculptor and the statue', paragraphs: [
          'The monument was created by the Croatian sculptor Robert Frangeš-Mihanović. He modelled the bronze equestrian statue in 1938, capturing the king on horseback in ceremonial dress.',
          'Because the statue faces the railway station, every arriving traveller meets the king first – a deliberate welcome to the city.'
        ]},
        { type: 'list', heading: 'Key facts', items: [
          'Unveiled in October 1947, nearly a decade after the sculpture was completed',
          'Commemorates the millennium of the Croatian Kingdom',
          'Made of bronze on a stone pedestal',
          'Located at the southern end of the square, facing Glavni kolodvor (Main Station)',
          'Designed by Robert Frangeš-Mihanović'
        ]},
        { type: 'text', heading: 'Symbolism and meaning', paragraphs: [
          'The monument was finally unveiled after years of disputes over its design and placement, and after the interruption of the Second World War. For Zagreb, it is a statement of national identity and a tribute to the ruler who gave the country its royal crown.',
          'Together with the yellow Art Pavilion behind it, the statue forms the classic postcard view of the square.'
        ]},
        { type: 'cards', heading: 'Right next to the monument', cards: [
          { title: 'Art Pavilion (Umjetnički paviljon)', text: 'Croatia’s first purpose-built exhibition hall, dating from 1898.' },
          { title: 'Main Railway Station', text: 'The 1892 historicist station building stands directly opposite.' },
          { title: 'Zrinjevac Park', text: 'The next green link of the Green Horseshoe, a 6-minute walk north.' }
        ]},
        { type: 'gallery', heading: 'The monument in pictures', images: gallery('King Tomislav Monument, Zagreb') }
      ],
      faq: [
        { question: 'Who was King Tomislav?', answer: 'Tomislav was the first King of Croatia, crowned in 925. He united the Croatian duchies and is considered the founder of the medieval Croatian kingdom.' },
        { question: 'When was the monument unveiled?', answer: 'The bronze statue was completed in 1938 but unveiled only in October 1947, delayed by disagreements and the Second World War.' },
        { question: 'Who sculpted the King Tomislav Monument?', answer: 'It was created by the Croatian sculptor Robert Frangeš-Mihanović.' },
        { question: 'Can visitors climb or touch the monument?', answer: 'No. For preservation and safety, please do not climb on the statue or its pedestal. You can photograph it freely from the surrounding lawns.' },
        { question: 'What is the best spot to photograph the monument?', answer: 'Stand on the station side of the square at golden hour so the king, the Art Pavilion and the cathedral towers line up in one frame.' }
      ]
    },
    'things-to-do-near-king-tomislav-square': {
      card: { label: 'Things to Do Nearby', text: 'Zrinjevac, Ban Jelačić Square, the Main Station and more – all within a short walk.' },
      title: 'Things to Do Near King Tomislav Square, Zagreb | Nearby Attractions',
      description: 'What to combine with Trg Kralja Tomislava: Zrinjevac Park, Ban Jelačić Square, the Main Station, the Botanical Garden and the Green Horseshoe – all within a short walk.',
      h1: 'Things to Do Near King Tomislav Square',
      intro: 'Trg Kralja Tomislava is the southern gateway to Lenuci’s Green Horseshoe – a chain of parks and squares that makes the Lower Town of Zagreb perfect for walking. From the square you can reach many of the city’s highlights on foot in under 15 minutes.',
      exploreTitle: 'Explore more on Trg Kralja Tomislava',
      backLabel: 'Back to Trg Kralja Tomislava',
      faqTitle: 'Frequently asked questions',
      sections: [
        { type: 'text', heading: 'A natural walking hub', paragraphs: [
          'Because the square sits right across from the Main Railway Station and at the start of the Green Horseshoe, it is the ideal starting point for a walking tour of central Zagreb.',
          'Most of the places below are linked by flat, shaded paths and tram lines, so the route works in every season.'
        ]},
        { type: 'cards', heading: 'Top nearby attractions', cards: [
          { title: 'Zrinjevac Park · 450 m', text: 'The next green link of the Green Horseshoe, known for plane trees, fountains and a 19th-century meteorological column.' },
          { title: 'Ban Jelačić Square · 850 m', text: 'Zagreb’s main square and meeting point, with the statue of Ban Josip Jelačić and the start of the shopping street Ilica.' },
          { title: 'Croatian National Theatre (HNK) · 1.1 km', text: 'A neo-baroque theatre further along the Green Horseshoe, with guided tours and a rich programme.' },
          { title: 'Main Railway Station · opposite', text: 'The 1892 historicist station building is right across the street – your arrival and departure point.' },
          { title: 'Botanical Garden · 700 m', text: 'A green oasis with thousands of plant species, ponds and a small glasshouse (seasonal opening).' },
          { title: 'Museum of Arts and Crafts · 1 km', text: 'One of Zagreb’s most beautiful secessionist buildings, with applied-arts collections.' }
        ]},
        { type: 'text', heading: 'The Green Horseshoe at a glance', paragraphs: [
          'The Green Horseshoe (Zelena potkova) is a U-shaped system of eight squares and parks designed by city planner Milan Lenuci in the late 19th century.',
          'Tomislav Square forms its southern tip; the chain runs north through Zrinjevac to the Botanical Garden and the arts academy.'
        ]},
        { type: 'list', heading: 'How to plan your walk', items: [
          'Start at the King Tomislav monument and walk north along the Green Horseshoe',
          'Stop at Zrinjevac for its fountains and music pavilion',
          'Continue to Ban Jelačić Square for shopping and trams',
          'Add the Botanical Garden or a museum if time allows'
        ]},
        { type: 'gallery', heading: 'Around the square', images: gallery('Trg Kralja Tomislava and surroundings, Zagreb') }
      ],
      faq: [
        { question: 'How far is Ban Jelačić Square from the square?', answer: 'About 850 m, an 11-minute walk north through the parks of the Green Horseshoe, or two tram stops on lines 6 or 13.' },
        { question: 'Is everything within walking distance?', answer: 'Yes. The main nearby sights are 450 m–1.1 km away and connected by flat, pleasant paths.' },
        { question: 'What is the Green Horseshoe?', answer: 'A chain of eight squares and parks designed by Milan Lenuci in the late 19th century, with Tomislav Square at its southern end.' },
        { question: 'Can I join a guided walking tour?', answer: 'Many Zagreb city tours covering the Green Horseshoe include Trg Kralja Tomislava in their itinerary.' },
        { question: 'Is the area good for photography?', answer: 'Yes – the monument, the Art Pavilion and the surrounding historicist architecture make excellent subjects in every season.' }
      ]
    },
    'green-horseshoe-walking-route': {
      card: { label: 'Green Horseshoe Walk', text: 'A self-guided walking route along Lenuci’s chain of parks and squares.' },
      title: 'Green Horseshoe Walking Route, Zagreb | Lenuci’s Horseshoe Guide',
      description: 'Walk Lenuci’s Green Horseshoe (Zelena potkova) in Zagreb: a U-shaped chain of parks and squares from Tomislav Square to the Botanical Garden. Route, map and highlights.',
      h1: 'The Green Horseshoe Walking Route',
      intro: 'Lenuci’s Green Horseshoe (Zelena potkova) is a U-shaped chain of eight squares and parks laid out by city planner Milan Lenuci in the late 19th century. Starting at Trg Kralja Tomislava, it is one of the easiest and most beautiful city walks in Europe.',
      exploreTitle: 'Explore more on Trg Kralja Tomislava',
      backLabel: 'Back to Trg Kralja Tomislava',
      faqTitle: 'Frequently asked questions',
      sections: [
        { type: 'text', heading: 'What is the Green Horseshoe?', paragraphs: [
          'The Horseshoe connects the green spaces of the Lower Town into a continuous park system, balancing the built-up blocks of central Zagreb.',
          'Its eight squares and parks include Tomislavov trg, Zrinjevac, Strossmayerov trg, the Croatian Academy of Sciences and Arts (HAZU), the Botanical Garden, Markušev trg, Trg žrtava fašizma and Nikola Šubić Zrinski Square.'
        ]},
        { type: 'list', heading: 'Squares and parks along the route', items: [
          'Tomislavov trg – the southern gateway, with the King Tomislav monument',
          'Zrinjevac – fountains, plane trees and a music pavilion',
          'Strossmayerov trg – framed by the Croatian Academy and the Archaeological Museum',
          'Botanical Garden – a quiet green oasis with ponds',
          'Markušev trg and Trg žrtava fašizma – elegant residential squares',
          'Zrinski and Petar Preradović Squares – closing the northern arm'
        ]},
        { type: 'text', heading: 'Suggested self-guided route', paragraphs: [
          'Begin at the King Tomislav monument facing the Main Station. Walk north along the lawns, cross to Zrinjevac, then continue through Strossmayerov trg to the Botanical Garden.',
          'The full loop is about 2 km and takes 45–60 minutes at a relaxed pace, longer if you stop at museums and cafés.'
        ]},
        { type: 'cards', heading: 'Highlights not to miss', cards: [
          { title: 'Zrinjevac music pavilion', text: 'A favourite spot for open-air concerts and seasonal decorations.' },
          { title: 'HAZU and the academies', text: 'The neo-baroque academy building anchors the eastern side of the Horseshoe.' },
          { title: 'Botanical Garden glasshouse', text: 'A small historic glasshouse amid thousands of plant species.' }
        ]},
        { type: 'gallery', heading: 'Along the Horseshoe', images: gallery('Lenuci’s Green Horseshoe, Zagreb') }
      ],
      faq: [
        { question: 'How long is the Green Horseshoe walk?', answer: 'The full loop is about 2 km and takes roughly 45–60 minutes at a relaxed pace.' },
        { question: 'Where does the route start?', answer: 'At Trg Kralja Tomislava (Tomislav Square), right across from the Main Railway Station.' },
        { question: 'Is the Green Horseshoe free to visit?', answer: 'Yes. All the squares and parks are public spaces, free and open at all times.' },
        { question: 'Is the route wheelchair and pram friendly?', answer: 'Yes. The paths are flat and paved throughout the Lower Town.' },
        { question: 'When is the best time to walk it?', answer: 'Spring and early autumn for flowers and mild weather; winter for the Advent decorations along the route.' }
      ]
    },
    'advent-king-tomislav-square': {
      card: { label: 'Advent in Zagreb', text: 'The square hosts Zagreb’s Ice Park during the award-winning Advent season.' },
      title: 'Advent in Zagreb at King Tomislav Square | Ice Park & Christmas Market',
      description: 'During Advent in Zagreb, Trg Kralja Tomislava hosts the Ice Park – a festive open-air skating rink. Dates, tips and what to expect at Zagreb’s Christmas market.',
      h1: 'Advent in Zagreb at King Tomislav Square',
      intro: 'Every winter, Zagreb transforms into one of Europe’s most beloved Christmas destinations. Trg Kralja Tomislava plays a central role: the square becomes home to the Zagreb Ice Park, a large open-air skating rink wrapped in festive lights.',
      exploreTitle: 'Explore more on Trg Kralja Tomislava',
      backLabel: 'Back to Trg Kralja Tomislava',
      faqTitle: 'Frequently asked questions',
      sections: [
        { type: 'text', heading: 'Why Advent in Zagreb is famous', paragraphs: [
          'Advent in Zagreb has been voted the best Christmas market in Europe by European Best Destinations (in 2016, 2017 and 2018).',
          'The city fills with lights, wooden stalls, concerts and the scent of mulled wine from late November to early January.'
        ]},
        { type: 'text', heading: 'The Ice Park on Tomislav Square', paragraphs: [
          'During Advent, the square is converted into an outdoor skating rink – the Ice Park (Klizalište) – with skaters gliding beneath the King Tomislav monument.',
          'The Art Pavilion glows behind the festive lights, making it one of the most photographed spots of the season.'
        ]},
        { type: 'list', heading: 'What to expect', items: [
          'Outdoor ice skating for all ages',
          'Festive lights and a tall Christmas tree',
          'Food and drink stalls with local specialities and mulled wine',
          'Live music and weekend concerts',
          'Easy access from the Main Station, just across the street'
        ]},
        { type: 'text', heading: 'Tips for visiting', paragraphs: [
          'Dress warmly and wear gloves; skating sessions can be cold. Buy tickets online to skip the queue.',
          'Combine the square with other Advent locations – Ban Jelačić Square, Zrinjevac and European Square – all within a short walk.',
          'Visit in the evening for the full light display, but expect larger crowds on weekends.'
        ]},
        { type: 'cards', heading: 'Other Advent spots nearby', cards: [
          { title: 'Ban Jelačić Square', text: 'The main Advent hub with the large Christmas tree and main stage.' },
          { title: 'Zrinjevac Park', text: 'A fairy-tale setting of lights among the plane trees.' },
          { title: 'European Square (Europski trg)', text: 'A newer Advent location with design and food stalls.' }
        ]},
        { type: 'gallery', heading: 'Advent at the square', images: gallery('Advent in Zagreb at Trg Kralja Tomislava') }
      ],
      faq: [
        { question: 'When is Advent in Zagreb held?', answer: 'Typically from late November to early January. Exact dates change each year, so check the official Advent in Zagreb programme.' },
        { question: 'Is the Ice Park really on this square?', answer: 'Yes. During Advent, Trg Kralja Tomislava hosts the Zagreb Ice Park, a large open-air skating rink.' },
        { question: 'Do I need tickets for the Ice Park?', answer: 'Skating usually requires a ticket or session pass; some sessions are free for children. Buy online to avoid queues.' },
        { question: 'Is the square accessible during Advent?', answer: 'Yes. The square stays open to pedestrians and is step-free from the Main Station.' },
        { question: 'What are the opening hours during Advent?', answer: 'Stalls and the rink generally run from late morning to late evening. Check the official programme for current hours.' }
      ]
    }
  },

  hr: {
    'king-tomislav-monument': {
      card: { label: 'Spomenik kralju Tomislavu', text: 'Brončani konjanički spomenik po kojem je trg dobio ime.' },
      title: 'Spomenik kralju Tomislavu, Zagreb | Povijest i vodič za posjet',
      description: 'Spomenik kralju Tomislavu na Trgu kralja Tomislava: brončani konjanički kip Roberta Frangeša-Mihanovića, otkriven 1947. Povijest, činjenice i najbolja mjesta za fotografiranje.',
      h1: 'Spomenik kralju Tomislavu',
      intro: 'U središtu Trga kralja Tomislava stoji brončani konjanički spomenik Tomislavu, prvom hrvatskom kralju. Okrenut Glavnom kolodvoru, on je prepoznatljivi simbol trga i prva stvar koju većina putnika vidi kada vlakom stigne u Zagreb.',
      exploreTitle: 'Istražite više o Trgu kralja Tomislava',
      backLabel: 'Natrag na Trg kralja Tomislava',
      faqTitle: 'Često postavljana pitanja',
      sections: [
        { type: 'text', heading: 'Tko je bio kralj Tomislav?', paragraphs: [
          'Tomislav je 925. okrunjen za prvog hrvatskog kralja, s blagoslovom pape. Ujedinio je hrvatske kneževine, odbio mađarske upade i postavio temelje srednjovjekovnog hrvatskog kraljevstva.',
          'Preminuo je oko 928., samo tri godine nakon krunidbe, a okolnosti njegove smrti i danas su nepoznate, što stoljećima hrani legende.'
        ]},
        { type: 'text', heading: 'Kipar i kip', paragraphs: [
          'Spomenik je izradio hrvatski kipar Robert Frangeš-Mihanović. Brončani konjanički kip oblikovao je 1938., prikazavši kralja na konju u svečanom odijelu.',
          'Budući da je kip okrenut kolodvoru, svaki putnik koji stiže vlakom najprije susreće kralja – namjerni doček gradu.'
        ]},
        { type: 'list', heading: 'Glavne činjenice', items: [
          'Svečano otkriven u listopadu 1947., gotovo desetljeće nakon što je kip bio dovršen',
          'Obilježava tisuću godina hrvatskog kraljevstva',
          'Izrađen od bronce na kamenu postolju',
          'Smešten na južnom kraju trga, okrenut Glavnom kolodvoru',
          'Djelo kipara Roberta Frangeša-Mihanovića'
        ]},
        { type: 'text', heading: 'Simbolika i značenje', paragraphs: [
          'Spomenik je konačno otkriven nakon godina rasprava o njegovu izgledu i položaju te prekida zbog Drugog svjetskog rata. Za Zagreb je to izjava nacionalnog identiteta i počast vladaru koji je zemlji donio kraljevsku krunu.',
          'Zajedno sa žutom zgradom Umjetničkog paviljona iza njega, kip tvori klasičnu razglednicu trga.'
        ]},
        { type: 'cards', heading: 'Neposredno uz spomenik', cards: [
          { title: 'Umjetnički paviljon', text: 'Prva namjenski građena izložbena dvorana u Hrvatskoj, iz 1898.' },
          { title: 'Glavni kolodvor', text: 'Povijesna željeznička zgrada iz 1892. nalazi se točno nasuprot.' },
          { title: 'Park Zrinjevac', text: 'Sljedeća zelena karika Zelene potkove, 6 minuta hoda sjeverno.' }
        ]},
        { type: 'gallery', heading: 'Spomenik u slikama', images: gallery('Spomenik kralju Tomislavu, Zagreb') }
      ],
      faq: [
        { question: 'Tko je bio kralj Tomislav?', answer: 'Tomislav je bio prvi hrvatski kralj, okrunjen 925. Ujedinio je hrvatske kneževine i smatra se utemeljiteljem srednjovjekovnog hrvatskog kraljevstva.' },
        { question: 'Kada je spomenik otkriven?', answer: 'Brončani kip dovršen je 1938., ali je svečano otkriven tek u listopadu 1947., otežan neslaganjima i Drugim svjetskim ratom.' },
        { question: 'Tko je izradio spomenik?', answer: 'Djelo je hrvatskog kipara Roberta Frangeša-Mihanovića.' },
        { question: 'Smiju li posjetitelji penjati se na spomenik?', answer: 'Ne. Radi zaštite i sigurnosti ne penjite se na kip ni na njegovo postolje. Fotografirati ga možete slobodno s okolnih travnjaka.' },
        { question: 'Koji je najbolji položaj za fotografiranje?', answer: 'Stojte s kolodvorske strane trga u zlatno doba dana da kralj, Umjetnički paviljon i katedralni toranj budu u istom kadru.' }
      ]
    },
    'things-to-do-near-king-tomislav-square': {
      card: { label: 'Što posjetiti u blizini', text: 'Zrinjevac, Trg bana Jelačića, Glavni kolodvor i drugo – sve na kratkoj šetnji.' },
      title: 'Što posjetiti u blizini Trga kralja Tomislava, Zagreb | Obližnje znamenitosti',
      description: 'Što kombinirati s Trgom kralja Tomislava: park Zrinjevac, Trg bana Jelačića, Glavni kolodvor, Botanički vrt i Zelena potkova – sve na kratkoj šetnji.',
      h1: 'Što posjetiti u blizini Trga kralja Tomislava',
      intro: 'Trg kralja Tomislava je južna kapija Zelene potkove – niza parkova i trgova koji čini Donji grad Zagreba idealnim za šetnju. S trga do mnogih gradskih znamenitosti možete doći pješice za manje od 15 minuta.',
      exploreTitle: 'Istražite više o Trgu kralja Tomislava',
      backLabel: 'Natrag na Trg kralja Tomislava',
      faqTitle: 'Često postavljana pitanja',
      sections: [
        { type: 'text', heading: 'Prirodno središte za šetnju', paragraphs: [
          'Budući da se trg nalazi točno nasuprot Glavnom kolodvoru i na početku Zelene potkove, on je idealna polazna točka za pješački obilazak središta Zagreba.',
          'Većina mjesta u nastavku povezana je ravnim, obraslim stazama i tramvajskim linijama, pa ruta funkcionira u svakom godišnjem dobu.'
        ]},
        { type: 'cards', heading: 'Najbolje obližnje znamenitosti', cards: [
          { title: 'Park Zrinjevac · 450 m', text: 'Sljedeća zelena karika Zelene potkove, poznat po platanima, fontanama i meteorološkom stupu iz 19. stoljeća.' },
          { title: 'Trg bana Jelačića · 850 m', text: 'Glavni zagrebački trg i mjesto okupljanja, sa spomenikom bana Josipa Jelačića i početkom šetne ulice Ilica.' },
          { title: 'Hrvatsko narodno kazalište (HNK) · 1,1 km', text: 'Neobarokna kazališna zgrada dalje niz Zelenu potkovu, s vodstvima i bogatim programom.' },
          { title: 'Glavni kolodvor · nasuprot', text: 'Povijesna željeznička zgrada iz 1892. nalazi se točno preko puta – vaša točka dolaska i odlaska.' },
          { title: 'Botanički vrt · 700 m', text: 'Zelena oaza s tisućama biljnih vrsta, ribnjacima i malim staklenikom (sezonsko otvaranje).' },
          { title: 'Muzej za umjetnost i obrt · 1 km', text: 'Jedna od najljepših secesijskih zgrada u Zagrebu, s kolekcijama primijenjene umjetnosti.' }
        ]},
        { type: 'text', heading: 'Zelena potkova u najavi', paragraphs: [
          'Zelena potkova (Zelena potkova) je U-oblik sustav osam trgova i parkova koji je osmislio urbanist Milan Lenuci krajem 19. stoljeća.',
          'Tomislavov trg čini njezin južni vrh; niz se proteže sjeverno kroz Zrinjevac do Botaničkog vrta i akademije umjetnosti.'
        ]},
        { type: 'list', heading: 'Kako planirati šetnju', items: [
          'Započnite kod spomenika kralju Tomislavu i krenite sjeverno uz Zelenu potkovu',
          'Zaustavite se u Zrinjevcu zbog fontana i glazbenog paviljona',
          'Nastavite do Trga bana Jelačića za kupnju i tramvaje',
          'Dodajte Botanički vrt ili muzej ako imate vremena'
        ]},
        { type: 'gallery', heading: 'U okolici trga', images: gallery('Trg kralja Tomislava i okolica, Zagreb') }
      ],
      faq: [
        { question: 'Koliko je Trg bana Jelačića daleko od trga?', answer: 'Oko 850 m, 11 minuta hoda sjeverno kroz parkove Zelene potkove, ili dvije stanice tramvajem (linije 6 ili 13).' },
        { question: 'Je li sve na pješačkoj udaljenosti?', answer: 'Da. Glavne obližnje znamenitosti udaljene su 450 m–1,1 km i povezane su ravnim, ugodnim stazama.' },
        { question: 'Što je Zelena potkova?', answer: 'Niz osam trgova i parkova koji je osmislio Milan Lenuci krajem 19. stoljeća, s Tomislavovim trgom na južnom kraju.' },
        { question: 'Mogu li se pridružiti vodstvu pješačke ture?', answer: 'Mnoge zagrebačke gradske ture posvećene Zeljenoj potkovi uključuju Trg kralja Tomislava u svoj itinerar.' },
        { question: 'Je li ovo područje dobro za fotografiranje?', answer: 'Da – spomenik, Umjetnički paviljon i okolna povijesna arhitektura izvrsni su motivi u svakom godišnjem dobu.' }
      ]
    },
    'green-horseshoe-walking-route': {
      card: { label: 'Šetnja Zelena potkovom', text: 'Samostalna pješačka ruta uz Lenucijev niz parkova i trgova.' },
      title: 'Šetnja Zelena potkovom, Zagreb | Vodič kroz Lenucijevu potkovu',
      description: 'Prošećite Lenucijevom Zelena potkovom (Zelena potkova) u Zagrebu: U-oblik niz parkova i trgova od Tomislavovog trga do Botaničkog vrta. Ruta, karta i znamenitosti.',
      h1: 'Šetnja Zelena potkovom',
      intro: 'Lenucijeva Zelena potkova (Zelena potkova) je U-oblik lanac osam trgova i parkova koji je krajem 19. stoljeća osmislio urbanist Milan Lenuci. Počevši od Trga kralja Tomislava, to je jedna od najlakših i najljepših gradskih šetnji u Europi.',
      exploreTitle: 'Istražite više o Trgu kralja Tomislava',
      backLabel: 'Natrag na Trg kralja Tomislava',
      faqTitle: 'Često postavljana pitanja',
      sections: [
        { type: 'text', heading: 'Što je Zelena potkova?', paragraphs: [
          'Potkova povezuje zelene površine Donjeg grada u neprekinuti parkovni sustav koji uravnotežuje izgrađene blokove središnjeg Zagreba.',
          'Njezinih osam trgova i parkova uključuje Tomislavov trg, Zrinjevac, Strossmayerov trg, Hrvatsku akademiju znanosti i umjetnosti (HAZU), Botanički vrt, Markušev trg, Trg žrtava fašizma i Trg Nikole Šubića Zrinskog.'
        ]},
        { type: 'list', heading: 'Trgovi i parkovi uz rutu', items: [
          'Tomislavov trg – južna kapija sa spomenikom kralju Tomislavu',
          'Zrinjevac – fontane, platanovi i glazbeni paviljon',
          'Strossmayerov trg – okružen Akademijom i Arheološkim muzejem',
          'Botanički vrt – tiha zelena oaza s ribnjacima',
          'Markušev trg i Trg žrtava fašizma – elegantni stambeni trgovi',
          'Trg Zrinskih i Petra Preradovića – zatvaraju sjeverno krilo'
        ]},
        { type: 'text', heading: 'Prijedlog samostalne rute', paragraphs: [
          'Započnite kod spomenika kralju Tomislavu koji gleda na Glavni kolodvor. Krenite sjeverno uz travnjake, prijeđite do Zrinjevca, pa nastavite kroz Strossmayerov trg do Botaničkog vrta.',
          'Cijeli krug dug je oko 2 km i traje 45–60 minuta opuštenim tempom, duže ako stanete u muzeje i kafiće.'
        ]},
        { type: 'cards', heading: 'Znamenitosti koje ne smijete propustiti', cards: [
          { title: 'Glazbeni paviljon u Zrinjevcu', text: 'Omiljeno mjesto za otvorene koncerte i sezonsku dekoraciju.' },
          { title: 'HAZU i akademije', text: 'Neobarokna zgrada akademije naslanja se na istočnu stranu potkove.' },
          { title: 'Staklenik Botaničkog vrta', text: 'Mali povijesni staklenik među tisućama biljnih vrsta.' }
        ]},
        { type: 'gallery', heading: 'Uz potkovu', images: gallery('Lenucijeva Zelena potkova, Zagreb') }
      ],
      faq: [
        { question: 'Koliko je duga šetnja Zelena potkovom?', answer: 'Cijeli krug dug je oko 2 km i traje otprilike 45–60 minuta opuštenim tempom.' },
        { question: 'Gdje ruta počinje?', answer: 'Na Trgu kralja Tomislava (Tomislavov trg), točno nasuprot Glavnom kolodvoru.' },
        { question: 'Je li Zelena potkova besplatna?', answer: 'Da. Svi trgovi i parkovi javni su prostori, besplatni i otvoreni u svako doba.' },
        { question: 'Je li ruta pristupačna invalidskim kolicima i dječjim kolicima?', answer: 'Da. Staze su ravne i popločane kroz cijeli Donji grad.' },
        { question: 'Kada je najbolje vrijeme za šetnju?', answer: 'Proljeće i rano jesen zbog cvijeća i blagog vremena; zima zbog adventske dekoracije uz rutu.' }
      ]
    },
    'advent-king-tomislav-square': {
      card: { label: 'Advent u Zagrebu', text: 'Tijekom nagrađivanog Adventa trg je domaćin Klizalištu (Ice Park).' },
      title: 'Advent u Zagrebu na Trgu kralja Tomislava | Klizalište i božićni sajam',
      description: 'Tijekom Adventa u Zagrebu, Trg kralja Tomislava domaćin je Klizališta – blagdanskog klizališta na otvorenom. Datumi, savjeti i što očekivati na zagrebačkom božićnom sajmu.',
      h1: 'Advent u Zagrebu na Trgu kralja Tomislava',
      intro: 'Svake zime Zagreb se pretvara u jedno od najvoljenijih božićnih odredišta u Europi. Trg kralja Tomislava ima središnju ulogu: trg postaje domaćin Zagrebačkom klizalištu (Ice Park), velikom klizalištu na otvorenom okruženom blagdanskim svjetlima.',
      exploreTitle: 'Istražite više o Trgu kralja Tomislava',
      backLabel: 'Natrag na Trg kralja Tomislava',
      faqTitle: 'Često postavljana pitanja',
      sections: [
        { type: 'text', heading: 'Zašto je Advent u Zagrebu poznat', paragraphs: [
          'Advent u Zagrebu proglašavan je najboljim božićnim sajmom u Europi od strane European Best Destinations (2016., 2017. i 2018.).',
          'Grad se ispunjava svjetlima, drvenim štandovima, koncertima i mirisom kuhanog vina od kraja studenoga do početka siječnja.'
        ]},
        { type: 'text', heading: 'Klizalište na Tomislavovom trgu', paragraphs: [
          'Tijekom Adventa trg se pretvara u klizalište na otvorenom – Klizalište (Ice Park) – gdje klizači kruže ispod spomenika kralju Tomislavu.',
          'Umjetnički paviljon sjaji iza blagdanskih svjetala, što ga čini jednim od najfotografiranijih mjesta sezone.'
        ]},
        { type: 'list', heading: 'Što očekivati', items: [
          'Klizanje na otvorenom za sve uzraste',
          'Blagdanska svjetla i visoki božićni drvo',
          'Štandovi s hranom i pićem te lokalnim specijalitetima i kuhanim vinom',
          'Glazba uživo i koncerti vikendom',
          'Lagani pristup s Glavnog kolodvora, točno preko puta'
        ]},
        { type: 'text', heading: 'Savjeti za posjet', paragraphs: [
          'Toplo se obucite i ponesite rukavice; sesije klizanja mogu biti hladne. Kupite ulaznice online da izbjegnete red.',
          'Kombinrajte trg s drugim adventskim lokacijama – Trgom bana Jelačića, Zrinjevcem i Europskim trgom – sve na kratkoj šetnji.',
          'Posjetite navečer zbog punog svjetlosnog spektakla, ali očekujte gužve vikendom.'
        ]},
        { type: 'cards', heading: 'Druge adventske lokacije u blizini', cards: [
          { title: 'Trg bana Jelačića', text: 'Glavno adventsko čvorište s velikim božićnim drvetom i glavnom pozornicom.' },
          { title: 'Park Zrinjevac', text: 'Bajkovito ozračje svjetala među platanima.' },
          { title: 'Europski trg', text: 'Novija adventska lokacija s dizajnom i štandovima s hranom.' }
        ]},
        { type: 'gallery', heading: 'Advent na trgu', images: gallery('Advent u Zagrebu na Trgu kralja Tomislava') }
      ],
      faq: [
        { question: 'Kada se održava Advent u Zagrebu?', answer: 'Obično od kraja studenoga do početka siječnja. Točni datumi mijenjaju se svake godine, pa provjerite službeni program Adventa u Zagrebu.' },
        { question: 'Je li Klizalište stvarno na ovom trgu?', answer: 'Da. Tijekom Adventa Trg kralja Tomislava domaćin je Zagrebačkom klizalištu, velikom klizalištu na otvorenom.' },
        { question: 'Trebaju li mi ulaznice za Klizalište?', answer: 'Za klizanje obično je potrebna ulaznica ili propusnica za sesiju; neke su besplatne za djecu. Kupite online da izbjegnete redove.' },
        { question: 'Je li trg pristupačan tijekom Adventa?', answer: 'Da. Trg ostaje otvoren za pješake i bez stepenica je od Glavnog kolodvora.' },
        { question: 'Kakvo je radno vrijeme tijekom Adventa?', answer: 'Štandovi i klizalište obično rade od kasnog jutra do kasne večeri. Provjerite službeni program za trenutno vrijeme.' }
      ]
    }
  },

  zh: {
    'king-tomislav-monument': {
      card: { label: '托米斯拉夫国王雕像', text: '为广场命名的青铜骑马雕像。' },
      title: '托米斯拉夫国王雕像，萨格勒布｜历史与参观指南',
      description: '托米斯拉夫国王广场上的托米斯拉夫国王雕像：Robert Frangeš-Mihanović 创作的青铜骑马雕像，1947 年揭幕。历史、事实与最佳拍照点。',
      h1: '托米斯拉夫国王雕像',
      intro: '托米斯拉夫国王广场中央矗立着托米斯拉夫国王的青铜骑马雕像。他是最早的克罗地亚国王。雕像正对中央火车站，是广场最具标志性的地标，也是多数旅客乘火车抵达萨格勒布时最先看到的景象。',
      exploreTitle: '深入了解托米斯拉夫国王广场',
      backLabel: '返回托米斯拉夫国王广场',
      faqTitle: '常见问题',
      sections: [
        { type: 'text', heading: '托米斯拉夫国王是谁？', paragraphs: [
          '托米斯拉夫于 925 年在教皇祝福下加冕为克罗地亚第一位国王。他统一了克罗地亚各公国，击退马扎尔人的入侵，奠定了中世纪克罗地亚王国的基础。',
          '他约于 928 年去世——加冕仅三年后——其死因至今不明，数百年来一直流传着各种传说。'
        ]},
        { type: 'text', heading: '雕塑家与雕像', paragraphs: [
          '这尊雕像由克罗地亚雕塑家 Robert Frangeš-Mihanović 创作。他于 1938 年塑造了这尊身着礼服、骑在马上的青铜雕像。',
          '由于雕像正对火车站，每一位乘火车抵达的旅客都会先与国王相遇——这是城市刻意的迎宾设计。'
        ]},
        { type: 'list', heading: '关键事实', items: [
          '1947 年 10 月揭幕，距雕像完成已近十年',
          '纪念克罗地亚王国建立千年',
          '青铜铸造，立于石质基座之上',
          '位于广场南端，正对 Glavni kolodvor（中央车站）',
          '由 Robert Frangeš-Mihanović 设计'
        ]},
        { type: 'text', heading: '象征意义', paragraphs: [
          '在历经多年的造型与选址争议，以及第二次世界大战的打断之后，雕像最终揭幕。对萨格勒布而言，它是国家认同的宣示，也是向这位为克罗地亚戴上王冠的君主致敬。',
          '它与身后黄色的艺术馆共同构成了广场最具代表性的明信片画面。'
        ]},
        { type: 'cards', heading: '雕像近旁', cards: [
          { title: '艺术馆（Umjetnički paviljon）', text: '克罗地亚第一座专门建造的展览馆，建于 1898 年。' },
          { title: '中央火车站', text: '1892 年的历史主义车站建筑就正对面。' },
          { title: '兹林耶瓦茨公园', text: '绿马蹄的下一处绿色链接，向北步行约 6 分钟。' }
        ]},
        { type: 'gallery', heading: '雕像影像', images: gallery('托米斯拉夫国王雕像，萨格勒布') }
      ],
      faq: [
        { question: '托米斯拉夫国王是谁？', answer: '托米斯拉夫是克罗地亚第一位国王，925 年加冕。他统一了克罗地亚各公国，被视为中世纪克罗地亚王国的奠基者。' },
        { question: '雕像何时揭幕？', answer: '青铜雕像于 1938 年完成，但因争议与第二次世界大战拖延，直到 1947 年 10 月才正式揭幕。' },
        { question: '谁创作了这尊雕像？', answer: '由克罗地亚雕塑家 Robert Frangeš-Mihanović 创作。' },
        { question: '游客可以攀爬或触摸雕像吗？', answer: '不可以。为保护与安全规定，请勿攀爬雕像或其基座。您可以在周围草坪上自由拍照。' },
        { question: '最佳拍照位置在哪里？', answer: '在车站一侧的广场上，于黄金时段取景，可让国王、艺术馆与主教座堂塔楼同框。' }
      ]
    },
    'things-to-do-near-king-tomislav-square': {
      card: { label: '周边值得一去', text: '兹林耶瓦茨、耶拉契奇广场、中央车站等——都在短步之内。' },
      title: '托米斯拉夫国王广场周边好去处，萨格勒布｜邻近景点',
      description: '与托米斯拉夫国王广场可一并游览的地方：兹林耶瓦茨公园、耶拉契奇总督广场、中央车站、植物园与绿马蹄——都在短步之内。',
      h1: '托米斯拉夫国王广场周边好去处',
      intro: '托米斯拉夫国王广场是莱努奇绿马蹄的南大门——一连串公园与广场让萨格勒布下城区非常适合步行。从广场出发，许多城市地标都在 15 分钟步行之内。',
      exploreTitle: '深入了解托米斯拉夫国王广场',
      backLabel: '返回托米斯拉夫国王广场',
      faqTitle: '常见问题',
      sections: [
        { type: 'text', heading: '天然的步行中心', paragraphs: [
          '由于广场正对中央火车站，又位于绿马蹄的起点，它是步行游览萨格勒布市中心的理想起点。',
          '以下多数地点由平坦、绿荫的步道和电车线路相连，因此这条路线四季皆宜。'
        ]},
        { type: 'cards', heading: '热门邻近景点', cards: [
          { title: '兹林耶瓦茨公园 · 450 米', text: '绿马蹄的下一处绿色链接，以悬铃木、喷泉和一座 19 世纪气象柱闻名。' },
          { title: '耶拉契奇总督广场 · 850 米', text: '萨格勒布主广场与集会之地，有耶拉契奇总督骑马像，以及步行街 Ilica 的起点。' },
          { title: '克罗地亚国家剧院（HNK）· 1.1 公里', text: '绿马蹄更远处的新巴洛克剧院建筑，提供导览与丰富演出。' },
          { title: '中央火车站 · 对面', text: '1892 年的历史主义车站建筑就正对面——您的抵达与离开点。' },
          { title: '植物园 · 700 米', text: '拥有数千种植物、池塘与小温室的绿色绿洲（季节性开放）。' },
          { title: '工艺美术博物馆 · 1 公里', text: '萨格勒布最精美的分离派建筑之一，陈列应用艺术藏品。' }
        ]},
        { type: 'text', heading: '绿马蹄一览', paragraphs: [
          '绿马蹄（Zelena potkova）是城市规划师 Milan Lenuci 于 19 世纪末设计的一系列八个广场与公园组成的 U 形系统。',
          '托米斯拉夫广场位于其南端；链条向北经兹林耶瓦茨延伸至植物园与艺术学院。'
        ]},
        { type: 'list', heading: '如何规划步行', items: [
          '从托米斯拉夫国王雕像出发，沿绿马蹄向北步行',
          '在兹林耶瓦茨停留，欣赏喷泉与音乐亭',
          '继续前往耶拉契奇总督广场购物与乘电车',
          '若有时间，再添加植物园或一座博物馆'
        ]},
        { type: 'gallery', heading: '广场周边', images: gallery('托米斯拉夫国王广场及萨格勒布周边') }
      ],
      faq: [
        { question: '耶拉契奇广场离广场多远？', answer: '约 850 米，沿绿马蹄公园向北步行 11 分钟，或乘 6 或 13 路电车两站。' },
        { question: '所有景点都在步行范围内吗？', answer: '是的。主要邻近景点相距 450–1100 米，由平坦宜人的步道相连。' },
        { question: '什么是绿马蹄？', answer: '由 Milan Lenuci 于 19 世纪末设计的八个广场与公园组成的链条，托米斯拉夫广场位于其南端。' },
        { question: '可以参加导览步行游吗？', answer: '许多涵盖绿马蹄的萨格勒布城市游都把托米斯拉夫国王广场纳入行程。' },
        { question: '这一带适合拍照吗？', answer: '非常适合——雕像、艺术馆与周边的历史主义建筑四季都是绝佳题材。' }
      ]
    },
    'green-horseshoe-walking-route': {
      card: { label: '绿马蹄徒步路线', text: '沿莱努奇公园与广场链的自助步行路线。' },
      title: '萨格勒布绿马蹄徒步路线｜莱努奇马蹄指南',
      description: '漫步萨格勒布的莱努奇绿马蹄（Zelena potkova）：从托米斯拉夫广场到植物园的 U 形公园与广场链。路线、地图与亮点。',
      h1: '绿马蹄徒步路线',
      intro: '莱努奇绿马蹄（Zelena potkova）是城市规划师 Milan Lenuci 于 19 世纪末布局的 U 形八个广场与公园链。从托米斯拉夫国王广场出发，它是欧洲最轻松、最美丽的城市步行之一。',
      exploreTitle: '深入了解托米斯拉夫国王广场',
      backLabel: '返回托米斯拉夫国王广场',
      faqTitle: '常见问题',
      sections: [
        { type: 'text', heading: '什么是绿马蹄？', paragraphs: [
          '马蹄形将下城区的绿地连接为连续的公园系统，平衡了萨格勒布市中心的建设区块。',
          '其八个广场与公园包括托米斯拉夫广场、兹林耶瓦茨、斯特罗斯马耶罗夫广场、克罗地亚科学与艺术院（HAZU）、植物园、马尔库舍夫广场、反法西斯广场以及兹里涅斯基和普雷达洛维奇广场。'
        ]},
        { type: 'list', heading: '路线上的广场与公园', items: [
          '托米斯拉夫广场——南大门，有托米斯拉夫国王雕像',
          '兹林耶瓦茨——喷泉、悬铃木与音乐亭',
          '斯特罗斯马耶罗夫广场——毗邻科学院与考古博物馆',
          '植物园——有池塘的静谧绿洲',
          '马尔库舍夫广场与反法西斯广场——雅致的住宅广场',
          '兹里涅斯基与普雷达洛维奇广场——闭合北翼'
        ]},
        { type: 'text', heading: '建议的自助路线', paragraphs: [
          '从正对中央车站的托米斯拉夫国王雕像开始。沿草坪向北走，穿过兹林耶瓦茨，再经斯特罗斯马耶罗夫广场前往植物园。',
          '整圈约 2 公里，轻松步调需 45–60 分钟，若驻足博物馆与咖啡馆则更久。'
        ]},
        { type: 'cards', heading: '不容错过的亮点', cards: [
          { title: '兹林耶瓦茨音乐亭', text: '露天音乐会和季节性装饰的人气之地。' },
          { title: 'HAZU 与科学院', text: '新巴洛克风格的学院建筑坐落于马蹄东侧。' },
          { title: '植物园温室', text: '数千种植物之间的一座小型历史温室。' }
        ]},
        { type: 'gallery', heading: '马蹄沿线', images: gallery('莱努奇绿马蹄，萨格勒布') }
      ],
      faq: [
        { question: '绿马蹄步行有多长？', answer: '整圈约 2 公里，轻松步调大约 45–60 分钟。' },
        { question: '路线从哪里开始？', answer: '从托米斯拉夫国王广场（Tomislavov trg）出发，正对中央火车站。' },
        { question: '绿马蹄免费吗？', answer: '是的。所有广场与公园都是公共空间，全天免费开放。' },
        { question: '路线对轮椅和婴儿车友好吗？', answer: '是的。下城区全程步道平坦且铺装。' },
        { question: '什么时候最适合步行？', answer: '春与初秋花草繁盛、气候温和；冬季则可欣赏沿线的降临节装饰。' }
      ]
    },
    'advent-king-tomislav-square': {
      card: { label: '萨格勒布降临节', text: '在屡获殊荣的降临节期间，广场设有滑冰公园（Ice Park）。' },
      title: '托米斯拉夫国王广场上的萨格勒布降临节｜滑冰公园与圣诞集市',
      description: '降临节期间，托米斯拉夫国王广场设有滑冰公园（Ice Park）——一个节日气氛的露天滑冰场。日期、贴士与萨格勒布圣诞集市的看点。',
      h1: '托米斯拉夫国王广场上的萨格勒布降临节',
      intro: '每年冬天，萨格勒布都会变成欧洲最受欢迎的圣诞目的地之一。托米斯拉夫国王广场扮演着核心角色：广场化身为萨格勒布滑冰公园（Ice Park），一个被节日彩灯环绕的露天滑冰场。',
      exploreTitle: '深入了解托米斯拉夫国王广场',
      backLabel: '返回托米斯拉夫国王广场',
      faqTitle: '常见问题',
      sections: [
        { type: 'text', heading: '为何萨格勒布降临节闻名', paragraphs: [
          '萨格勒布降临节曾被 European Best Destinations 评为欧洲最佳圣诞集市（2016、2017 与 2018 年）。',
          '从十一月底到一月初，全城被彩灯、木屋摊位、音乐会和热红酒的香气填满。'
        ]},
        { type: 'text', heading: '广场上的滑冰公园', paragraphs: [
          '降临节期间，广场变身为露天滑冰场——滑冰公园（Ice Park）——人们在托米斯拉夫国王雕像下滑行。',
          '艺术馆在节日彩灯后熠熠生辉，使其成为这个季节被拍摄最多的画面之一。'
        ]},
        { type: 'list', heading: '可以期待什么', items: [
          '适合各年龄段的露天滑冰',
          '节日彩灯与高大的圣诞树',
          '提供当地特色与热红酒的餐饮摊位',
          '现场音乐与周末音乐会',
          '从正对面的中央车站轻松抵达'
        ]},
        { type: 'text', heading: '参观贴士', paragraphs: [
          '穿暖并戴手套；滑冰场次可能很冷。在线购票以避免排队。',
          '将广场与其他降临节地点结合——耶拉契奇总督广场、兹林耶瓦茨与欧洲广场——都在短步之内。',
          '傍晚前往欣赏完整灯饰，但周末人会更多。'
        ]},
        { type: 'cards', heading: '附近其他降临节地点', cards: [
          { title: '耶拉契奇总督广场', text: '设有高大圣诞树和主舞台的主降临节枢纽。' },
          { title: '兹林耶瓦茨公园', text: '悬铃木间灯饰如童话般梦幻。' },
          { title: '欧洲广场（Europski trg）', text: '较新的降临节地点，有设计与美食摊位。' }
        ]},
        { type: 'gallery', heading: '广场上的降临节', images: gallery('萨格勒布降临节 · 托米斯拉夫国王广场') }
      ],
      faq: [
        { question: '萨格勒布降临节何时举办？', answer: '通常从十一月底到一月初。确切日期每年不同，请查看萨格勒布降临节的官方节目单。' },
        { question: '滑冰公园真的在这个广场上吗？', answer: '是的。降临节期间，托米斯拉夫国王广场设有萨格勒布滑冰公园，一个大型露天滑冰场。' },
        { question: '滑冰公园需要门票吗？', answer: '滑冰通常需要门票或场次通票；部分场次对儿童免费。在线购买以避免排队。' },
        { question: '降临节期间广场可以通行吗？', answer: '可以。广场仍对行人开放，并且从中央车站出发无需台阶。' },
        { question: '降临节期间的开放时间是？', answer: '摊位与冰场一般从上午晚些时候营业到深夜。请查看官方节目单了解当前时间。' }
      ]
    }
  },

  de: {
    'king-tomislav-monument': {
      card: { label: 'König-Tomislav-Denkmal', text: 'Das bronzene Reiterstandbild, nach dem der Platz benannt ist.' },
      title: 'König-Tomislav-Denkmal, Zagreb | Geschichte & Besucherführer',
      description: 'Das König-Tomislav-Denkmal auf dem Trg Kralja Tomislava: ein bronzenes Reiterstandbild von Robert Frangeš-Mihanović, 1947 enthüllt. Geschichte, Fakten und beste Fotoplätze.',
      h1: 'Das König-Tomislav-Denkmal',
      intro: 'Im Herzen des Trg Kralja Tomislava steht das bronzene Reiterstandbild für Tomislav, den ersten König von Kroatien. Dem Hauptbahnhof zugewandt, ist es das prägende Wahrzeichen des Platzes und das erste, was die meisten Reisenden bei der Ankunft mit der Bahn in Zagreb sehen.',
      exploreTitle: 'Mehr über den Trg Kralja Tomislava',
      backLabel: 'Zurück zum Trg Kralja Tomislava',
      faqTitle: 'Häufig gestellte Fragen',
      sections: [
        { type: 'text', heading: 'Wer war König Tomislav?', paragraphs: [
          'Tomislav wurde 925 mit päpstlichem Segen zum ersten König von Kroatien gekrönt. Er einen die kroatischen Herzogtümer, wies die magyarischen Invasionen zurück und legte den Grundstein für das mittelalterliche kroatische Königreich.',
          'Er starb um 928 – kaum drei Jahre nach seiner Krönung –, und die Umstände seines Todes sind bis heute unbekannt, was über Jahrhunderte Legenden nährte.'
        ]},
        { type: 'text', heading: 'Der Bildhauer und das Standbild', paragraphs: [
          'Das Denkmal schuf der kroatische Bildhauer Robert Frangeš-Mihanović. Er modellierte die bronzene Reiterstatue 1938 und zeigte den König auf dem Pferd in feierlicher Kleidung.',
          'Da das Standbild zum Bahnhof blickt, begegnet jeder ankommende Reisende dem König zuerst – ein bewusster Empfang für die Stadt.'
        ]},
        { type: 'list', heading: 'Wichtige Fakten', items: [
          'Im Oktober 1947 enthüllt, fast ein Jahrzehnt nach Fertigstellung der Skulptur',
          'Erinnern an das Jahrtausend des kroatischen Königreichs',
          'Aus Bronze auf einem steinernen Sockel',
          'Am südlichen Ende des Platzes, zum Glavni kolodvor (Hauptbahnhof) gewandt',
          'Von Robert Frangeš-Mihanović gestaltet'
        ]},
        { type: 'text', heading: 'Symbolik und Bedeutung', paragraphs: [
          'Das Denkmal wurde nach Jahren von Streitigkeiten über Gestalt und Standort sowie durch den Zweiten Weltkrieg verzögert schließlich enthüllt. Für Zagreb ist es ein Zeichen nationaler Identität und eine Huldigung an den Herrscher, der dem Land die Königskrone brachte.',
          'Zusammen mit dem gelben Kunstpavillon dahinter bildet die Statue die klassische Postkartenansicht des Platzes.'
        ]},
        { type: 'cards', heading: 'Direkt am Denkmal', cards: [
          { title: 'Kunstpavillon (Umjetnički paviljon)', text: 'Kroatiens erster eigens gebauter Ausstellungssaal, aus dem Jahr 1898.' },
          { title: 'Hauptbahnhof', text: 'Das historistische Bahnhofsgebäude von 1892 liegt direkt gegenüber.' },
          { title: 'Zrinjevac-Park', text: 'Die nächste grüne Kette der Grünen Hufeisen, 6 Minuten Fußweg nordwärts.' }
        ]},
        { type: 'gallery', heading: 'Das Denkmal im Bild', images: gallery('König-Tomislav-Denkmal, Zagreb') }
      ],
      faq: [
        { question: 'Wer war König Tomislav?', answer: 'Tomislav war der erste König von Kroatien, gekrönt 925. Er einen die kroatischen Herzogtümer und gilt als Begründer des mittelalterlichen kroatischen Königreichs.' },
        { question: 'Wann wurde das Denkmal enthüllt?', answer: 'Die Bronzestatue wurde 1938 vollendet, aber erst im Oktober 1947 enthüllt, verzögert durch Streitigkeiten und den Zweiten Weltkrieg.' },
        { question: 'Wer schuf das König-Tomislav-Denkmal?', answer: 'Es wurde vom kroatischen Bildhauer Robert Frangeš-Mihanović geschaffen.' },
        { question: 'Dürfen Besucher auf das Denkmal klettern oder es berühren?', answer: 'Nein. Zum Schutz und aus Sicherheitsgründen bitte nicht auf die Statue oder den Sockel klettern. Fotografieren dürfen Sie es frei von den umliegenden Rasenflächen.' },
        { question: 'Wo ist der beste Fotoplatz für das Denkmal?', answer: 'Stellen Sie sich an der Bahnhofsseite des Platzes zur goldenen Stunde, sodass König, Kunstpavillon und Kathedraltürme im selben Bild stehen.' }
      ]
    },
    'things-to-do-near-king-tomislav-square': {
      card: { label: 'Sehenswürdigkeiten in der Nähe', text: 'Zrinjevac, Ban-Jelačić-Platz, Hauptbahnhof und mehr – alles in kurzem Fußweg.' },
      title: 'Was man bei König-Tomislav-Platz in Zagreb unternehmen kann | Sehenswürdigkeiten in der Nähe',
      description: 'Was man mit dem Trg Kralja Tomislava kombinieren kann: Zrinjevac-Park, Ban-Jelačić-Platz, Hauptbahnhof, Botanischer Garten und das Grüne Hufeisen – alles in kurzem Fußweg.',
      h1: 'Was man bei König-Tomislav-Platz unternehmen kann',
      intro: 'Der Trg Kralja Tomislava ist das südliche Tor zu Lenucis Grünem Hufeisen – einer Kette von Parks und Plätzen, die die Unterstadt von Zagreb ideal zum Spazieren machen. Vom Platz aus erreichen Sie viele der Stadt Highlights in weniger als 15 Minuten zu Fuß.',
      exploreTitle: 'Mehr über den Trg Kralja Tomislava',
      backLabel: 'Zurück zum Trg Kralja Tomislava',
      faqTitle: 'Häufig gestellte Fragen',
      sections: [
        { type: 'text', heading: 'Ein natürlicher Ausgangspunkt', paragraphs: [
          'Da der Platz direkt gegenüber dem Hauptbahnhof und am Anfang des Grünen Hufeisens liegt, ist er der ideale Startpunkt für eine Fußwanderung durch die Zagreber Innenstadt.',
          'Die meisten Orte unten sind durch flache, schattige Wege und Straßenbahnlinien verbunden, sodass die Route in jeder Jahreszeit funktioniert.'
        ]},
        { type: 'cards', heading: 'Top-Sehenswürdigkeiten in der Nähe', cards: [
          { title: 'Zrinjevac-Park · 450 m', text: 'Die nächste grüne Kette des Grünen Hufeisens, bekannt für Platanen, Brunnen und eine meteorologische Säule aus dem 19. Jahrhundert.' },
          { title: 'Ban-Jelačić-Platz · 850 m', text: 'Zagrebs Hauptplatz und Treffpunkt, mit dem Reiterstandbild des Ban Josip Jelačić und dem Beginn der Einkaufsstraße Ilica.' },
          { title: 'Kroatisches Nationaltheater (HNK) · 1,1 km', text: 'Ein neobarockes Theater weiter nördlich am Grünen Hufeisen, mit Führungen und reichem Programm.' },
          { title: 'Hauptbahnhof · gegenüber', text: 'Das historistische Bahnhofsgebäude von 1892 liegt direkt gegenüber – Ihr Ankunfts- und Abreiseort.' },
          { title: 'Botanischer Garten · 700 m', text: 'Eine grüne Oase mit Tausenden Pflanzenarten, Teichen und einem kleinen Gewächshaus (saisonale Öffnung).' },
          { title: 'Museum für Kunst und Gewerbe · 1 km', text: 'Eines der schönsten secessionistischen Gebäude Zagrebs, mit Sammlungen angewandter Kunst.' }
        ]},
        { type: 'text', heading: 'Das Grüne Hufeisen im Überblick', paragraphs: [
          'Das Grüne Hufeisen (Zelena potkova) ist ein U-förmiges System von acht Plätzen und Parks, das der Stadtplaner Milan Lenuci im späten 19. Jahrhundert entwarf.',
          'Der Tomislav-Platz bildet seine südliche Spitze; die Kette verläuft nördlich über Zrinjevac zum Botanischen Garten und zur Kunstakademie.'
        ]},
        { type: 'list', heading: 'So planen Sie Ihren Spaziergang', items: [
          'Beginnen Sie beim König-Tomislav-Denkmal und gehen Sie nördlich am Grünen Hufeisen entlang',
          'Machen Sie am Zrinjevac bei den Brunnen und dem Musikpavillon Halt',
          'Weiter zum Ban-Jelačić-Platz für Einkaufen und Straßenbahn',
          'Fügen Sie bei Zeit den Botanischen Garten oder ein Museum hinzu'
        ]},
        { type: 'gallery', heading: 'Um den Platz', images: gallery('Trg Kralja Tomislava und Umgebung, Zagreb') }
      ],
      faq: [
        { question: 'Wie weit ist der Ban-Jelačić-Platz vom Platz entfernt?', answer: 'Etwa 850 m, 11 Minuten Fußweg nördlich durch die Parks des Grünen Hufeisens, oder zwei Straßenbahnstationen mit den Linien 6 oder 13.' },
        { question: 'Ist alles zu Fuß erreichbar?', answer: 'Ja. Die wichtigsten Sehenswürdigkeiten in der Nähe liegen 450–1100 m entfernt und sind durch flache, angenehme Wege verbunden.' },
        { question: 'Was ist das Grüne Hufeisen?', answer: 'Eine Kette von acht Plätzen und Parks, die Milan Lenuci im späten 19. Jahrhundert entwarf, mit dem Tomislav-Platz an seinem Südende.' },
        { question: 'Kann ich an einer geführten Wanderung teilnehmen?', answer: 'Viele Zagreber Stadttouren zum Grünen Hufeisen führen auch den Trg Kralja Tomislava in ihrem Programm.' },
        { question: 'Eignet sich das Areal gut zum Fotografieren?', answer: 'Ja – Denkmal, Kunstpavillon und die umgebende historistische Architektur sind in jeder Jahreszeit hervorragende Motive.' }
      ]
    },
    'green-horseshoe-walking-route': {
      card: { label: 'Grünes Hufeisen Route', text: 'Eine selbstgeführte Wanderung entlang Lenucis Kette von Parks und Plätzen.' },
      title: 'Wanderroute Grünes Hufeisen, Zagreb | Lenucis Hufeisen-Führer',
      description: 'Durchwandern Sie Lenucis Grünes Hufeisen (Zelena potkova) in Zagreb: eine U-förmige Kette von Parks und Plätzen vom Tomislav-Platz zum Botanischen Garten. Route, Karte und Highlights.',
      h1: 'Die Wanderroute Grünes Hufeisen',
      intro: 'Lenucis Grünes Hufeisen (Zelena potkova) ist eine U-förmige Kette von acht Plätzen und Parks, die der Stadtplaner Milan Lenuci im späten 19. Jahrhundert anlegte. Beginnend am Trg Kralja Tomislava ist es einer der einfachsten und schönsten Stadtspaziergänge Europas.',
      exploreTitle: 'Mehr über den Trg Kralja Tomislava',
      backLabel: 'Zurück zum Trg Kralja Tomislava',
      faqTitle: 'Häufig gestellte Fragen',
      sections: [
        { type: 'text', heading: 'Was ist das Grüne Hufeisen?', paragraphs: [
          'Das Hufeisen verbindet die Grünflächen der Unterstadt zu einem durchgehenden Parksystem, das die bebauten Blöcke des zentralen Zagreb ausbalanciert.',
          'Seine acht Plätze und Parks umfassen den Tomislav-Platz, Zrinjevac, Strossmayer-Platz, die Kroatische Akademie der Wissenschaften und Künste (HAZU), den Botanischen Garten, Markušev-Platz, den Trg žrtava fašizma und den Zrinski-Platz.'
        ]},
        { type: 'list', heading: 'Plätze und Parks entlang der Route', items: [
          'Tomislav-Platz – das südliche Tor mit dem König-Tomislav-Denkmal',
          'Zrinjevac – Brunnen, Platanen und Musikpavillon',
          'Strossmayer-Platz – umgeben von Akademie und Archäologischem Museum',
          'Botanischer Garten – eine ruhige grüne Oase mit Teichen',
          'Markušev-Platz und Trg žrtava fašizma – elegante Wohnplätze',
          'Zrinski- und Petar-Preradović-Platz – schließen den Nordflügel'
        ]},
        { type: 'text', heading: 'Vorgeschlagene selbstgeführte Route', paragraphs: [
          'Beginnen Sie beim König-Tomislav-Denkmal, das zum Hauptbahnhof blickt. Gehen Sie nördlich über die Rasenflächen, überqueren Sie zu Zrinjevac und weiter über den Strossmayer-Platz zum Botanischen Garten.',
          'Der gesamte Rundweg ist etwa 2 km lang und dauert bei entspanntem Tempo 45–60 Minuten, länger wenn Sie in Museen und Cafés haltmachen.'
        ]},
        { type: 'cards', heading: 'Highlights, die Sie nicht verpassen sollten', cards: [
          { title: 'Musikpavillon im Zrinjevac', text: 'Ein Lieblingsort für Open-Air-Konzerte und saisonale Dekoration.' },
          { title: 'HAZU und die Akademien', text: 'Das neobarocke Akademiegebäude säumt die Ostseite des Hufeisens.' },
          { title: 'Gewächshaus des Botanischen Gartens', text: 'Ein kleines historisches Gewächshaus mitten unter Tausenden Pflanzenarten.' }
        ]},
        { type: 'gallery', heading: 'Entlang des Hufeisens', images: gallery('Lenucis Grünes Hufeisen, Zagreb') }
      ],
      faq: [
        { question: 'Wie lang ist der Spaziergang durchs Grüne Hufeisen?', answer: 'Der gesamte Rundweg ist etwa 2 km lang und dauert entspannt etwa 45–60 Minuten.' },
        { question: 'Wo beginnt die Route?', answer: 'Am Trg Kralja Tomislava (Tomislav-Platz), direkt gegenüber dem Hauptbahnhof.' },
        { question: 'Ist das Grüne Hufeisen kostenlos?', answer: 'Ja. Alle Plätze und Parks sind öffentliche Räume, kostenlos und rund um die Uhr geöffnet.' },
        { question: 'Ist die Route für Rollstühle und Kinderwagen geeignet?', answer: 'Ja. Die Wege sind in der gesamten Unterstadt flach und gepflastert.' },
        { question: 'Wann ist die beste Zeit für den Spaziergang?', answer: 'Frühling und früher Herbst wegen der Blumen und des milden Wetters; Winter wegen der Advent-Dekoration entlang der Route.' }
      ]
    },
    'advent-king-tomislav-square': {
      card: { label: 'Advent in Zagreb', text: 'Während des preisgekrönten Advents ist der Platz Schauplatz des Ice Parks.' },
      title: 'Advent in Zagreb am König-Tomislav-Platz | Ice Park & Weihnachtsmarkt',
      description: 'Während des Advents in Zagreb verwandelt sich der Trg Kralja Tomislava in den Ice Park – eine festliche Eisbahn im Freien. Termine, Tipps und was Sie auf dem Zagreber Weihnachtsmarkt erwartet.',
      h1: 'Advent in Zagreb am König-Tomislav-Platz',
      intro: 'Jeden Winter verwandelt sich Zagreb in eines der beliebtesten Weihnachtsreiseziele Europas. Der Trg Kralja Tomislava spielt eine zentrale Rolle: Der Platz wird zum Zagreber Ice Park, einer großen Eisbahn im Freien, umgeben von festlichen Lichtern.',
      exploreTitle: 'Mehr über den Trg Kralja Tomislava',
      backLabel: 'Zurück zum Trg Kralja Tomislava',
      faqTitle: 'Häufig gestellte Fragen',
      sections: [
        { type: 'text', heading: 'Warum Advent in Zagreb berühmt ist', paragraphs: [
          'Advent in Zagreb wurde von European Best Destinations (2016, 2017 und 2018) zum besten Weihnachtsmarkt Europas gewählt.',
          'Die Stadt füllt sich von Ende November bis Anfang Januar mit Lichtern, Holzbuden, Konzerten und dem Duft von Glühwein.'
        ]},
        { type: 'text', heading: 'Der Ice Park am Tomislav-Platz', paragraphs: [
          'Während des Advents verwandelt sich der Platz in eine Eisbahn im Freien – den Ice Park (Klizalište) –, auf der Schlittschuhläufer unter dem König-Tomislav-Denkmal gleiten.',
          'Der Kunstpavillon leuchtet hinter den festlichen Lichtern und macht ihn zu einem der meistfotografierten Orte der Saison.'
        ]},
        { type: 'list', heading: 'Was Sie erwartet', items: [
          'Eislaufen im Freien für alle Altersgruppen',
          'Festliche Lichter und ein hoher Weihnachtsbaum',
          'Stände mit Essen, Trinken und lokalen Spezialitäten sowie Glühwein',
          'Live-Musik und Wochenendkonzerte',
          'Einfache Anreise vom Hauptbahnhof, direkt gegenüber'
        ]},
        { type: 'text', heading: 'Tipps für den Besuch', paragraphs: [
          'Ziehen Sie sich warm an und nehmen Sie Handschuhe mit; die Eisseancen können kalt sein. Kaufen Sie Tickets online, um Warteschlangen zu vermeiden.',
          'Kombinieren Sie den Platz mit anderen Advent-Orten – Ban-Jelačić-Platz, Zrinjevac und Europski trg –, alles in kurzem Fußweg.',
          'Besuchen Sie den Platz am Abend für das volle Lichterspektakel, rechnen Sie aber am Wochenende mit mehr Menschen.'
        ]},
        { type: 'cards', heading: 'Weitere Advent-Orte in der Nähe', cards: [
          { title: 'Ban-Jelačić-Platz', text: 'Das zentrale Advent-Drehkreuz mit dem großen Weihnachtsbaum und der Hauptbühne.' },
          { title: 'Zrinjevac-Park', text: 'Eine märchenhafte Lichterkulisse zwischen den Platanen.' },
          { title: 'Europski trg (Europaplatz)', text: 'Ein neuerer Advent-Ort mit Design- und Food-Ständen.' }
        ]},
        { type: 'gallery', heading: 'Advent am Platz', images: gallery('Advent in Zagreb am Trg Kralja Tomislava') }
      ],
      faq: [
        { question: 'Wann findet Advent in Zagreb statt?', answer: 'Meist von Ende November bis Anfang Januar. Die genauen Termine ändern sich jährlich, prüfen Sie daher das offizielle Programm von Advent in Zagreb.' },
        { question: 'Ist der Ice Park wirklich auf diesem Platz?', answer: 'Ja. Während des Advents ist der Trg Kralja Tomislava Schauplatz des Zagreber Ice Parks, einer großen Eisbahn im Freien.' },
        { question: 'Brauche ich Tickets für den Ice Park?', answer: 'Zum Eislaufen ist meist ein Ticket oder eine Sitzungskarte nötig; einige Sitzungen sind für Kinder kostenlos. Kaufen Sie online, um Schlangen zu vermeiden.' },
        { question: 'Ist der Platz während des Advents zugänglich?', answer: 'Ja. Der Platz bleibt für Fußgänger geöffnet und ist vom Hauptbahnhof aus barrierefrei.' },
        { question: 'Wie sind die Öffnungszeiten während des Advents?', answer: 'Stände und Eisbahn haben meist von späterem Vormittag bis spät in die Nacht geöffnet. Prüfen Sie das offizielle Programm für aktuelle Zeiten.' }
      ]
    }
  }
};

const topicLinksMeta = {
  en: { title: 'Explore More', subtitle: 'Dedicated guides to the monument, the surroundings and the seasons of Trg Kralja Tomislava.', cta: 'Read guide' },
  hr: { title: 'Istražite više', subtitle: 'Posebni vodiči za spomenik, okolinu i godišnja doba Trga kralja Tomislava.', cta: 'Pročitajte vodič' },
  zh: { title: '探索更多', subtitle: '关于托米斯拉夫国王广场的纪念碑、周边与四季活动的专题指南。', cta: '查看指南' },
  de: { title: 'Mehr entdecken', subtitle: 'Eigene Reiseführer zum Denkmal, der Umgebung und den Jahreszeiten des Trg Kralja Tomislava.', cta: 'Zum Guide' }
};

for (const locale of ['en', 'hr', 'zh', 'de']) {
  writeFileSync(
    `src/content/topics/${locale}.json`,
    JSON.stringify(data[locale], null, 2) + '\n'
  );

  const msgPath = `src/messages/${locale}.json`;
  const msg = JSON.parse(readFileSync(msgPath, 'utf8'));
  msg.topicLinks = {
    ...topicLinksMeta[locale],
    items: Object.entries(data[locale]).map(([slug, t]) => ({
      slug,
      label: t.card.label,
      text: t.card.text
    }))
  };
  writeFileSync(msgPath, JSON.stringify(msg, null, 2) + '\n');
  console.log('wrote topics + topicLinks for', locale);
}
