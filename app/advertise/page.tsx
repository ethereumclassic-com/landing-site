import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Advertise | Ethereum Classic',
  description: 'Reach the Ethereum Classic community. Learn about advertising opportunities on EthereumClassic.com.',
}

export default function AdvertisePage() {
  return (
    <StubPage
      title="Advertise with Us"
      description="Reach thousands of Ethereum Classic users and enthusiasts. Our advertising program will launch soon with various sponsorship and placement options."
      expectedPhase="Phase 3"
      relatedLinks={[
        { label: 'Partners', href: '/partners' },
        { label: 'Contact Us', href: '/contact' },
        { label: 'About Us', href: '/about' },
      ]}
    />
  )
}
