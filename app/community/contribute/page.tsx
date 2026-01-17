import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Contribute | Ethereum Classic',
  description: 'Contribute to Ethereum Classic. Development, documentation, community, and more.',
}

export default function CommunityContributePage() {
  return (
    <StubPage
      title="How to Contribute"
      description="Learn how you can contribute to Ethereum Classic. Whether through development, documentation, community building, or other means, there's a place for everyone."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Community', href: '/community' }}
      relatedLinks={[
        { label: 'Developer Hub', href: '/build' },
        { label: 'Grants & Funding', href: '/build/grants' },
        { label: 'Community Hub', href: '/community' },
      ]}
    />
  )
}
