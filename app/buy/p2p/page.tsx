import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'P2P Trading | Ethereum Classic',
  description: 'Buy and sell Ethereum Classic directly with other users through peer-to-peer trading platforms.',
}

export default function P2PPage() {
  return (
    <StubPage
      title="P2P Trading"
      description="Trade Ethereum Classic directly with other users. Peer-to-peer platforms offer flexible payment methods and competitive rates without intermediaries."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Buy ETC', href: '/buy' }}
      relatedLinks={[
        { label: 'Exchange Directory', href: '/exchanges' },
        { label: 'No KYC Options', href: '/exchanges/no-kyc' },
        { label: 'Decentralized Exchanges', href: '/exchanges/decentralized' },
      ]}
    />
  )
}
