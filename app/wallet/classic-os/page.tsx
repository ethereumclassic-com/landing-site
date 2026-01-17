import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Classic OS | Ethereum Classic',
  description: 'Classic OS - The complete economic operating system for Ethereum Classic. Manage your ETC, DeFi, and more.',
}

export default function ClassicOSPage() {
  return (
    <StubPage
      title="Classic OS"
      description="The complete economic operating system for Ethereum Classic. Manage your portfolio, interact with DeFi protocols, and control your ETC ecosystem from one unified interface."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Wallets', href: '/wallet' }}
      relatedLinks={[
        { label: 'Compare Wallets', href: '/wallet/compare' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'MetaMask Setup', href: '/wallet/metamask' },
      ]}
    />
  )
}
