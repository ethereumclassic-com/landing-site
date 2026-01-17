import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'ETC Price | Ethereum Classic',
  description: 'Live Ethereum Classic price, charts, and market data. Track ETC/USD, ETC/BTC, and more.',
}

export default function PricePage() {
  return (
    <StubPage
      title="ETC Price"
      description="Live Ethereum Classic price with interactive charts, historical data, and technical analysis. Track ETC against USD, BTC, ETH, and other currencies."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Markets Overview', href: '/markets' },
        { label: 'Price Converter', href: '/converter' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
