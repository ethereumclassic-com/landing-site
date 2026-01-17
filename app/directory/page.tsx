import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Directory | Ethereum Classic',
  description: 'Ethereum Classic ecosystem directory. Wallets, exchanges, mining resources, and more.',
}

export default function DirectoryPage() {
  return (
    <StubPage
      title="Directory Hub"
      description="Comprehensive Ethereum Classic ecosystem directory. Find wallets, exchanges, mining pools, development resources, and community links all in one place."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Wallet Directory', href: '/directory/wallets' },
        { label: 'Exchange Directory', href: '/directory/exchanges' },
        { label: 'Mining Resources', href: '/directory/mining' },
      ]}
    />
  )
}
