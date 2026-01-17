import type { Metadata } from 'next'
import { StubPage } from '../../components/templates'

export const metadata: Metadata = {
  title: 'Decentralized Exchanges (DEX) | Ethereum Classic',
  description: 'Trade Ethereum Classic on decentralized exchanges. Non-custodial trading with full control of your funds.',
}

export default function DecentralizedPage() {
  return (
    <StubPage
      title="Decentralized Exchanges"
      description="Trade Ethereum Classic on decentralized exchanges (DEXs). Maintain custody of your assets while trading directly from your wallet with no intermediaries."
      expectedPhase="Phase 2"
      backLink={{ label: 'Back to Exchanges', href: '/exchanges' }}
      relatedLinks={[
        { label: 'DeFi Apps', href: '/apps/defi' },
        { label: 'ETCswap', href: '/apps/etcswap' },
        { label: 'No KYC Options', href: '/exchanges/no-kyc' },
      ]}
    />
  )
}
