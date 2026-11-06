/**
 * The fonts and text measurement shared by the images next/og draws at build:
 * the share cards (lib/og-card.tsx) and the news banners (app/news/lib/banner.tsx).
 *
 * The fonts are the static instances in brand/fonts/{inter,jetbrains-mono}/static,
 * derived by `pnpm brand:og-fonts`, because next/og cannot read a variable font.
 * A character those instances do not carry fails the build here, rather than
 * letting next/og fetch a fallback font from the network mid-build.
 */
import type { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import displayBold from '@/brand/fonts/inter/static/InterDisplay-Bold.advances.json'
import monoMedium from '@/brand/fonts/jetbrains-mono/static/JetBrainsMono-Medium.advances.json'

type Fonts = NonNullable<NonNullable<ConstructorParameters<typeof ImageResponse>[1]>['fonts']>

/** Keep in step with RANGES in brand/scripts/instance-og-fonts.py. */
const SUPPORTED_RANGES: [number, number][] = [
  [0x0020, 0x007e],
  [0x00a0, 0x00ff],
  [0x0100, 0x017f],
  [0x2010, 0x2027],
  [0x2030, 0x203a],
  [0x20ac, 0x20ac],
  [0x2122, 0x2122],
  [0x2190, 0x2193],
  [0x2212, 0x2212],
]

/** Throws when `text` holds a character the instances do not carry. `owner` names the template in the message. */
export function assertSupported(owner: string, label: string, text: string): void {
  for (const ch of text) {
    const cp = ch.codePointAt(0) ?? 0
    if (!SUPPORTED_RANGES.some(([lo, hi]) => cp >= lo && cp <= hi)) {
      const code = cp.toString(16).toUpperCase().padStart(4, '0')
      throw new Error(
        `${owner}: the ${label} "${text}" contains U+${code}, which the image fonts do not carry. ` +
          'Widen RANGES in brand/scripts/instance-og-fonts.py and rerun pnpm brand:og-fonts.'
      )
    }
  }
}

interface AdvanceTable {
  unitsPerEm: number
  advances: Record<string, number>
}

/** Width of `text` set at `size` with `tracking` em between glyphs. Kerning is ignored, which only overestimates. */
function measure(table: AdvanceTable, text: string, size: number, tracking: number): number {
  let units = 0
  for (const ch of text) units += table.advances[String(ch.codePointAt(0))] ?? table.unitsPerEm
  const chars = [...text].length
  return (units / table.unitsPerEm) * size + Math.max(chars - 1, 0) * tracking * size
}

/** Inter Display Bold, the face of the cards' headlines and the banners' subjects. */
export function displayWidth(text: string, size: number, tracking = 0): number {
  return measure(displayBold, text, size, tracking)
}

/** JetBrains Mono Medium, the face of the banners' readouts. */
export function monoWidth(text: string, size: number, tracking = 0): number {
  return measure(monoMedium, text, size, tracking)
}

let fonts: Promise<Fonts> | null = null

/** Every face the images use, read once per build. */
export function ogFonts(): Promise<Fonts> {
  // Each path is scoped to its folder in the call itself, so the build traces that folder and not the whole project.
  const inter = (file: string) => readFile(join(process.cwd(), 'brand/fonts/inter/static', file))
  const mono = (file: string) => readFile(join(process.cwd(), 'brand/fonts/jetbrains-mono/static', file))
  fonts ??= Promise.all([
    inter('Inter-Regular.ttf'),
    inter('Inter-Medium.ttf'),
    inter('Inter-SemiBold.ttf'),
    inter('Inter-Bold.ttf'),
    inter('InterDisplay-Bold.ttf'),
    mono('JetBrainsMono-Medium.ttf'),
  ]).then(([regular, medium, semibold, bold, display, monoMediumFace]) => [
    { name: 'Inter', data: regular, weight: 400, style: 'normal' },
    { name: 'Inter', data: medium, weight: 500, style: 'normal' },
    { name: 'Inter', data: semibold, weight: 600, style: 'normal' },
    { name: 'Inter', data: bold, weight: 700, style: 'normal' },
    { name: 'Inter Display', data: display, weight: 700, style: 'normal' },
    { name: 'JetBrains Mono', data: monoMediumFace, weight: 500, style: 'normal' },
  ])
  return fonts
}
