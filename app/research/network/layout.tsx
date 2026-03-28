import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Network Analytics',
  description: 'Live Ethereum Classic network data — block production, transactions, and node distribution.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
