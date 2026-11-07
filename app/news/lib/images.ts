/**
 * Where an article's generated images are served, for the components and the
 * feeds that show them. Each is drawn once per article at build:
 *
 * - the banner, ../[slug]/banner-on-{light,dark}.png, the art band on the news
 *   cards and at the head of the article page (./banner.tsx);
 * - the share card, ../[slug]/opengraph-image.tsx, the article's image away
 *   from the site: link previews, the feeds, its structured data.
 *
 * Kept free of the renderers, so a client component can import it.
 */

const SITE = 'https://ethereumclassic.com'

/**
 * The banner drawn for one theme. Pages show both drawings and let CSS pick
 * (../components/NewsBanner.tsx): next-themes knows the stored theme from the
 * first render in the browser, so choosing in code renders a page the server
 * did not.
 */
export function bannerSrc(slug: string, theme: 'light' | 'dark'): string {
  return `/news/${slug}/banner-on-${theme}.png`
}

/** The id ../[slug]/opengraph-image.tsx gives the article's one card. */
export const CARD_ID = 'card'
export const CARD_SIZE = { width: 1200, height: 630 }

export function cardUrl(slug: string): string {
  return `${SITE}/news/${slug}/opengraph-image/${CARD_ID}`
}
