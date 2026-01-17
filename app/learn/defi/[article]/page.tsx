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
    description: `DeFi guide: ${articleTitle.toLowerCase()}. Learn about decentralized finance.`,
  }
}

export default async function DeFiArticlePage({ params }: Props) {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Complete guide to ${articleTitle.toLowerCase()}. Part of our DeFi guides series to help you navigate decentralized finance on Ethereum Classic.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to DeFi Guides', href: '/learn/defi' }}
      relatedLinks={[
        { label: 'DeFi Guides', href: '/learn/defi' },
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'Security Guide', href: '/learn/security' },
      ]}
    />
  )
}
