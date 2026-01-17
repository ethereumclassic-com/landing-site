import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Partners | Ethereum Classic',
  description: 'Explore partnerships with EthereumClassic.com. Join our ecosystem of wallets, exchanges, and service providers.',
}

export default function PartnersPage() {
  return (
    <StubPage
      title="Partner Directory"
      description="Discover our ecosystem partners including wallets, exchanges, mining pools, and development teams. Interested in partnering with us? Let us know."
      expectedPhase="Phase 3"
      relatedLinks={[
        { label: 'Apps Directory', href: '/apps' },
        { label: 'Exchanges', href: '/exchanges' },
        { label: 'Contact Us', href: '/contact' },
      ]}
    />
  )
}
