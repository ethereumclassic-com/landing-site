import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Infrastructure | Ethereum Classic',
  description: 'Core infrastructure projects supporting the Ethereum Classic ecosystem.',
}

export default function InfrastructurePage() {
  return (
    <StubPage
      title="Infrastructure"
      description="Core infrastructure powering the Ethereum Classic ecosystem. Block explorers, RPC providers, node clients, and essential services that keep ETC running."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'Blockscout Explorer', href: '/apps/blockscout' },
        { label: 'Node Clients', href: '/build/clients' },
        { label: 'Developer Tools', href: '/apps/tools' },
      ]}
    />
  )
}
