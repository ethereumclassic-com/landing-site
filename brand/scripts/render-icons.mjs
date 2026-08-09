/**
 * Generate the site's favicon / touch-icon / PWA icon set from the flat ETC mark.
 *
 * Run: pnpm brand:icons
 *
 * WHY A GREEN TILE WITH A KNOCKED-OUT MARK, rather than the bare mark on
 * transparency (which is the more common default):
 *
 *   A browser tab strip is painted in the USER's chrome theme, not the site's,
 *   so a transparent icon has to survive both a near-white and a near-black
 *   backing. The mark in `--brand-green` #007a53 is legible on the first and
 *   close to invisible on the second. A filled tile carries its own contrast and
 *   is therefore the only version that reads on both, and at 16px the solid
 *   brand-green silhouette is also more recognizable than three thin facets.
 *
 * WHY THE FLAT MARK AND NOT THE OFFICIAL FULL-COLOR DIAMOND:
 *
 *   The faceted diamond in public/etc-network/ is the network's identity asset
 *   and stays exactly as it is. Its light/dark facet greens fall apart below
 *   ~32px. The flat silhouette is what this site's own chrome is built from.
 *
 * SIZES, and the one that is usually wrong:
 *
 *   apple-touch-icon is 180x180. The file this replaced was 192x192, which is
 *   the ANDROID size -- Apple has specified 180 since iOS 8. iOS rescales, so
 *   the mistake is invisible rather than broken, which is why it survived.
 *   Apple also composites a non-transparent background in, so the tile is
 *   required there rather than merely preferable.
 *
 *   maskable icons get a much larger inset: Android may crop to any shape inside
 *   the 512 square and only the center 80% circle is guaranteed, so the mark
 *   sits at 45% rather than 62%.
 */

import { Buffer } from 'node:buffer'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const ICONS = path.join(ROOT, 'public/icons')

// From app/styles/tokens.css. Not a separate brand palette -- duplicating one is
// how the two drift apart.
const GREEN = '#007a53'

/**
 * The mark on a brand-green tile.
 *
 * Deliberately not a flat fill. A single solid color behind a white glyph is
 * the default every generator produces and it reads as unfinished at 192px and
 * up, where the icon is large enough that the eye expects the thing to be an
 * object. What gives it that, in order of how much each actually contributes:
 *
 *   1. A diagonal ground ramp, light top-left to dark bottom-right, so the tile
 *      has an implied light direction instead of sitting flat.
 *   2. A soft highlight bloom offset toward that same top-left, which keeps the
 *      ramp from reading as a plain linear wash.
 *   3. A drop shadow under the mark. This is the single biggest one -- it is
 *      what separates the glyph from the ground rather than letting it look
 *      die-cut.
 *   4. A hairline inner rim at the tile edge, catching the light. Reads as a
 *      bevel at large sizes and simply crisps the silhouette at small ones.
 *   5. The OG card's grid, at very low alpha and LARGE SIZES ONLY, so the icon
 *      belongs to the same system as the social card.
 *
 * Everything is scaled from `size`, so the 16px icon is not a shrunken 512 --
 * shadows and rims that are correct at 512 turn into gray mush at 16. Ornament
 * switches off entirely below 64.
 *
 * `inset` is the mark's share of the canvas; `radius` rounds the tile
 * (0 = square, for maskable and Apple, both of which apply their own mask).
 */
async function tile(size, { inset = 0.62, radius = 0.22 } = {}) {
  const markSrc = await readFile(path.join(ROOT, 'brand/logo/etc-mark.svg'), 'utf8')
  const m = Math.round(size * inset)
  const off = Math.round((size - m) / 2)
  const r = Math.round(size * radius)
  const big = size >= 64

  // Replace the fill ATTRIBUTE, not the first literal "currentColor" in the file
  // -- the mark's own comment says the word several lines above the <g>, and a
  // plain string .replace() recolored the prose while leaving fill="currentColor"
  // intact. librsvg then resolved it to its initial value, black, and every icon
  // rendered a black diamond that looked deliberate.
  const painted = markSrc.replace(/fill="currentColor"/, `fill="url(#markfill)"`)
  if (painted === markSrc) throw new Error('mark fill attribute not found — refusing to render an uncolored icon')

  // Shadow geometry has to be proportional or it stops being a shadow: at 512 a
  // 10px blur is a soft lift, at 16 it is a gray smear over the whole glyph.
  const blur = Math.max(0.4, size * 0.018)
  const dy = Math.max(0.3, size * 0.014)
  const grid = big
    ? `<pattern id="gr" width="${size / 16}" height="${size / 16}" patternUnits="userSpaceOnUse">
         <path d="M${size / 16} 0 H0 V${size / 16}" fill="none" stroke="#ffffff" stroke-opacity="0.05" stroke-width="1"/>
       </pattern>
       <clipPath id="cl"><rect width="${size}" height="${size}" rx="${r}" ry="${r}"/></clipPath>`
    : ''

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="ground" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#00a06c"/>
      <stop offset="52%" stop-color="${GREEN}"/>
      <stop offset="100%" stop-color="#00543a"/>
    </linearGradient>
    <radialGradient id="bloom" cx="30%" cy="18%" r="78%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="markfill" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="100%" stop-color="#dcebe5"/>
    </linearGradient>
    <filter id="lift" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="${dy.toFixed(2)}" stdDeviation="${blur.toFixed(2)}"
                    flood-color="#002417" flood-opacity="0.42"/>
    </filter>
    ${grid}
  </defs>

  <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="url(#ground)"/>
  ${big ? `<g clip-path="url(#cl)"><rect width="${size}" height="${size}" fill="url(#gr)"/></g>` : ''}
  <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="url(#bloom)"/>

  <g filter="url(#lift)">
    <g transform="translate(${off},${off}) scale(${m / 512})">
      ${painted.replace(/^[\s\S]*?<g transform/, '<g transform').replace(/<\/svg>\s*$/, '')}
    </g>
  </g>

  <rect x="0.5" y="0.5" width="${size - 1}" height="${size - 1}" rx="${Math.max(0, r - 0.5)}" ry="${Math.max(0, r - 0.5)}"
        fill="none" stroke="#ffffff" stroke-opacity="0.16" stroke-width="1"/>
</svg>`

  return sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toBuffer()
}

/** Minimal multi-image ICO container. sharp cannot write ICO, and pulling a
 *  dependency in for ~40 lines of header would need a sentinel review for a
 *  format that has not changed since 1995. */
function ico(pngs) {
  const head = Buffer.alloc(6)
  head.writeUInt16LE(0, 0)
  head.writeUInt16LE(1, 2)
  head.writeUInt16LE(pngs.length, 4)
  let offset = 6 + pngs.length * 16
  const dirs = []
  for (const { size, data } of pngs) {
    const d = Buffer.alloc(16)
    d.writeUInt8(size >= 256 ? 0 : size, 0)
    d.writeUInt8(size >= 256 ? 0 : size, 1)
    d.writeUInt8(0, 2)
    d.writeUInt8(0, 3)
    d.writeUInt16LE(1, 4)
    d.writeUInt16LE(32, 6)
    d.writeUInt32LE(data.length, 8)
    d.writeUInt32LE(offset, 12)
    offset += data.length
    dirs.push(d)
  }
  return Buffer.concat([head, ...dirs, ...pngs.map((p) => p.data)])
}

const OUT = [
  ['favicon-16x16.png', 16, { radius: 0.16, inset: 0.72 }],
  ['favicon-32x32.png', 32, { radius: 0.18, inset: 0.68 }],
  ['favicon-48x48.png', 48, { radius: 0.2, inset: 0.66 }],
  // Apple applies its own squircle and fills transparency with black, so: square, opaque.
  ['apple-touch-icon.png', 180, { radius: 0, inset: 0.6 }],
  ['icon-192.png', 192, {}],
  ['icon-512.png', 512, {}],
  // Android may crop to any shape; only the center 80% circle is safe.
  ['icon-maskable-512.png', 512, { radius: 0, inset: 0.45 }],
]

await mkdir(ICONS, { recursive: true })

for (const [name, size, opts] of OUT) {
  const buf = await tile(size, opts)
  await writeFile(path.join(ICONS, name), buf)
  console.log(`  public/icons/${name.padEnd(24)} ${size}x${size}  ${String(buf.length).padStart(6)}B`)
}

// favicon.ico stays at the PUBLIC ROOT: browsers and crawlers request /favicon.ico
// directly, without consulting any <link>, so moving it into icons/ would 404 that
// path no matter how the metadata is declared.
const icoBuf = ico(await Promise.all([16, 32, 48].map(async (s) => ({ size: s, data: await tile(s, { radius: 0.16, inset: 0.7 }) }))))
await writeFile(path.join(ROOT, 'public/favicon.ico'), icoBuf)
console.log(`  public/favicon.ico${' '.repeat(19)} 16+32+48 ${String(icoBuf.length).padStart(6)}B`)
