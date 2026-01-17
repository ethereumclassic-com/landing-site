import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Price Watchlist | Ethereum Classic',
  description: 'Track your favorite cryptocurrency prices with your personal watchlist.',
}

export default function AccountWatchlistPage() {
  return (
    <StubPage
      title="Price Watchlist"
      description="Create your personal cryptocurrency watchlist. Track ETC and other assets, set price alerts, and monitor market movements in one convenient view."
      expectedPhase="Phase 3"
      showNewsletter={false}
      backLink={{ label: 'Back to Dashboard', href: '/account' }}
      relatedLinks={[
        { label: 'ETC Price', href: '/price' },
        { label: 'Markets', href: '/markets' },
        { label: 'Portfolio', href: '/account/portfolio' },
      ]}
    />
  )
}
