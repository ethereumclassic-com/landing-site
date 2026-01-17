import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Buy ETC on Exchanges | Ethereum Classic',
  description: 'Find the best exchanges to buy Ethereum Classic. Compare fees, features, and supported payment methods.',
}

export default function BuyExchangesPage() {
  return (
    <StubPage
      title="Buy ETC on Exchanges"
      description="Find the best cryptocurrency exchanges to buy Ethereum Classic. Compare fees, supported payment methods, and geographic availability."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Buy ETC', href: '/buy' }}
      relatedLinks={[
        { label: 'Exchange Directory', href: '/exchanges' },
        { label: 'Instant Buy', href: '/buy/instant' },
        { label: 'P2P Trading', href: '/buy/p2p' },
      ]}
    />
  )
}
