import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Mining Pools | Ethereum Classic',
  description: 'Compare ETC mining pools. Find the best pool for hashrate, fees, and payout methods.',
}

export default function MiningPoolsPage() {
  return (
    <StubPage
      title="Mining Pools"
      description="Compare Ethereum Classic mining pools. Evaluate hashrate share, fees, minimum payouts, and payment methods to find the right pool for your mining operation."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Mining', href: '/mining' }}
      relatedLinks={[
        { label: 'Getting Started', href: '/mining/getting-started' },
        { label: 'Network Stats', href: '/mining/stats' },
        { label: 'Profitability Calculator', href: '/mining/profitability' },
      ]}
    />
  )
}
