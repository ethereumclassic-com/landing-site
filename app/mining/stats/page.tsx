import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Network Stats | Ethereum Classic Mining',
  description: 'Ethereum Classic network statistics. Hashrate, difficulty, block time, and mining metrics.',
}

export default function MiningStatsPage() {
  return (
    <StubPage
      title="Network Statistics"
      description="Real-time Ethereum Classic network statistics. Monitor hashrate, difficulty adjustments, block times, and other key mining metrics that affect profitability."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Mining', href: '/mining' }}
      relatedLinks={[
        { label: 'Profitability Calculator', href: '/mining/profitability' },
        { label: 'Mining Pools', href: '/mining/pools' },
        { label: 'Mining Hub', href: '/mining' },
      ]}
    />
  )
}
