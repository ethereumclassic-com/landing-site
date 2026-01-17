import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Developer Tools | Ethereum Classic',
  description: 'Essential tools for building on Ethereum Classic. IDEs, testing, deployment, and monitoring.',
}

export default function BuildToolsPage() {
  return (
    <StubPage
      title="Developer Tools"
      description="Essential tools for building on Ethereum Classic. Development environments, testing frameworks, deployment tools, contract verification, and monitoring solutions."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Build', href: '/build' }}
      relatedLinks={[
        { label: 'Getting Started', href: '/build/getting-started' },
        { label: 'Documentation', href: '/build/docs' },
        { label: 'Apps Tools', href: '/apps/tools' },
      ]}
    />
  )
}
