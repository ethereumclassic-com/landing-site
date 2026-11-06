import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '../../data/articles'
import { renderBanner } from '../../lib/banner'

// The article's banner for a dark page, drawn once per article at build. See ../../lib/banner.tsx.
export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const article = getArticleBySlug((await params).slug)
  if (!article) notFound()
  return renderBanner(article, 'dark')
}
