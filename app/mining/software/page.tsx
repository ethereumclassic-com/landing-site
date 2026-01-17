import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Mining Software | Ethereum Classic',
  description: 'Best mining software for Ethereum Classic. ETChash miners, configuration guides, and optimization tips.',
}

export default function MiningSoftwarePage() {
  return (
    <StubPage
      title="Mining Software Guide"
      description="Choose the best mining software for Ethereum Classic. Compare ETChash miners, learn configuration options, and optimize your mining performance."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Mining', href: '/mining' }}
      relatedLinks={[
        { label: 'Hardware Guide', href: '/mining/hardware' },
        { label: 'Getting Started', href: '/mining/getting-started' },
        { label: 'Mining Pools', href: '/mining/pools' },
      ]}
    />
  )
}
