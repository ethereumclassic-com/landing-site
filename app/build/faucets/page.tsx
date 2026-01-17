import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Testnet Faucets | Ethereum Classic',
  description: 'Get testnet ETC for development. Mordor testnet faucet and resources.',
}

export default function BuildFaucetsPage() {
  return (
    <StubPage
      title="Testnet Faucets"
      description="Get free testnet ETC for development and testing. Access Mordor testnet faucets and learn how to use testnets for smart contract development."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Build', href: '/build' }}
      relatedLinks={[
        { label: 'Network Info', href: '/build/networks' },
        { label: 'Getting Started', href: '/build/getting-started' },
        { label: 'Developer Tools', href: '/build/tools' },
      ]}
    />
  )
}
