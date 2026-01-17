import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Community Links | Ethereum Classic',
  description: 'Ethereum Classic community resources. Social media, forums, events, and meetups.',
}

export default function DirectoryCommunityPage() {
  return (
    <StubPage
      title="Community Links"
      description="Directory of Ethereum Classic community resources. Find official social media channels, forums, discussion groups, regional communities, and meetup information."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Directory', href: '/directory' }}
      relatedLinks={[
        { label: 'Community Hub', href: '/community' },
        { label: 'Social Media', href: '/community/social' },
        { label: 'Events', href: '/community/events' },
      ]}
    />
  )
}
