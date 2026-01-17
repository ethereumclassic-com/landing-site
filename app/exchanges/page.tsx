import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Exchange Directory | Ethereum Classic',
  description: 'Complete directory of cryptocurrency exchanges supporting Ethereum Classic. Compare features, fees, and security.',
}

export default function ExchangesPage() {
  return (
    <StubPage
      title="Exchange Directory"
      description="Comprehensive directory of cryptocurrency exchanges that support Ethereum Classic. Filter by features, fees, security ratings, and geographic availability."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Exchange Reviews', href: '/exchanges/reviews' },
        { label: 'Compare Exchanges', href: '/exchanges/compare' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
