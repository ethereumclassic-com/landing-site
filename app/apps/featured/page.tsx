import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Featured Apps | Ethereum Classic',
  description: 'Discover the best and most popular apps built on Ethereum Classic. Featured DeFi, infrastructure, and governance applications.',
}

export default function FeaturedAppsPage() {
  return (
    <StubPage
      title="Featured Apps"
      description="Explore the most popular and innovative applications built on Ethereum Classic. Hand-picked DeFi protocols, infrastructure tools, and governance platforms."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'Infrastructure', href: '/apps/infrastructure' },
        { label: 'Submit an App', href: '/apps/submit' },
      ]}
    />
  )
}
