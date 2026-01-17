import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Gas Tracker | Ethereum Classic',
  description: 'Track Ethereum Classic gas prices. Optimize transaction costs with real-time gas data.',
}

export default function ToolsGasPage() {
  return (
    <StubPage
      title="Gas Tracker"
      description="Monitor Ethereum Classic gas prices in real-time. Get recommended gas prices for fast, standard, and slow transactions to optimize your transaction costs."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Tools', href: '/tools' }}
      relatedLinks={[
        { label: 'Block Explorers', href: '/tools/explorer' },
        { label: 'Network Stats', href: '/mining/stats' },
        { label: 'Tools Hub', href: '/tools' },
      ]}
    />
  )
}
