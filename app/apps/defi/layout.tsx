import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeFi Apps',
  description: 'Decentralized finance apps on Ethereum Classic. Swap, lend, and earn yield.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
