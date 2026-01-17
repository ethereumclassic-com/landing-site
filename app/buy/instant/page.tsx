import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Instant Buy ETC | Ethereum Classic',
  description: 'Buy Ethereum Classic instantly with credit card, debit card, or bank transfer.',
}

export default function InstantBuyPage() {
  return (
    <StubPage
      title="Instant Buy ETC"
      description="Purchase Ethereum Classic instantly using your credit card, debit card, or bank transfer. Get ETC in minutes with our trusted instant buy partners."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Buy ETC', href: '/buy' }}
      relatedLinks={[
        { label: 'Buy with Card', href: '/buy/card' },
        { label: 'Buy with Bank', href: '/buy/bank' },
        { label: 'Exchange Listings', href: '/buy/exchanges' },
      ]}
    />
  )
}
