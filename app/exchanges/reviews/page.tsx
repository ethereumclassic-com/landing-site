import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Exchange Reviews | Ethereum Classic',
  description: 'In-depth reviews of cryptocurrency exchanges that support ETC. Honest assessments of security, fees, and user experience.',
}

export default function ExchangeReviewsPage() {
  return (
    <StubPage
      title="Exchange Reviews"
      description="In-depth reviews of all major cryptocurrency exchanges supporting Ethereum Classic. Honest assessments of security, fees, liquidity, and customer support."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'Compare Exchanges', href: '/exchanges/compare' },
        { label: 'Best for Beginners', href: '/exchanges/beginners' },
        { label: 'Lowest Fees', href: '/exchanges/lowest-fees' },
      ]}
    />
  )
}
