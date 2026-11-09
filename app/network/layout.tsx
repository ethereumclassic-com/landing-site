import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Network Status | Ethereum Classic',
  description: 'Ethereum Classic network status: block height, block time, hashrate, mining pools and node distribution.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
