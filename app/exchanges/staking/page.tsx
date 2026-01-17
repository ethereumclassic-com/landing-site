import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Exchanges with Staking | Ethereum Classic',
  description: 'Earn yield on your ETC holdings through exchange staking and earn programs.',
}

export default function StakingPage() {
  return (
    <StubPage
      title="Exchanges with Staking"
      description="Earn passive income on your Ethereum Classic holdings. Compare exchange staking programs, earn features, and yield opportunities while keeping your ETC on exchange."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'DeFi Yield', href: '/learn/defi' },
        { label: 'Exchange Reviews', href: '/exchanges/reviews' },
        { label: 'Staking Guide', href: '/learn/staking' },
      ]}
    />
  )
}
