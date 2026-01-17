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
    description: `Yield guide: ${articleTitle.toLowerCase()}. Learn about earning with ETC.`,
  }
}

export default async function StakingArticlePage({ params }: Props) {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Complete guide to ${articleTitle.toLowerCase()}. Part of our yield guides series to help you earn passive income with Ethereum Classic.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Staking & Yield', href: '/learn/staking' }}
      relatedLinks={[
        { label: 'Staking & Yield', href: '/learn/staking' },
        { label: 'DeFi on ETC', href: '/learn/defi' },
        { label: 'DeFi Apps', href: '/apps/defi' },
      ]}
    />
  )
}
