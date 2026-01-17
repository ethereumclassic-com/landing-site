import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Lowest Fee Exchanges | Ethereum Classic',
  description: 'Find the cheapest exchanges to trade Ethereum Classic with the lowest trading and withdrawal fees.',
}

export default function LowestFeesPage() {
  return (
    <StubPage
      title="Lowest Fee Exchanges"
      description="Maximize your ETC purchases with exchanges offering the lowest trading and withdrawal fees. Compare fee structures and find the most cost-effective platform."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'Compare Exchanges', href: '/exchanges/compare' },
        { label: 'Exchange Reviews', href: '/exchanges/reviews' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
