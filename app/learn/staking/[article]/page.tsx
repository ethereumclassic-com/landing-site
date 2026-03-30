import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getArticlesByCategory, getArticleBySlug } from '../../data/articles'
import ArticlePageClient from '../../components/ArticlePageClient'
import LiquidityProvision from './content/liquidity-provision'
import ImpermanentLoss from './content/impermanent-loss'
import YieldFarmingStrategies from './content/yield-farming-strategies'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateStaticParams() {
  const articles = getArticlesByCategory('staking')
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
  'liquidity-provision': <LiquidityProvision />,
  'impermanent-loss': <ImpermanentLoss />,
  'yield-farming-strategies': <YieldFarmingStrategies />,
}

export default async function StakingArticlePage({ params }: Props) {
  const { article: slug } = await params
  const article = getArticleBySlug(slug)

  if (!article || article.category !== 'staking') {
    notFound()
  }

  const content = articleContent[slug]
  if (!content) notFound()

  return <ArticlePageClient article={article} content={content} />
}
