import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Research Reports | Ethereum Classic',
  description: 'Ethereum Classic research reports. Ecosystem analysis, market studies, and technical papers.',
}

export default function ResearchReportsPage() {
  return (
    <StubPage
      title="Research Reports"
      description="Access comprehensive research reports on the Ethereum Classic ecosystem. Market analysis, technical studies, ecosystem assessments, and comparative research."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Research', href: '/research' }}
      relatedLinks={[
        { label: 'Network Analysis', href: '/research/network' },
        { label: 'Ecosystem Reports', href: '/research/ecosystem' },
        { label: 'Research Hub', href: '/research' },
      ]}
    />
  )
}
