import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticlesByCategory, getArticleBySlug } from '../../data/articles'
import ArticlePageClient from '../../components/ArticlePageClient'
import WhatIsEthereumClassic from './content/what-is-ethereum-classic'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateStaticParams() {
  const articles = getArticlesByCategory('basics')
  return articles.map((article) => ({
    article: article.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article: slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Article Not Found | Ethereum Classic',
    }
  }

  return {
    title: `${article.title} | Ethereum Classic`,
    description: article.description,
  }
}

// Content mapping for articles with full content
const articleContent: Record<string, React.ReactNode> = {
  'what-is-ethereum-classic': <WhatIsEthereumClassic />,
}

// Placeholder content for articles without full content yet
function PlaceholderContent({ description }: { description: string }) {
  return (
    <div>
      <p className="text-lg">{description}</p>

      <div className="mt-8 rounded-xl border border-[var(--border)] bg-[var(--panel)] p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-primary)]/10">
            <svg className="h-5 w-5 text-[var(--color-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-white">Content Coming Soon</h3>
            <p className="text-sm text-[var(--color-text-muted)]">
              This article is being developed. Check back soon for the full content.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default async function BasicsArticlePage({ params }: Props) {
  const { article: slug } = await params
  const article = getArticleBySlug(slug)

  if (!article || article.category !== 'basics') {
    notFound()
  }

  const content = articleContent[slug] || (
    <PlaceholderContent description={article.description} />
  )

  return <ArticlePageClient article={article} content={content} />
}
