import type { Metadata } from 'next'

// The /olympia layout appends " | Ethereum Classic", and this page's share card is drawn from the title
// and description below.
export const metadata: Metadata = {
  title: 'The Olympia Treasury',
  description:
    'In the Olympia proposal, the Treasury is the account at the Sovereignty Vault: how the base fee would reach it, who could spend it, and what is permanent.',
  keywords: [
    'Olympia Treasury',
    'Sovereignty Vault',
    'ECIP-1112',
    'ECIP-1113',
    'ECIP-1111',
    'Ethereum Classic base fee',
    'Olympia DAO',
    'Ethereum Classic funding',
  ],
}

export default function TreasuryLayout({ children }: { children: React.ReactNode }) {
  return children
}
