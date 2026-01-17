import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Governance & DAOs | Ethereum Classic',
  description: 'Decentralized governance and DAOs on Ethereum Classic.',
}

export default function GovernancePage() {
  return (
    <StubPage
      title="Governance & DAOs"
      description="Decentralized governance on Ethereum Classic. Explore DAOs, voting systems, and community-driven decision-making protocols built on the ETC network."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'Community', href: '/community' },
        { label: 'Apps Directory', href: '/apps' },
      ]}
    />
  )
}
