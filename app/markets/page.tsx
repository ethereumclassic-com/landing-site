import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Markets | Ethereum Classic',
  description: 'Ethereum Classic market overview. Price, volume, market cap, and trading data.',
}

export default function MarketsPage() {
  return (
    <StubPage
      title="Markets Overview"
      description="Comprehensive Ethereum Classic market data. Track ETC price, trading volume, market capitalization, and compare performance across major exchanges."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'ETC Price', href: '/price' },
        { label: 'Price Converter', href: '/converter' },
        { label: 'Exchange Directory', href: '/exchanges' },
      ]}
    />
  )
}
