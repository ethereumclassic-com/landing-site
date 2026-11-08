import type { Metadata } from 'next'
import { getAllTags, getArticlesByTag, tagSlug } from '../../data/articles'
import { OG_BASE } from '@/lib/seo'

/**
 * The page itself is a client component and cannot export metadata, so it lives
 * here. Without it every tag URL inherited the root title, and the sitemap
 * carries more than 150 of them: one title and one description across all of
 * them is what stops a crawler telling them apart.
 */

interface Props {
  params: Promise<{ tag: string }>
}

function formatTagName(tag: string): string {
  return tag
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag: slug } = await params
  const matched = getAllTags().find((t) => tagSlug(t) === slug.toLowerCase())
  const name = matched ?? formatTagName(slug)
  const count = matched ? getArticlesByTag(matched).length : 0

  // The /news layout appends " | Ethereum Classic" through its title template, so
  // this stays short. "Articles tagged X" rather than bare "X", because a category
  // of the same name would otherwise produce the same title.
  const title = `Articles tagged ${name}`
  const description =
    count > 0
      ? `Every Ethereum Classic article tagged ${name}. ${count} ${count === 1 ? 'story' : 'stories'} covering what changed and what it means for holders, miners and developers.`
      : `Ethereum Classic news tagged ${name}.`

  return {
    title,
    description,
    // The slug arrives decoded, so a tag such as "51% Attack" is encoded again here.
    alternates: { canonical: `https://ethereumclassic.com/news/tag/${encodeURIComponent(slug)}` },
    // No title or description: Next fills the card from the page's own, above.
    openGraph: { ...OG_BASE },
  }
}

export default function NewsTagLayout({ children }: { children: React.ReactNode }) {
  return children
}
