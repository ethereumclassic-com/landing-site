import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Contract Verifier | Ethereum Classic',
  description: 'Verify Ethereum Classic smart contracts. Make your code transparent and trustworthy.',
}

export default function ToolsVerifyPage() {
  return (
    <StubPage
      title="Contract Verifier"
      description="Verify your Ethereum Classic smart contracts. Make your code transparent, build trust with users, and enable interaction through verified interfaces."
      expectedPhase="Phase 3"
      backLink={{ label: 'Back to Tools', href: '/tools' }}
      relatedLinks={[
        { label: 'Block Explorers', href: '/tools/explorer' },
        { label: 'Developer Hub', href: '/build' },
        { label: 'Documentation', href: '/build/docs' },
      ]}
    />
  )
}
