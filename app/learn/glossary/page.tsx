import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Crypto Glossary | Ethereum Classic',
  description: 'Comprehensive cryptocurrency glossary. Definitions of blockchain, DeFi, and crypto terms.',
}

export default function GlossaryPage() {
  return (
    <StubPage
      title="Crypto Glossary"
      description="Your comprehensive guide to cryptocurrency terminology. From basic blockchain concepts to advanced DeFi terms, find clear definitions for everything crypto-related."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'ETC Basics', href: '/learn/basics' },
        { label: 'What is ETC?', href: '/learn/ethereum-classic' },
        { label: 'Learning Center', href: '/learn' },
      ]}
    />
  )
}
