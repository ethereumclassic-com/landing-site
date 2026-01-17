import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'What is Ethereum Classic? | Ethereum Classic',
  description: 'Learn what Ethereum Classic is, its history, technology, and why it matters. Complete guide to ETC.',
}

export default function EthereumClassicPage() {
  return (
    <StubPage
      title="What is Ethereum Classic?"
      description="Discover Ethereum Classic - the original Ethereum blockchain. Learn about its history, the principles of immutability and Code is Law, proof-of-work consensus, and why ETC matters."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'ETC Basics', href: '/learn/basics' },
        { label: 'Buy ETC', href: '/buy' },
        { label: 'Get a Wallet', href: '/wallet' },
      ]}
    />
  )
}
