import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Developer Resources | Ethereum Classic',
  description: 'Developer resources for Ethereum Classic. Tools, documentation, clients, and support.',
}

export default function DirectoryDevelopersPage() {
  return (
    <StubPage
      title="Developer Resources"
      description="Comprehensive directory of Ethereum Classic developer resources. Development tools, documentation, node clients, SDKs, and developer support channels."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Directory', href: '/directory' }}
      relatedLinks={[
        { label: 'Developer Hub', href: '/build' },
        { label: 'Documentation', href: '/build/docs' },
        { label: 'Developer Tools', href: '/build/tools' },
      ]}
    />
  )
}
