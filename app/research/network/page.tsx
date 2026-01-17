import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Network Analysis | Ethereum Classic',
  description: 'Ethereum Classic network analysis. Hashrate, transactions, addresses, and on-chain metrics.',
}

export default function ResearchNetworkPage() {
  return (
    <StubPage
      title="Network Analysis"
      description="Deep dive into Ethereum Classic network metrics. Analyze hashrate trends, transaction volumes, active addresses, gas usage, and other on-chain indicators."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Research', href: '/research' }}
      relatedLinks={[
        { label: 'Mining Stats', href: '/mining/stats' },
        { label: 'Research Reports', href: '/research/reports' },
        { label: 'Markets', href: '/markets' },
      ]}
    />
  )
}
