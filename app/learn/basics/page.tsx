import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'ETC Basics | Ethereum Classic',
  description: 'Learn the basics of Ethereum Classic. Blockchain fundamentals, cryptocurrency concepts, and getting started guides.',
}

export default function BasicsPage() {
  return (
    <StubPage
      title="ETC Basics"
      description="Start your Ethereum Classic journey with fundamental concepts. Learn about blockchain technology, cryptocurrency basics, proof-of-work, and smart contracts."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'What is Ethereum Classic?', href: '/learn/ethereum-classic' },
        { label: 'How to Buy ETC', href: '/buy' },
        { label: 'Wallet Guide', href: '/learn/wallets' },
      ]}
    />
  )
}
