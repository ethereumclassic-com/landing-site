import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'No KYC Exchanges | Ethereum Classic',
  description: 'Trade Ethereum Classic without identity verification. Privacy-focused exchanges and DEXs.',
}

export default function NoKYCPage() {
  return (
    <StubPage
      title="No KYC Exchanges"
      description="Trade Ethereum Classic with privacy. Explore exchanges and decentralized platforms that don't require identity verification or personal information."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'Decentralized Exchanges', href: '/exchanges/decentralized' },
        { label: 'P2P Trading', href: '/buy/p2p' },
        { label: 'Privacy Guide', href: '/learn/security' },
      ]}
    />
  )
}
