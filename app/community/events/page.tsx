import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Events | Ethereum Classic',
  description: 'Ethereum Classic events calendar. Conferences, meetups, and community gatherings.',
}

export default function CommunityEventsPage() {
  return (
    <StubPage
      title="Events Calendar"
      description="Stay updated with Ethereum Classic events. Find conferences, community meetups, online AMAs, and other gatherings happening around the world."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Community', href: '/community' }}
      relatedLinks={[
        { label: 'Community Hub', href: '/community' },
        { label: 'Social Media', href: '/community/social' },
        { label: 'News', href: '/news' },
      ]}
    />
  )
}
