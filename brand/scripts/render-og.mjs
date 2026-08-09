#!/usr/bin/env node
/**
 * Regenerate brand/social/*.png from the matching .svg, then publish the
 * sitewide card to public/og.png.
 *
 * MUST run with the scoped fontconfig, or a missing family falls back silently:
 *
 *   FONTCONFIG_FILE="$PWD/brand/fonts/fonts.conf" node brand/scripts/render-og.mjs
 *
 * or just:  pnpm brand:og
 *
 * The SVG is the source of truth. The PNG is a build artifact that happens to be
 * committed, because scrapers cannot read SVG for og:image. Editing a PNG
 * directly is always wrong.
 */
import sharp from 'sharp'
import { readdir, readFile, stat, copyFile } from 'node:fs/promises'
import { join, basename } from 'node:path'

const SRC = 'brand/social'
const PUBLISH = { 'og-ethereumclassic-com.png': 'public/og.png' }
const WIDTH = 1200
const HEIGHT = 630 // 1.91:1 — the Open Graph / Twitter summary_large_image spec

if (!process.env.FONTCONFIG_FILE) {
  console.error('refusing to render: FONTCONFIG_FILE is not set.')
  console.error('Without it a missing font family falls back silently and the')
  console.error('output looks plausible but is in the wrong typeface.')
  console.error('Run: pnpm brand:og')
  process.exit(1)
}

for (const file of (await readdir(SRC)).filter((f) => f.endsWith('.svg'))) {
  const out = join(SRC, `${basename(file, '.svg')}.png`)
  await sharp(await readFile(join(SRC, file)))
    .resize(WIDTH, HEIGHT, { fit: 'fill' })
    .png({ compressionLevel: 9, palette: true })
    .toFile(out)
  const { size } = await stat(out)
  const m = await sharp(out).metadata()
  console.log(`${out}  ${m.width}x${m.height}  ${Math.round(size / 1024)}KB`)

  const dest = PUBLISH[basename(out)]
  if (dest) {
    await copyFile(out, dest)
    console.log(`  -> published ${dest}`)
  }
}
