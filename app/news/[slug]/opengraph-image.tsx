import { notFound } from 'next/navigation'
import { OG_CARD_SIZE, renderCard } from '@/lib/og-card'
import { getArticleBySlug } from '../data/articles'
import { CARD_ID } from '../lib/images'

export const contentType = 'image/png'

/** One card per article, described by the article's own title. */
export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  return [{ id: CARD_ID, alt: article?.title ?? 'ETC News', size: OG_CARD_SIZE, contentType }]
}

function formatDate(date: string): string {
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  const category = article.category.toLowerCase()
  return renderCard({
    art: 'og-news-base.png',
    eyebrow: `ETC News · ${article.category}`,
    headline: article.title,
    subline: article.readTime ? `${formatDate(article.date)} · ${article.readTime} min read` : formatDate(article.date),
    chips: (article.tags ?? []).filter((tag) => tag.toLowerCase() !== category),
  })
}
