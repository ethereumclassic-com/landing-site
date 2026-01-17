import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Portfolio Tracker | Ethereum Classic',
  description: 'Track your cryptocurrency portfolio value and performance.',
}

export default function AccountPortfolioPage() {
  return (
    <StubPage
      title="Portfolio Tracker"
      description="Track your cryptocurrency portfolio in one place. Monitor your ETC holdings, track performance over time, and analyze your investment returns."
      expectedPhase="Phase 3"
      showNewsletter={false}
      backLink={{ label: 'Back to Dashboard', href: '/account' }}
      relatedLinks={[
        { label: 'Watchlist', href: '/account/watchlist' },
        { label: 'Investment Calculator', href: '/calculator' },
        { label: 'ETC Price', href: '/price' },
      ]}
    />
  )
}
