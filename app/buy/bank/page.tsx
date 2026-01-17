import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Buy ETC with Bank Transfer | Ethereum Classic',
  description: 'Buy Ethereum Classic with bank transfer. Lower fees for larger purchases.',
}

export default function BankPage() {
  return (
    <StubPage
      title="Buy ETC with Bank Transfer"
      description="Purchase Ethereum Classic via bank transfer for lower fees on larger amounts. Learn about wire transfers, ACH, SEPA, and other banking methods."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Buy ETC', href: '/buy' }}
      relatedLinks={[
        { label: 'Buy with Card', href: '/buy/card' },
        { label: 'Exchange Listings', href: '/buy/exchanges' },
        { label: 'Instant Buy', href: '/buy/instant' },
      ]}
    />
  )
}
