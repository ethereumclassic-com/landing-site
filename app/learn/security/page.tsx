import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Security Best Practices | Ethereum Classic',
  description: 'Learn how to secure your Ethereum Classic. Wallet security, scam prevention, and best practices.',
}

export default function SecurityPage() {
  return (
    <StubPage
      title="Security Best Practices"
      description="Protect your Ethereum Classic with comprehensive security knowledge. Learn about wallet security, private key management, scam prevention, and safe DeFi practices."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
        { label: 'Wallet Guides', href: '/learn/wallets' },
        { label: 'Most Secure Exchanges', href: '/exchanges/most-secure' },
      ]}
    />
  )
}
