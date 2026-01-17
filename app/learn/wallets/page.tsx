import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Wallet Guides | Ethereum Classic',
  description: 'Learn how to choose, set up, and secure your Ethereum Classic wallet. Complete wallet guides.',
}

export default function WalletsLearnPage() {
  return (
    <StubPage
      title="Wallet Guides"
      description="Everything you need to know about ETC wallets. Learn how to choose the right wallet, set it up securely, back up your keys, and protect your assets."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'Wallet Hub', href: '/wallet' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'Security Guide', href: '/learn/security' },
      ]}
    />
  )
}
