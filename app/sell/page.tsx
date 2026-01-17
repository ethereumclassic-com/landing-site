import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Sell ETC | Ethereum Classic',
  description: 'Sell your Ethereum Classic for fiat or other cryptocurrencies. Find the best platforms and rates.',
}

export default function SellPage() {
  return (
    <StubPage
      title="Sell ETC"
      description="Convert your Ethereum Classic to fiat currency or other cryptocurrencies. Compare platforms, fees, and payout methods for the best rates."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Exchange Directory', href: '/exchanges' },
        { label: 'P2P Trading', href: '/buy/p2p' },
        { label: 'Price Charts', href: '/price' },
      ]}
    />
  )
}
