import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Mining Hub | Ethereum Classic',
  description: 'Everything you need to mine Ethereum Classic. Pools, hardware, software, and profitability tools.',
}

export default function MiningPage() {
  return (
    <StubPage
      title="Mining Hub"
      description="Your complete resource for Ethereum Classic mining. Find pools, compare hardware, set up mining software, and calculate profitability. ETC uses the ETChash proof-of-work algorithm."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Getting Started', href: '/mining/getting-started' },
        { label: 'Mining Pools', href: '/mining/pools' },
        { label: 'Hardware Guide', href: '/mining/hardware' },
      ]}
    />
  )
}
