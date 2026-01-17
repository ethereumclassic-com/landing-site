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
    description: `Security guide: ${articleTitle.toLowerCase()}. Protect your ETC.`,
  }
}

export default async function SecurityArticlePage({ params }: Props) {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Complete guide to ${articleTitle.toLowerCase()}. Part of our security guides series to help you protect your Ethereum Classic assets.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Security Guides', href: '/learn/security' }}
      relatedLinks={[
        { label: 'Security Guides', href: '/learn/security' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'Wallet Guides', href: '/learn/wallets' },
      ]}
    />
  )
}
