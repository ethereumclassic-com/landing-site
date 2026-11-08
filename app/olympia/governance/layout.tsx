import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Olympia DAO Governance',
  description:
    'How Olympia DAO would govern the Treasury: CoreNFT membership, funding proposals, milestone tranches, sanctions screening and Ecosystem Growth DAOs.',
}

export default function GovernanceLayout({ children }: { children: React.ReactNode }) {
  return children
}
