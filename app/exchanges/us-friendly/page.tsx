import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'US-Friendly Exchanges | Ethereum Classic',
  description: 'Cryptocurrency exchanges available to US residents for buying and trading Ethereum Classic.',
}

export default function USFriendlyPage() {
  return (
    <StubPage
      title="US-Friendly Exchanges"
      description="Find cryptocurrency exchanges that are fully available to United States residents. Compare regulated platforms with proper US compliance for safe ETC trading."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'Best for Beginners', href: '/exchanges/beginners' },
        { label: 'Most Secure', href: '/exchanges/most-secure' },
        { label: 'Exchange Reviews', href: '/exchanges/reviews' },
      ]}
    />
  )
}
