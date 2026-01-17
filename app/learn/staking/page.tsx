import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Staking & Yield | Ethereum Classic',
  description: 'Learn about earning yield with Ethereum Classic through DeFi protocols and exchange programs.',
}

export default function StakingPage() {
  return (
    <StubPage
      title="Staking & Yield"
      description="Learn how to earn passive income with Ethereum Classic. Explore DeFi yield opportunities, liquidity providing, and exchange earn programs. Note: ETC is proof-of-work, not proof-of-stake."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'DeFi on ETC', href: '/learn/defi' },
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'Exchange Staking', href: '/exchanges/staking' },
      ]}
    />
  )
}
