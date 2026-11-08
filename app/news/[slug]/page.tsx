import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { type Article, articles, getArticleBySlug, getAuthorInfo } from '../data/articles'
import { CARD_SIZE, cardUrl } from '../lib/images'
import NewsArticleContent from './NewsArticleContent'
import { OG_BASE_OWN_CARD } from '@/lib/seo'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}

  return {
    // The /news layout's template appends " | Ethereum Classic".
    title: article.metaTitle ?? article.title,
    description: article.metaDescription ?? article.excerpt,
    openGraph: {
      // The card is drawn by ./opengraph-image.tsx, which Next uses only when this block names no image.
      // No title or description: Next fills them from the page's own, above.
      ...OG_BASE_OWN_CARD,
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
      ...(article.updated ? { modifiedTime: new Date(article.updated).toISOString() } : {}),
      ...(article.author ? { authors: [article.author] } : {}),
      section: article.category,
      tags: article.tags,
    },
    keywords: [
      'Ethereum Classic',
      'ETC',
      article.category,
      ...(article.tags ?? []),
    ],
  }
}

function NewsArticleJsonLd({ article }: { article: Article }) {
  const author = article.author ? getAuthorInfo(article.author) : undefined
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    image: { '@type': 'ImageObject', url: cardUrl(article.slug), ...CARD_SIZE },
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.updated ?? article.date).toISOString(),
    url: `https://ethereumclassic.com/news/${article.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ethereumclassic.com/news/${article.slug}`,
    },
    author:
      author?.kind === 'Person'
        ? { '@type': 'Person', name: author.name }
        : { '@type': 'Organization', name: article.author ?? 'Ethereum Classic', url: 'https://ethereumclassic.com' },
    publisher: {
      '@type': 'Organization',
      name: 'Ethereum Classic',
      url: 'https://ethereumclassic.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ethereumclassic.com/icons/icon-512.png',
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <>
      <NewsArticleJsonLd article={article} />
      <NewsArticleContent article={article} />
    </>
  )
}
