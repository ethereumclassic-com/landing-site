import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Node Clients | Ethereum Classic',
  description: 'Ethereum Classic node clients. Core-Geth, Hyperledger Besu, and more.',
}

export default function BuildClientsPage() {
  return (
    <StubPage
      title="Node Clients"
      description="Run your own Ethereum Classic node. Compare node clients including Core-Geth, Hyperledger Besu, and upcoming options. Setup guides and configuration help."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Build', href: '/build' }}
      relatedLinks={[
        { label: 'Core-Geth', href: '/build/clients/core-geth' },
        { label: 'Hyperledger Besu', href: '/build/clients/hyperledger-besu' },
        { label: 'Network Info', href: '/build/networks' },
      ]}
    />
  )
}
