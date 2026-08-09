/**
 * A country flag that renders on every platform.
 *
 * THE BUG THIS EXISTS FOR: Windows does not draw flag emoji. Segoe UI Emoji
 * deliberately omits regional-indicator sequences, so `🇹🇷` falls back to two
 * boxed letters. It is invisible to anyone developing on macOS or Linux, where
 * the same string renders a flag correctly.
 *
 * TWO THINGS THE PREVIOUS VERSION GOT WRONG, both fixed here:
 *
 *  1. It fell back to `<span>{emoji}</span>` for any flag missing from its map —
 *     which renders the exact broken glyph the component exists to prevent, and
 *     does it silently. Its map covered 15 of the 24 flags the site actually
 *     uses, so CN, ES, ID, NZ, PL, SE, TH, TW and UA were all still broken, on
 *     pages that looked like they had been fixed. An unknown code now throws in
 *     development and renders a legible text chip in production.
 *
 *  2. It hotlinked jsDelivr at render time. That is a third-party request per
 *     flag from a public page. The SVGs are now vendored in `public/flags/`
 *     (~27KB for all 24) by `pnpm brand:flags`.
 *
 * Accepts either an ISO-3166 alpha-2 code (`"tr"`) or the flag emoji itself, so
 * existing call sites that pass emoji keep working; the emoji is decoded to its
 * ISO code arithmetically rather than through a hand-maintained lookup table
 * that can disagree with itself.
 */

// Must match CODES in brand/scripts/vendor-flags.mjs.
const FLAG_CODES = new Set([
  'ae', 'au', 'br', 'ca', 'ch', 'cn', 'es', 'eu', 'gb', 'hk', 'id', 'in',
  'jp', 'kr', 'nz', 'pl', 'se', 'sg', 'th', 'tr', 'tw', 'ua', 'us', 'za',
])

/**
 * True for a regional-indicator pair — i.e. a flag emoji, the kind Windows
 * cannot draw. Pictographic emoji (🔓 💰 🛡️) are unaffected and render fine
 * everywhere, so a mixed icon list only needs the flags routed through FlagImg.
 */
export function isFlagEmoji(s: string): boolean {
  const cps = [...s].map((c) => c.codePointAt(0) ?? 0)
  return cps.length === 2 && cps.every((c) => c >= 0x1f1e6 && c <= 0x1f1ff)
}

/** Regional-indicator pair -> ISO code. Returns the input lowercased if it is
 *  already a plain two-letter code. */
function toIso(input: string): string {
  if (isFlagEmoji(input)) {
    return [...input].map((c) => String.fromCharCode((c.codePointAt(0) ?? 0) - 0x1f1e6 + 97)).join('')
  }
  return input.trim().toLowerCase()
}

interface FlagImgProps {
  /** ISO-3166 alpha-2 code, or the flag emoji. */
  emoji: string
  size?: number
  className?: string
  /** Country name, for screen readers. Omit when an adjacent label already
   *  names the country — which is the usual case here, and why the default is
   *  decorative. */
  label?: string
}

export function FlagImg({ emoji, size = 20, className = '', label }: FlagImgProps) {
  const iso = toIso(emoji)

  if (!FLAG_CODES.has(iso)) {
    // Loud in development, legible in production. Never the raw emoji: that is
    // the broken state, and rendering it here would hide the omission on
    // exactly the platform this component was written for.
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(
        `FlagImg: no vendored flag for "${iso}". Add it to CODES in ` +
          `brand/scripts/vendor-flags.mjs and FLAG_CODES in this file, then run ` +
          `\`pnpm brand:flags\`.`,
      )
    }
    return (
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-[3px] border border-[var(--border-default)] bg-[var(--panel)] font-mono font-semibold uppercase leading-none text-[var(--text-muted)] ${className}`.trim()}
        style={{ width: size * 1.33, height: size, fontSize: size * 0.5 }}
        aria-label={label}
        role={label ? 'img' : undefined}
      >
        {iso.slice(0, 2)}
      </span>
    )
  }

  return (
    // A ~1KB static SVG at a fixed 16-24px. next/image would add an optimizer
    // round-trip and a wrapper element to save nothing, and cannot rasterize an
    // SVG anyway. The directive must sit on the line immediately above the JSX
    // element — with the prose after it, it applies to the prose instead and
    // eslint reports it as unused.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/flags/${iso}.svg`}
      alt={label ?? ''}
      aria-hidden={label ? undefined : true}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`inline-block shrink-0 ${className}`.trim()}
    />
  )
}
