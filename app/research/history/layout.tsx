import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Historical Data',
  description: 'Historical Ethereum Classic data — price, hashrate, difficulty, and transaction volume.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
