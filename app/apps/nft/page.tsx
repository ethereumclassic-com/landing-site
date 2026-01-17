import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'NFT Platforms | Ethereum Classic',
  description: 'Discover NFT marketplaces and collections on Ethereum Classic.',
}

export default function NFTPage() {
  return (
    <StubPage
      title="NFT Platforms"
      description="Explore NFT marketplaces and collections on Ethereum Classic. Create, buy, sell, and trade digital collectibles on the original Ethereum chain."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'Apps Directory', href: '/apps' },
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'Games', href: '/apps/games' },
      ]}
    />
  )
}
