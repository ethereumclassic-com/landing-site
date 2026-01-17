import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Developer Tools | Ethereum Classic',
  description: 'Developer tools and utilities for building on Ethereum Classic.',
}

export default function ToolsPage() {
  return (
    <StubPage
      title="Developer Tools"
      description="Essential developer tools for building on Ethereum Classic. IDEs, testing frameworks, deployment tools, and utilities to accelerate your development."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Apps', href: '/apps' }}
      relatedLinks={[
        { label: 'Build Hub', href: '/build' },
        { label: 'Infrastructure', href: '/apps/infrastructure' },
        { label: 'Documentation', href: '/build/docs' },
      ]}
    />
  )
}
