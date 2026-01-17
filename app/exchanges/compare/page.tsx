import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Compare Exchanges | Ethereum Classic',
  description: 'Compare cryptocurrency exchanges side by side. Find the best exchange for your ETC trading needs.',
}

export default function CompareExchangesPage() {
  return (
    <StubPage
      title="Compare Exchanges"
      description="Compare cryptocurrency exchanges side by side. Evaluate fees, features, security, and supported payment methods to find the perfect exchange for your needs."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'Exchange Reviews', href: '/exchanges/reviews' },
        { label: 'Best for Beginners', href: '/exchanges/beginners' },
        { label: 'Lowest Fees', href: '/exchanges/lowest-fees' },
      ]}
    />
  )
}
