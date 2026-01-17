import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Contact | Ethereum Classic',
  description: 'Get in touch with the EthereumClassic.com team. We welcome feedback, questions, and partnership inquiries.',
}

export default function ContactPage() {
  return (
    <StubPage
      title="Contact Us"
      description="Have questions, feedback, or want to collaborate? Our contact form will be available soon. In the meantime, reach out through our community channels."
      expectedPhase="Phase 3"
      relatedLinks={[
        { label: 'Community', href: '/community' },
        { label: 'About Us', href: '/about' },
        { label: 'Partners', href: '/partners' },
      ]}
    />
  )
}
