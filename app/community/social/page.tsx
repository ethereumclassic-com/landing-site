import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Social Media | Ethereum Classic',
  description: 'Official Ethereum Classic social media channels. Twitter, Discord, Telegram, and more.',
}

export default function CommunitySocialPage() {
  return (
    <StubPage
      title="Social Media"
      description="Connect with Ethereum Classic on social media. Find official accounts on Twitter, Discord, Telegram, Reddit, and other platforms to stay updated and engaged."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Community', href: '/community' }}
      relatedLinks={[
        { label: 'Community Hub', href: '/community' },
        { label: 'Events', href: '/community/events' },
        { label: 'News', href: '/news' },
      ]}
    />
  )
}
