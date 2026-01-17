import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'DeFi Apps | Ethereum Classic',
  description: 'Decentralized finance applications on Ethereum Classic. DEXs, lending protocols, stablecoins, and more.',
}

export default function DeFiPage() {
  return (
    <StubPage
      title="DeFi Apps"
      description="Explore decentralized finance on Ethereum Classic. Discover DEXs like ETCswap, stablecoins like ClassicUSD, lending protocols, and yield opportunities."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'ETCswap', href: '/apps/etcswap' },
        { label: 'ClassicUSD', href: '/apps/classic-usd' },
        { label: 'DeFi Guide', href: '/learn/defi' },
      ]}
    />
  )
}
