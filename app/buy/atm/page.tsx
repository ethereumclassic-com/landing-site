import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Crypto ATM Locator | Ethereum Classic',
  description: 'Find Bitcoin and crypto ATMs near you that support Ethereum Classic.',
}

export default function ATMPage() {
  return (
    <StubPage
      title="Crypto ATM Locator"
      description="Find cryptocurrency ATMs near you that support Ethereum Classic. Buy ETC with cash at thousands of locations worldwide."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Buy ETC', href: '/buy' }}
      relatedLinks={[
        { label: 'Instant Buy', href: '/buy/instant' },
        { label: 'Buy with Card', href: '/buy/card' },
        { label: 'Exchange Directory', href: '/exchanges' },
      ]}
    />
  )
}
