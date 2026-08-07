/**
 * Shared Open Graph / Twitter card image.
 *
 * Every layout that declares its own `openGraph` block must spread this in.
 * Next.js REPLACES the parent's openGraph object rather than merging it, so a
 * child that sets `title`/`description` and omits `images` silently ships with
 * no share image — measured across 22 routes, including the Olympia hub.
 *
 * The `app/opengraph-image.png` file convention does NOT cover this case: it
 * was tested and only applies to routes that do not redefine openGraph
 * themselves. Hence one constant, imported explicitly.
 */
export const OG_IMAGE = [
  {
    url: '/og.png',
    width: 1200,
    height: 630,
    alt: 'Ethereum Classic — Proof-of-Work Smart Contracts',
    type: 'image/png',
  },
]

/** Twitter accepts a bare URL list. */
export const TWITTER_IMAGE = ['/og.png']

/**
 * Site-level Open Graph fields. Spread this FIRST in any child openGraph block,
 * then override title/description:
 *
 *   openGraph: { ...OG_BASE, title: '...', description: '...' }
 *
 * Next.js replaces rather than merges the parent's openGraph, so a child that
 * omits these ships without og:url, og:site_name or og:locale — the difference
 * between an 11-tag and an 8-tag card.
 */
export const OG_BASE = {
  url: 'https://ethereumclassic.com',
  siteName: 'Ethereum Classic',
  locale: 'en_US',
  type: 'website' as const,
  images: OG_IMAGE,
}
