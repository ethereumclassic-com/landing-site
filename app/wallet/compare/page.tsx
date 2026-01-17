import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Compare Wallets | Ethereum Classic',
  description: 'Compare ETC wallets side by side. Find the best wallet for your needs with our comparison tool.',
}

export default function ComparePage() {
  return (
    <StubPage
      title="Wallet Comparison"
      description="Compare Ethereum Classic wallets side by side. Evaluate features, security, platform support, and user experience to find the perfect wallet for your needs."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Wallets', href: '/wallet' }}
      relatedLinks={[
        { label: 'Wallet Reviews', href: '/wallet/reviews' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'MetaMask Setup', href: '/wallet/metamask' },
      ]}
    />
  )
}
