import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Account Settings | Ethereum Classic',
  description: 'Manage your EthereumClassic.com account settings.',
}

export default function AccountSettingsPage() {
  return (
    <StubPage
      title="Account Settings"
      description="Manage your EthereumClassic.com account settings. Update your profile, notification preferences, display options, and security settings."
      expectedPhase="Phase 3"
      showNewsletter={false}
      backLink={{ label: 'Back to Dashboard', href: '/account' }}
      relatedLinks={[
        { label: 'Dashboard', href: '/account' },
        { label: 'Watchlist', href: '/account/watchlist' },
        { label: 'Portfolio', href: '/account/portfolio' },
      ]}
    />
  )
}
