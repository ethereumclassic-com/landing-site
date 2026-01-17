import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Sell ETC on Exchanges | Ethereum Classic',
  description: 'Find the best exchanges to sell Ethereum Classic. Compare withdrawal fees and payout methods.',
}

export default function SellExchangesPage() {
  return (
    <StubPage
      title="Sell ETC on Exchanges"
      description="Compare cryptocurrency exchanges for selling Ethereum Classic. Find the best withdrawal fees, payout speeds, and supported currencies."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Sell', href: '/sell' }}
      relatedLinks={[
        { label: 'Exchange Directory', href: '/exchanges' },
        { label: 'P2P Trading', href: '/buy/p2p' },
        { label: 'Price Charts', href: '/price' },
      ]}
    />
  )
}
