import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Network Info | Ethereum Classic',
  description: 'Ethereum Classic network information. Mainnet, testnets, chain IDs, and RPC endpoints.',
}

export default function BuildNetworksPage() {
  return (
    <StubPage
      title="Network Information"
      description="Ethereum Classic network details. Mainnet and testnet configurations, chain IDs, RPC endpoints, block explorers, and network parameters for developers."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Build', href: '/build' }}
      relatedLinks={[
        { label: 'Node Clients', href: '/build/clients' },
        { label: 'Testnet Faucets', href: '/build/faucets' },
        { label: 'Documentation', href: '/build/docs' },
      ]}
    />
  )
}
