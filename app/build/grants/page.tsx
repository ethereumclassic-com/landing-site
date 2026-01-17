import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Grants & Funding | Ethereum Classic',
  description: 'Funding opportunities for Ethereum Classic projects. Grants, bounties, and ecosystem support.',
}

export default function BuildGrantsPage() {
  return (
    <StubPage
      title="Grants & Funding"
      description="Funding opportunities for building on Ethereum Classic. Learn about grants, bounty programs, ecosystem support, and how to apply for funding for your ETC project."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Build', href: '/build' }}
      relatedLinks={[
        { label: 'Developer Hub', href: '/build' },
        { label: 'Community', href: '/community' },
        { label: 'Submit an App', href: '/apps/submit' },
      ]}
    />
  )
}
