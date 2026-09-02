// Compress gallery JPEGs in place: resize to max edge + mozjpeg quality.
// -1.jpg is used as full-screen Hero background AND og:image, keep it larger.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const galleryDir = path.join(__dirname, '..', 'public', 'gallery');

const HERO_FILE = 'trg-kralja-tomislava-1.jpg';
const MAX_EDGE_HERO = 1920;
const MAX_EDGE_DEFAULT = 1600;
const QUALITY_HERO = 85;
const QUALITY_DEFAULT = 82;

let totalBefore = 0;
let totalAfter = 0;

const files = fs
  .readdirSync(galleryDir)
  .filter((f) => /\.jpe?g$/i.test(f))
  .sort();

for (const file of files) {
  const src = path.join(galleryDir, file);
  const before = fs.statSync(src).size;
  const isHero = file === HERO_FILE;
  const maxEdge = isHero ? MAX_EDGE_HERO : MAX_EDGE_DEFAULT;
  const quality = isHero ? QUALITY_HERO : QUALITY_DEFAULT;

  const meta = await sharp(src, { failOn: 'none' }).metadata();
  const longest = Math.max(meta.width, meta.height);
  const tmp = `${src}.tmp`;

  // Write to a temp file first, then rename over the original. Direct
  // O_TRUNC writes are blocked on this machine (errno -4094), while
  // rename-overwrite is not.
  await sharp(src, { failOn: 'none' })
    .rotate() // honour EXIF orientation
    .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality, mozjpeg: true, progressive: true })
    .toFile(tmp);
  fs.renameSync(tmp, src);

  const after = fs.statSync(src).size;
  totalBefore += before;
  totalAfter += after;
  const pct = ((1 - after / before) * 100).toFixed(1);
  console.log(
    `${file.padEnd(38)} ${(before / 1048576).toFixed(2)} MB -> ${(after / 1048576).toFixed(2)} MB  (-${pct}%)  ${longest}px -> ${Math.min(longest, maxEdge)}px`
  );
}

console.log(
  `\nTOTAL: ${(totalBefore / 1048576).toFixed(2)} MB -> ${(totalAfter / 1048576).toFixed(2)} MB  (-${((1 - totalAfter / totalBefore) * 100).toFixed(1)}%)`
);
