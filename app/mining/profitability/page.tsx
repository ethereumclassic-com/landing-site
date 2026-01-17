import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Mining Profitability Calculator | Ethereum Classic',
  description: 'Calculate your ETC mining profitability. Input hashrate, power costs, and pool fees.',
}

export default function MiningProfitabilityPage() {
  return (
    <StubPage
      title="Profitability Calculator"
      description="Calculate your Ethereum Classic mining profitability. Enter your hashrate, power consumption, electricity costs, and pool fees to estimate daily, weekly, and monthly earnings."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Mining', href: '/mining' }}
      relatedLinks={[
        { label: 'Hardware Guide', href: '/mining/hardware' },
        { label: 'Mining Pools', href: '/mining/pools' },
        { label: 'Network Stats', href: '/mining/stats' },
      ]}
    />
  )
}
