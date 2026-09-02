import fs from 'node:fs';

const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const hs = [...sitemap.matchAll(/hreflang="([^"]+)"/g)].map((m) => m[1]);
console.log('unique hreflangs:', [...new Set(hs)].join(', '));
console.log('/hr URLs:', (sitemap.match(/https:\/\/tomislavsquare\.com\/hr/g) || []).length);
console.log('x-default present:', sitemap.includes('hreflang="x-default"'));
console.log('x-default -> /hr:', /hreflang="x-default"[^>]*href="https:\/\/tomislavsquare\.com\/hr"/.test(sitemap));

// Check JSON-LD in generated /hr page
const hrPage = fs.readFileSync('.next/server/app/hr.html', 'utf8');
const ld = [...hrPage.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
console.log('\n/hr JSON-LD blocks:', ld.length);
for (const block of ld) {
  try {
    const obj = JSON.parse(block);
    const types = obj['@graph'] ? obj['@graph'].map((n) => n['@type']).join(', ') : obj['@type'];
    console.log(' -', types);
    if (obj['@graph']) {
      const ta = obj['@graph'].find((n) => n['@type'] === 'TouristAttraction');
      if (ta) {
        console.log('   alternateName:', ta.alternateName);
        console.log('   hasMap:', ta.hasMap);
        console.log('   geo:', JSON.stringify(ta.geo));
        console.log('   openingHours:', ta.openingHoursSpecification ? 'present' : 'MISSING');
      }
    }
  } catch (e) {
    console.log('   parse error:', e.message);
  }
}

// Check title / description
const title = hrPage.match(/<title>([^<]*)<\/title>/);
console.log('\n/hr <title>:', title ? title[1] : 'NOT FOUND');
const desc = hrPage.match(/<meta name="description" content="([^"]*)"/);
console.log('/hr description:', desc ? desc[1] : 'NOT FOUND');
console.log('/hr canonical:', hrPage.includes('rel="canonical" href="https://tomislavsquare.com/hr"'));
console.log('\n/hr contains Tomislavac:', hrPage.includes('Tomislavac'));
console.log('/hr contains tomislavov trg (lower):', hrPage.toLowerCase().includes('tomislavov trg'));
console.log('/hr contains Umjetnički paviljon:', hrPage.includes('Umjetnički paviljon'));
console.log('/hr FAQPage JSON-LD:', hrPage.includes('"FAQPage"'));
