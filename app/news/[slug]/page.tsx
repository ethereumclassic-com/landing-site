import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles, getArticleBySlug } from '../data/articles'
import NewsArticleContent from './NewsArticleContent'

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
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | ETC News — Ethereum Classic`,
      description: article.excerpt,
      type: 'article',
      publishedTime: new Date(article.date).toISOString(),
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

function NewsArticleJsonLd({ article }: { article: { title: string; excerpt: string; date: string; slug: string; author?: string } }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.excerpt,
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    url: `https://ethereumclassic.com/news/${article.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://ethereumclassic.com/news/${article.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: article.author ?? 'Ethereum Classic',
      url: 'https://ethereumclassic.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Ethereum Classic',
      url: 'https://ethereumclassic.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://ethereumclassic.com/etc-logo.png',
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
