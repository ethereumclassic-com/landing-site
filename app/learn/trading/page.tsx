import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Trading Guides | Ethereum Classic',
  description: 'Learn how to trade Ethereum Classic. Trading strategies, technical analysis, and exchange guides.',
}

export default function TradingPage() {
  return (
    <StubPage
      title="Trading Guides"
      description="Master Ethereum Classic trading. Learn about different order types, trading strategies, technical analysis basics, and how to navigate cryptocurrency exchanges."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'Exchange Directory', href: '/exchanges' },
        { label: 'Price Charts', href: '/price' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
