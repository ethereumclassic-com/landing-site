import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Getting Started | Ethereum Classic Development',
  description: 'Start building on Ethereum Classic. Developer quick start guide.',
}

export default function BuildGettingStartedPage() {
  return (
    <StubPage
      title="Getting Started"
      description="Start building on Ethereum Classic today. Quick start guide covering development environment setup, smart contract basics, and deploying your first dApp."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Build', href: '/build' }}
      relatedLinks={[
        { label: 'Documentation', href: '/build/docs' },
        { label: 'Developer Tools', href: '/build/tools' },
        { label: 'Node Clients', href: '/build/clients' },
      ]}
    />
  )
}
