import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Buy ETC with Card | Ethereum Classic',
  description: 'Buy Ethereum Classic with credit or debit card. Fast, secure, and convenient.',
}

export default function CardPage() {
  return (
    <StubPage
      title="Buy ETC with Card"
      description="Purchase Ethereum Classic using your credit or debit card. Our guide covers the best platforms, fees, and tips for secure card purchases."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Buy ETC', href: '/buy' }}
      relatedLinks={[
        { label: 'Instant Buy', href: '/buy/instant' },
        { label: 'Buy with Bank', href: '/buy/bank' },
        { label: 'Exchange Listings', href: '/buy/exchanges' },
      ]}
    />
  )
}
