import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Block Explorers | Ethereum Classic',
  description: 'Ethereum Classic block explorers. View transactions, addresses, and smart contracts.',
}

export default function ToolsExplorerPage() {
  return (
    <StubPage
      title="Block Explorers"
      description="Access Ethereum Classic block explorers. View transactions, check address balances, explore smart contracts, and analyze on-chain data with trusted explorers."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Tools', href: '/tools' }}
      relatedLinks={[
        { label: 'Blockscout', href: '/apps/blockscout' },
        { label: 'Gas Tracker', href: '/tools/gas' },
        { label: 'Network Stats', href: '/mining/stats' },
      ]}
    />
  )
}
