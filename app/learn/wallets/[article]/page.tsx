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
    description: `Wallet guide: ${articleTitle.toLowerCase()}. Learn about wallet setup and security.`,
  }
}

export default async function WalletArticlePage({ params }: Props) {
  const { article } = await params
  const articleTitle = article
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={articleTitle}
      description={`Complete guide to ${articleTitle.toLowerCase()}. Part of our wallet guides series to help you securely manage your Ethereum Classic.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Wallet Guides', href: '/learn/wallets' }}
      relatedLinks={[
        { label: 'Wallet Guides', href: '/learn/wallets' },
        { label: 'Wallet Hub', href: '/wallet' },
        { label: 'Security Guide', href: '/learn/security' },
      ]}
    />
  )
}
