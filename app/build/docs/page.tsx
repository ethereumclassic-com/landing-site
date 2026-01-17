import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Documentation | Ethereum Classic Development',
  description: 'Ethereum Classic developer documentation. API references, guides, and technical resources.',
}

export default function BuildDocsPage() {
  return (
    <StubPage
      title="Documentation"
      description="Comprehensive Ethereum Classic developer documentation. API references, protocol specifications, smart contract development guides, and technical resources."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Build', href: '/build' }}
      relatedLinks={[
        { label: 'Getting Started', href: '/build/getting-started' },
        { label: 'Developer Tools', href: '/build/tools' },
        { label: 'Network Info', href: '/build/networks' },
      ]}
    />
  )
}
