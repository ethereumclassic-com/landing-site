/**
 * Vendor the country-flag SVGs this site uses into public/flags/.
 *
 * Run: pnpm brand:flags
 *
 * WHY VENDOR RATHER THAN HOTLINK A CDN, which is what FlagImg did before:
 *
 *   The previous component built `https://cdn.jsdelivr.net/gh/twitter/twemoji@.../<cp>.svg`
 *   at render time. That is a third-party request per flag on a public page —
 *   it leaks visitor IPs to a CDN, adds a dependency whose availability nobody
 *   here controls, and fails closed in networks that block jsDelivr. None of
 *   that buys anything: these are 24 static files totalling well under 100KB.
 *
 * WHY TWEMOJI RATHER THAN flag-icons:
 *
 *   The sibling site ethereumclassicdao-org already renders twemoji flags, and
 *   its coverage is complete. Matching it keeps the family of sites visually
 *   consistent. flag-icons is MIT and about a quarter the size, which is the
 *   argument for switching — but only if BOTH sites switch together.
 *
 * The codepoint filename is derived, not tabulated: a regional-indicator pair
 * is just the ISO-3166 letters offset from U+1F1E6, so a hand-maintained map of
 * emoji to codepoint (which is what the old component carried) is a list that
 * can silently disagree with itself. This computes it.
 */

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const OUT = path.join(ROOT, 'public/flags')
const BASE = 'https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/svg'

// Every ISO code the site renders. Keep in sync with FLAG_CODES in
// app/components/ui/FlagImg.tsx — the component throws in development on a code
// that is not here, so a new country fails loudly at first render rather than
// shipping a broken glyph.
const CODES = [
  'ae', 'au', 'br', 'ca', 'ch', 'cn', 'es', 'eu', 'gb', 'hk', 'id', 'in',
  'jp', 'kr', 'nz', 'pl', 'se', 'sg', 'th', 'tr', 'tw', 'ua', 'us', 'za',
]

/** ISO-3166 alpha-2 -> twemoji codepoint filename, e.g. us -> 1f1fa-1f1f8 */
const codepoint = (iso) =>
  [...iso.toUpperCase()]
    .map((c) => (0x1f1e6 + c.charCodeAt(0) - 65).toString(16))
    .join('-')

await mkdir(OUT, { recursive: true })

let bytes = 0
for (const iso of CODES) {
  const url = `${BASE}/${codepoint(iso)}.svg`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${iso}: ${res.status} from ${url}`)
  const svg = await res.text()
  // Guard against a CDN error page being written out as a "flag".
  if (!svg.trimStart().startsWith('<svg')) throw new Error(`${iso}: not an SVG`)
  await writeFile(path.join(OUT, `${iso}.svg`), svg)
  bytes += svg.length
  console.log(`  public/flags/${iso}.svg`.padEnd(30) + `${String(svg.length).padStart(6)}B`)
}

await writeFile(
  path.join(OUT, 'LICENSE.md'),
  `# Flag graphics

These SVGs are from **Twemoji** (https://github.com/twitter/twemoji), v14.0.2.

Copyright Twitter, Inc and other contributors.
Graphics licensed under **CC-BY 4.0**: https://creativecommons.org/licenses/by/4.0/

Vendored rather than hotlinked so a visitor's browser makes no third-party
request to render a flag. Regenerate with \`pnpm brand:flags\`; add the ISO code
to CODES in \`brand/scripts/vendor-flags.mjs\` and to FLAG_CODES in
\`app/components/ui/FlagImg.tsx\` first.
`,
)

console.log(`\n  ${CODES.length} flags, ${(bytes / 1024).toFixed(1)}KB total, + LICENSE.md`)
