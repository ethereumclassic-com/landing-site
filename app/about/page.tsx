import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'About | Ethereum Classic',
  description: 'Learn about EthereumClassic.com and our mission to support the Ethereum Classic ecosystem.',
}

export default function AboutPage() {
  return (
    <StubPage
      title="About EthereumClassic.com"
      description="We're building the premier destination for Ethereum Classic. Learn about our mission, team, and commitment to the ETC ecosystem."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Contact Us', href: '/contact' },
        { label: 'Partners', href: '/partners' },
        { label: 'Learn about ETC', href: '/learn/ethereum-classic' },
      ]}
    />
  )
}
