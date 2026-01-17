import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ethereum Classic',
  description: 'Privacy policy for EthereumClassic.com. Learn how we handle your data.',
}

export default function PrivacyPage() {
  return (
    <StubPage
      title="Privacy Policy"
      description="Your privacy matters to us. Our comprehensive privacy policy detailing data collection, usage, and your rights will be published here."
      expectedPhase="Phase 2"
      showNewsletter={false}
      relatedLinks={[
        { label: 'Legal & Terms', href: '/legal' },
        { label: 'About Us', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ]}
    />
  )
}
