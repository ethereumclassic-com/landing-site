import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Mining Directory | Ethereum Classic',
  description: 'Complete mining resources for Ethereum Classic. Pools, hardware, software, and services.',
}

export default function DirectoryMiningPage() {
  return (
    <StubPage
      title="Mining Directory"
      description="Complete directory of Ethereum Classic mining resources. Mining pools, hardware vendors, software tools, and related services for ETC miners."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Directory', href: '/directory' }}
      relatedLinks={[
        { label: 'Mining Hub', href: '/mining' },
        { label: 'Mining Pools', href: '/mining/pools' },
        { label: 'Hardware Guide', href: '/mining/hardware' },
      ]}
    />
  )
}
