import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Wallet Reviews | Ethereum Classic',
  description: 'In-depth reviews of ETC-compatible wallets. Read honest reviews to make an informed decision.',
}

export default function WalletReviewsPage() {
  return (
    <StubPage
      title="Wallet Reviews"
      description="In-depth reviews of all ETC-compatible wallets. Read honest assessments of features, security, usability, and customer support to make an informed decision."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Wallets', href: '/wallet' }}
      relatedLinks={[
        { label: 'Compare Wallets', href: '/wallet/compare' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'Classic OS', href: '/wallet/classic-os' },
      ]}
    />
  )
}
