import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Research Hub | Ethereum Classic',
  description: 'Ethereum Classic research and analysis. Network reports, ecosystem studies, and market research.',
}

export default function ResearchPage() {
  return (
    <StubPage
      title="Research Hub"
      description="In-depth research and analysis of the Ethereum Classic ecosystem. Network statistics, market reports, ecosystem studies, and technical research papers."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Network Analysis', href: '/research/network' },
        { label: 'Reports', href: '/research/reports' },
        { label: 'Mining Stats', href: '/mining/stats' },
      ]}
    />
  )
}
