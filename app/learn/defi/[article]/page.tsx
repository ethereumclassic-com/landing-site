import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticlesByCategory, getArticleBySlug } from '../../data/articles'
import ArticlePageClient from '../../components/ArticlePageClient'
import WhatIsDefi from './content/what-is-defi'
import LiquidityPools from './content/liquidity-pools'
import DefiRisks from './content/defi-risks'
import UsingEtcswap from './content/using-etcswap'
import ClassicusdGuide from './content/classicusd-guide'
import WrappedEtc from './content/wrapped-etc'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateStaticParams() {
  const articles = getArticlesByCategory('defi')
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

const articleContent: Record<string, React.ReactNode> = {
  'what-is-defi': <WhatIsDefi />,
  'liquidity-pools': <LiquidityPools />,
  'defi-risks': <DefiRisks />,
  'using-etcswap': <UsingEtcswap />,
  'classicusd-guide': <ClassicusdGuide />,
  'wrapped-etc': <WrappedEtc />,
}

export default async function DeFiArticlePage({ params }: Props) {
  const { article: slug } = await params
  const article = getArticleBySlug(slug)

  if (!article || article.category !== 'defi') {
    notFound()
  }

  const content = articleContent[slug]
  if (!content) notFound()

  return <ArticlePageClient article={article} content={content} />
}
