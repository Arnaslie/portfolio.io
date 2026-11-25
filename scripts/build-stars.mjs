// Trims d3-celestial's naked-eye star catalog (Hipparcos, mag ≤ 6, BSD-3-Clause,
// © Olaf Frohn) into a flat array the browser can load cheaply:
//   [ra°, dec°, mag, b-v,  ra°, dec°, mag, b-v, …]
// Run with `npm run stars`; the output is committed, so builds don't need it.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const src = require.resolve('d3-celestial/data/stars.6.json');
const { features } = JSON.parse(readFileSync(src, 'utf8'));

const round = (n, d) => Math.round(n * 10 ** d) / 10 ** d;
const flat = [];
for (const f of features) {
  const [ra, dec] = f.geometry.coordinates; // ra in degrees, −180…180
  const bv = Number.parseFloat(f.properties.bv);
  flat.push(round(ra, 2), round(dec, 2), round(f.properties.mag, 2), Number.isFinite(bv) ? round(bv, 2) : 0.6);
}

mkdirSync(new URL('../src/data/', import.meta.url), { recursive: true });
writeFileSync(new URL('../src/data/stars.json', import.meta.url), JSON.stringify(flat));
console.log(`wrote ${flat.length / 4} stars`);
