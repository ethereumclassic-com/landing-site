import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Mining Hardware | Ethereum Classic',
  description: 'Best hardware for mining Ethereum Classic. GPU and ASIC comparisons and recommendations.',
}

export default function MiningHardwarePage() {
  return (
    <StubPage
      title="Mining Hardware Guide"
      description="Find the best hardware for mining Ethereum Classic. Compare GPUs and ASICs, understand hashrate and power consumption, and choose the right equipment for your budget."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Mining', href: '/mining' }}
      relatedLinks={[
        { label: 'Software Guide', href: '/mining/software' },
        { label: 'Profitability Calculator', href: '/mining/profitability' },
        { label: 'Getting Started', href: '/mining/getting-started' },
      ]}
    />
  )
}
