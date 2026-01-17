import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Best Exchanges for Beginners | Ethereum Classic',
  description: 'The easiest exchanges to buy Ethereum Classic for first-time crypto users.',
}

export default function BeginnersPage() {
  return (
    <StubPage
      title="Best Exchanges for Beginners"
      description="Discover the most user-friendly cryptocurrency exchanges for buying your first Ethereum Classic. Simple interfaces, educational resources, and responsive support."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'How to Buy ETC', href: '/learn/how-to-buy-etc' },
        { label: 'Instant Buy', href: '/buy/instant' },
        { label: 'Exchange Reviews', href: '/exchanges/reviews' },
      ]}
    />
  )
}
