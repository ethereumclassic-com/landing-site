import type { Metadata } from 'next'
import { StubPage } from '../components/templates'

export const metadata: Metadata = {
  title: 'Community | Ethereum Classic',
  description: 'Join the Ethereum Classic community. Social channels, events, and ways to contribute.',
}

export default function CommunityPage() {
  return (
    <StubPage
      title="Community Hub"
      description="Join the global Ethereum Classic community. Connect with fellow enthusiasts, developers, and miners through social channels, events, and contribution opportunities."
      expectedPhase="Phase 2"
      relatedLinks={[
        { label: 'Social Media', href: '/community/social' },
        { label: 'Events', href: '/community/events' },
        { label: 'Contribute', href: '/community/contribute' },
      ]}
    />
  )
}
