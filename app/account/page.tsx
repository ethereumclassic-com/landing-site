import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Account Dashboard | Ethereum Classic',
  description: 'Manage your EthereumClassic.com account. Watchlist, portfolio, and settings.',
}

export default function AccountPage() {
  return (
    <StubPage
      title="Account Dashboard"
      description="Manage your EthereumClassic.com account. Access your personalized dashboard, price watchlist, portfolio tracker, and account settings."
      expectedPhase="Phase 3"
      showNewsletter={false}
      relatedLinks={[
        { label: 'Login', href: '/account/login' },
        { label: 'Register', href: '/account/register' },
        { label: 'Home', href: '/' },
      ]}
    />
  )
}
