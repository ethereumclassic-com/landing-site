import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Most Secure Exchanges | Ethereum Classic',
  description: 'Trade Ethereum Classic on the most secure cryptocurrency exchanges with top-tier security features.',
}

export default function MostSecurePage() {
  return (
    <StubPage
      title="Most Secure Exchanges"
      description="Trade with confidence on the most secure cryptocurrency exchanges. Features include cold storage, 2FA, insurance funds, and proof of reserves."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'Security Best Practices', href: '/learn/security' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'Exchange Reviews', href: '/exchanges/reviews' },
      ]}
    />
  )
}
