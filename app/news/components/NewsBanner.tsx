import Image from 'next/image'
import { bannerSrc } from '../lib/images'

interface NewsBannerProps {
  slug: string
  /** A photograph the article supplies in place of its generated banner. */
  image?: string
  /** Above the fold, so fetched first. */
  lead?: boolean
  className?: string
  sizes: string
}

/**
 * An article's photograph, or its generated banner in the drawing for the theme. Both drawings are
 * in the markup and CSS shows one, so the server and the browser render the same page in either
 * theme and nothing swaps after load. They stay lazy, as Next's guide to theme images has it: the one
 * the theme hides is never laid out, so it is never fetched, where preloading would fetch both.
 */
export default function NewsBanner({ slug, image, lead = false, className = '', sizes }: NewsBannerProps) {
  if (image) return <Image src={image} alt="" fill priority={lead} className={className} sizes={sizes} />

  const fetchPriority = lead ? 'high' : undefined
  return (
    <>
      <Image
        src={bannerSrc(slug, 'light')}
        alt=""
        fill
        fetchPriority={fetchPriority}
        className={`${className} dark:hidden`}
        sizes={sizes}
      />
      <Image
        src={bannerSrc(slug, 'dark')}
        alt=""
        fill
        fetchPriority={fetchPriority}
        className={`${className} hidden dark:block`}
        sizes={sizes}
      />
    </>
  )
}
