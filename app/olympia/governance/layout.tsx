import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'On-Chain Governance',
  description:
    'Treasury funding, soulbound NFT voting, timelock security, and sanctions compliance for Ethereum Classic.',
}

export default function GovernanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
