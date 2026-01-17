import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ article: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${articleTitle} | Ethereum Classic`,
    description: `Trading guide: ${articleTitle.toLowerCase()}. Learn trading strategies and techniques.`,
  }
}

export default async function TradingArticlePage({ params }: Props) {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Comprehensive guide to ${articleTitle.toLowerCase()}. Part of our trading guides series to help you trade Ethereum Classic effectively.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Trading Guides', href: '/learn/trading' }}
      relatedLinks={[
        { label: 'Trading Guides', href: '/learn/trading' },
        { label: 'Exchange Directory', href: '/exchanges' },
        { label: 'Price Charts', href: '/price' },
      ]}
    />
  )
}
