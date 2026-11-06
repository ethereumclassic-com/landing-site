/**
 * Share cards drawn at build time by next/og: the sitewide card's art with one
 * page's own words on it.
 *
 * The art is a PNG in brand/social, rendered from its SVG by `pnpm brand:og`
 * and kept free of copy. The words are set in the type, sizes and positions of
 * the copy layer in brand/social/og-ethereumclassic-com.svg:
 *
 * - an eyebrow pill at (80, 110), 34px high;
 * - a headline inside the HUD brackets, x 80 to 600 and y 186 to 418;
 * - a subline on the y 452 baseline;
 * - a row of chips at y 480, 52px high, level with the CTA.
 *
 * The fonts, and the guard that fails the build on a character they do not
 * carry, are shared with the news banners in ./og-fonts.
 */
import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { assertSupported, displayWidth, ogFonts } from './og-fonts'

export const OG_CARD_SIZE = { width: 1200, height: 630 }

const GREEN = '#007a53'
const TEXT = '#0a0f10'
const MUTED = '#5f6673'
const BORDER = 'rgba(0, 122, 83, 0.32)'

/** The headline box, from the HUD brackets on the sitewide card. */
const HEADLINE = { left: 80, top: 186, width: 520, height: 232 }
/** The sitewide card sets 62px on a 70px line with -0.03em tracking. Smaller sizes keep the ratios. */
const HEADLINE_SIZES = [62, 58, 54, 50, 46]
const LINE_RATIO = 70 / 62
const TRACKING = -0.03

/** Width of one headline line at `size`, from the face's advance widths. */
function headlineWidth(line: string, size: number): number {
  return displayWidth(line, size, TRACKING)
}

/** The fewest lines that fit at `size`, broken so the widest line is as short as it can be. */
function breakHeadline(words: string[], size: number, maxLines: number): string[] | null {
  for (let count = 1; count <= Math.min(maxLines, words.length); count++) {
    let best: string[] | null = null
    let bestWidest = Infinity
    const place = (start: number, left: number, lines: string[]) => {
      if (left === 1) {
        const all = [...lines, words.slice(start).join(' ')]
        const widest = Math.max(...all.map((line) => headlineWidth(line, size)))
        if (widest <= HEADLINE.width && widest < bestWidest) {
          best = all
          bestWidest = widest
        }
        return
      }
      for (let end = start + 1; end <= words.length - (left - 1); end++) {
        const line = words.slice(start, end).join(' ')
        if (headlineWidth(line, size) > HEADLINE.width) break
        place(end, left - 1, [...lines, line])
      }
    }
    place(0, count, [])
    if (best) return best
  }
  return null
}

/** The largest size, and its lines, at which the headline fits inside the brackets. */
function fitHeadline(headline: string): { size: number; lineHeight: number; lines: string[] } {
  const words = headline.trim().split(/\s+/)
  for (const size of HEADLINE_SIZES) {
    const lineHeight = Math.round(size * LINE_RATIO)
    const lines = breakHeadline(words, size, Math.floor(HEADLINE.height / lineHeight))
    if (lines) return { size, lineHeight, lines }
  }
  throw new Error(
    `og-card: "${headline}" does not fit the ${HEADLINE.width}x${HEADLINE.height} headline box at ${HEADLINE_SIZES.at(-1)}px.`
  )
}

/** Chips on the sitewide card span at most the headline's width. Estimated from the display face, with headroom. */
function fitChips(chips: string[]): string[] {
  const kept: string[] = []
  let used = 0
  for (const chip of chips) {
    const width = headlineWidth(chip, 16) * 1.1 + 2 * 18 + 3
    const next = used + (kept.length ? 14 : 0) + width
    if (kept.length === 3 || next > HEADLINE.width) break
    kept.push(chip)
    used = next
  }
  return kept
}

const art = new Map<string, string>()

async function artDataUri(file: string): Promise<string> {
  const hit = art.get(file)
  if (hit) return hit
  const uri = `data:image/png;base64,${(await readFile(join(process.cwd(), 'brand/social', file))).toString('base64')}`
  art.set(file, uri)
  return uri
}

export interface CardCopy {
  /** A PNG in brand/social holding the card's art and no copy, named without the folder: `og-news-base.png`. */
  art: string
  eyebrow: string
  headline: string
  subline?: string
  chips?: string[]
}

export async function renderCard(copy: CardCopy): Promise<ImageResponse> {
  assertSupported('og-card', 'eyebrow', copy.eyebrow)
  assertSupported('og-card', 'headline', copy.headline)
  if (copy.subline) assertSupported('og-card', 'subline', copy.subline)
  for (const chip of copy.chips ?? []) assertSupported('og-card', 'chip', chip)

  const fonts = await ogFonts()
  const background = await artDataUri(copy.art)
  const headline = fitHeadline(copy.headline)
  const chips = fitChips(copy.chips ?? [])
  const blockHeight = headline.lines.length * headline.lineHeight

  return new ImageResponse(
    (
      <div style={{ display: 'flex', position: 'relative', width: '100%', height: '100%', fontFamily: 'Inter' }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og draws this, no browser loads it */}
        <img src={background} width={OG_CARD_SIZE.width} height={OG_CARD_SIZE.height} alt="" style={{ position: 'absolute', top: 0, left: 0 }} />

        <div
          style={{
            position: 'absolute',
            left: 80,
            top: 110,
            height: 34,
            display: 'flex',
            alignItems: 'center',
            paddingLeft: 15,
            paddingRight: 19,
            borderRadius: 17,
            background: '#ffffff',
            border: `1.3px solid ${BORDER}`,
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 4, background: GREEN, marginRight: 11 }} />
          <div style={{ display: 'flex', fontSize: 13, fontWeight: 500, color: GREEN }}>{copy.eyebrow}</div>
        </div>

        <div
          style={{
            position: 'absolute',
            left: HEADLINE.left,
            top: HEADLINE.top + Math.round((HEADLINE.height - blockHeight) / 2),
            width: HEADLINE.width,
            display: 'flex',
            flexDirection: 'column',
            fontFamily: 'Inter Display',
            fontWeight: 700,
            fontSize: headline.size,
            lineHeight: `${headline.lineHeight}px`,
            letterSpacing: TRACKING * headline.size,
            color: TEXT,
          }}
        >
          {headline.lines.map((line) => (
            <div key={line} style={{ display: 'flex', whiteSpace: 'nowrap' }}>
              {line}
            </div>
          ))}
        </div>

        {copy.subline ? (
          <div style={{ position: 'absolute', left: 80, top: 434, display: 'flex', fontSize: 18, fontWeight: 400, color: MUTED }}>
            {copy.subline}
          </div>
        ) : null}

        {chips.length ? (
          <div style={{ position: 'absolute', left: 80, top: 480, display: 'flex' }}>
            {chips.map((chip, i) => (
              <div
                key={chip}
                style={{
                  height: 52,
                  display: 'flex',
                  alignItems: 'center',
                  paddingLeft: 18,
                  paddingRight: 18,
                  marginLeft: i ? 14 : 0,
                  borderRadius: 12,
                  background: '#ffffff',
                  border: `1.3px solid ${BORDER}`,
                  fontSize: 16,
                  fontWeight: 700,
                  color: GREEN,
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    ),
    { ...OG_CARD_SIZE, fonts }
  )
}
