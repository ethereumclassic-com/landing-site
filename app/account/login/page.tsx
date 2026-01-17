import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Login | Ethereum Classic',
  description: 'Login to your EthereumClassic.com account.',
}

export default function AccountLoginPage() {
  return (
    <StubPage
      title="Login"
      description="Login to your EthereumClassic.com account to access your personalized dashboard, watchlist, and portfolio tracking features."
      expectedPhase="Phase 3"
      showNewsletter={false}
      relatedLinks={[
        { label: 'Register', href: '/account/register' },
        { label: 'Home', href: '/' },
      ]}
    />
  )
}
