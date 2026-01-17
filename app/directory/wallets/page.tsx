import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Wallet Directory | Ethereum Classic',
  description: 'Complete list of Ethereum Classic wallets. Hardware, software, web, and mobile options.',
}

export default function DirectoryWalletsPage() {
  return (
    <StubPage
      title="Wallet Directory"
      description="Complete directory of Ethereum Classic wallets. Browse hardware wallets, software wallets, web wallets, and mobile options with detailed comparisons."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Directory', href: '/directory' }}
      relatedLinks={[
        { label: 'Wallet Hub', href: '/wallet' },
        { label: 'Compare Wallets', href: '/wallet/compare' },
        { label: 'Hardware Wallets', href: '/wallet/hardware' },
      ]}
    />
  )
}
