import type { Metadata } from 'next'
import { StubPage } from '../../../components/templates'

interface Props {
  params: Promise<{ wallet: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { wallet } = await params
  const walletName = wallet
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return {
    title: `${walletName} Review | Ethereum Classic`,
    description: `Detailed review of ${walletName} for Ethereum Classic. Features, security, pros and cons.`,
  }
}

export default async function WalletReviewPage({ params }: Props) {
  const { wallet } = await params
  const walletName = wallet
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <StubPage
      title={`${walletName} Review`}
      description={`Comprehensive review of ${walletName} for Ethereum Classic. Learn about its features, security measures, user experience, and how it compares to other wallets.`}
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Wallet Reviews', href: '/wallet/reviews' }}
      relatedLinks={[
        { label: 'All Wallet Reviews', href: '/wallet/reviews' },
        { label: 'Compare Wallets', href: '/wallet/compare' },
        { label: 'Wallet Hub', href: '/wallet' },
      ]}
    />
  )
}
