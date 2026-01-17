import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Mining Guides | Ethereum Classic',
  description: 'Learn how to mine Ethereum Classic. Hardware, software, pools, and profitability guides.',
}

export default function MiningLearnPage() {
  return (
    <StubPage
      title="Mining Guides"
      description="Everything you need to start mining Ethereum Classic. Learn about hardware requirements, mining software, pool selection, and profitability calculations."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Learn', href: '/learn' }}
      relatedLinks={[
        { label: 'Mining Hub', href: '/mining' },
        { label: 'Mining Pools', href: '/mining/pools' },
        { label: 'Hardware Guide', href: '/mining/hardware' },
      ]}
    />
  )
}
