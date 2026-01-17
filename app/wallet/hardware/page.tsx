import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Hardware Wallet Guide | Ethereum Classic',
  description: 'Secure your ETC with hardware wallets. Compare Ledger, Trezor, and other hardware wallet options.',
}

export default function HardwarePage() {
  return (
    <StubPage
      title="Hardware Wallet Guide"
      description="Maximum security for your Ethereum Classic. Compare hardware wallet options like Ledger and Trezor, and learn how to set them up for ETC."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Wallets', href: '/wallet' }}
      relatedLinks={[
        { label: 'Compare Wallets', href: '/wallet/compare' },
        { label: 'MetaMask Setup', href: '/wallet/metamask' },
        { label: 'Security Best Practices', href: '/learn/security' },
      ]}
    />
  )
}
