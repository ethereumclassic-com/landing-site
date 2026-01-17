import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Legal & Terms | Ethereum Classic',
  description: 'Terms of service and legal information for EthereumClassic.com.',
}

export default function LegalPage() {
  return (
    <StubPage
      title="Legal & Terms of Service"
      description="Our terms of service, disclaimers, and legal information will be published here. This content is being prepared to ensure compliance and transparency."
      expectedPhase="Phase 2"
      showNewsletter={false}
      relatedLinks={[
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  )
}
