import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Networks',
  description: 'Ethereum Classic networks — mainnet (chain 61), Mordor testnet (chain 63), and RPC endpoints.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
