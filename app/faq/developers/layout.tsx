import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer FAQ',
  description:
    'Ethereum Classic developer questions answered — smart contracts, RPC endpoints, deployment, tooling, and the ECIP process.',
}

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
  return children
}
