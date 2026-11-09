import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Networks',
  description: 'Ethereum Classic\'s networks: mainnet (chain 61), the Mordor testnet (chain 63) and their RPC endpoints.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
