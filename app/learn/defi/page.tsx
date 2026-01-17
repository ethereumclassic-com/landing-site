import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'DeFi on ETC | Ethereum Classic',
  description: 'Learn about decentralized finance on Ethereum Classic. DEXs, lending, yield farming, and more.',
}

export default function DeFiLearnPage() {
  return (
    <StubPage
      title="DeFi on ETC"
      description="Explore decentralized finance on Ethereum Classic. Learn about DEXs, liquidity pools, yield farming, lending protocols, and how to participate safely in DeFi."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'ETCswap', href: '/apps/etcswap' },
        { label: 'Security Guide', href: '/learn/security' },
      ]}
    />
  )
}
