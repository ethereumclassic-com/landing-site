import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Exchange Directory | Ethereum Classic',
  description: 'Complete list of exchanges supporting Ethereum Classic. CEX, DEX, and P2P options.',
}

export default function DirectoryExchangesPage() {
  return (
    <StubPage
      title="Exchange Directory"
      description="Complete directory of exchanges supporting Ethereum Classic. Centralized exchanges, decentralized exchanges, and peer-to-peer platforms with detailed information."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Directory', href: '/directory' }}
      relatedLinks={[
        { label: 'Exchange Hub', href: '/exchanges' },
        { label: 'Compare Exchanges', href: '/exchanges/compare' },
        { label: 'Buy ETC', href: '/buy' },
      ]}
    />
  )
}
