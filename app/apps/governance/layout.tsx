import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Governance Apps',
  description: 'Governance and DAO applications on Ethereum Classic.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
