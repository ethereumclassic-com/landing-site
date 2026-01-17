import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Games on ETC | Ethereum Classic',
  description: 'Blockchain games built on Ethereum Classic. Play-to-earn and on-chain gaming.',
}

export default function GamesPage() {
  return (
    <StubPage
      title="Games on ETC"
      description="Discover blockchain games built on Ethereum Classic. From play-to-earn experiences to fully on-chain games, explore gaming on the original smart contract platform."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'NFT Platforms', href: '/apps/nft' },
        { label: 'Apps Directory', href: '/apps' },
        { label: 'DeFi Apps', href: '/apps/defi' },
      ]}
    />
  )
}
