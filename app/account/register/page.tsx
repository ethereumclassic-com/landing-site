import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Register | Ethereum Classic',
  description: 'Create your EthereumClassic.com account.',
}

export default function AccountRegisterPage() {
  return (
    <StubPage
      title="Create Account"
      description="Create your EthereumClassic.com account to unlock personalized features including price watchlists, portfolio tracking, and notification preferences."
      expectedPhase="Phase 3"
      showNewsletter={false}
      relatedLinks={[
        { label: 'Login', href: '/account/login' },
        { label: 'Home', href: '/' },
      ]}
    />
  )
}
