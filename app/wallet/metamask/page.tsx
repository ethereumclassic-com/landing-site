import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'MetaMask Setup Guide | Ethereum Classic',
  description: 'Learn how to configure MetaMask for Ethereum Classic. Step-by-step guide to add ETC network.',
}

export default function MetaMaskPage() {
  return (
    <StubPage
      title="MetaMask Setup Guide"
      description="Learn how to configure MetaMask for Ethereum Classic. Our comprehensive guide will walk you through adding the ETC network and managing your assets."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Wallets', href: '/wallet' }}
      relatedLinks={[
        { label: 'Compare Wallets', href: '/wallet/compare' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'Classic OS', href: '/wallet/classic-os' },
      ]}
    />
  )
}
