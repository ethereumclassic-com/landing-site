import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticlesByCategory, getArticleBySlug } from '../../data/articles'
import ArticlePageClient from '../../components/ArticlePageClient'
import HowToBuyEtc from './content/how-to-buy-etc'
import UnderstandingExchanges from './content/understanding-exchanges'
import TradingOrderTypes from './content/trading-order-types'
import TechnicalAnalysisBasics from './content/technical-analysis-basics'
import HowToSellEtc from './content/how-to-sell-etc'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateStaticParams() {
  const articles = getArticlesByCategory('trading')
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
  'how-to-buy-etc': <HowToBuyEtc />,
  'understanding-exchanges': <UnderstandingExchanges />,
  'trading-order-types': <TradingOrderTypes />,
  'technical-analysis-basics': <TechnicalAnalysisBasics />,
  'how-to-sell-etc': <HowToSellEtc />,
}

export default async function TradingArticlePage({ params }: Props) {
  const { article: slug } = await params
  const article = getArticleBySlug(slug)

  if (!article || article.category !== 'trading') {
    notFound()
  }

  const content = articleContent[slug]
  if (!content) notFound()

  return <ArticlePageClient article={article} content={content} />
}
