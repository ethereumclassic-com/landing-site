import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Mining Getting Started | Ethereum Classic',
  description: 'Start mining Ethereum Classic today. Beginner-friendly guide to ETC mining.',
}

export default function MiningGettingStartedPage() {
  return (
    <StubPage
      title="Getting Started with Mining"
      description="Start mining Ethereum Classic today with our beginner-friendly guide. Learn the basics, choose your hardware, select a pool, and configure mining software."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Mining', href: '/mining' }}
      relatedLinks={[
        { label: 'Mining Pools', href: '/mining/pools' },
        { label: 'Hardware Guide', href: '/mining/hardware' },
        { label: 'Software Guide', href: '/mining/software' },
      ]}
    />
  )
}
