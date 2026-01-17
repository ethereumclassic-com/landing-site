import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Ecosystem Reports | Ethereum Classic',
  description: 'Ethereum Classic ecosystem reports. DeFi, dApps, infrastructure, and development activity.',
}

export default function ResearchEcosystemPage() {
  return (
    <StubPage
      title="Ecosystem Reports"
      description="Comprehensive reports on the Ethereum Classic ecosystem. Track DeFi growth, dApp development, infrastructure improvements, and community initiatives."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Research', href: '/research' }}
      relatedLinks={[
        { label: 'Apps Directory', href: '/apps' },
        { label: 'Network Analysis', href: '/research/network' },
        { label: 'Research Reports', href: '/research/reports' },
      ]}
    />
  )
}
