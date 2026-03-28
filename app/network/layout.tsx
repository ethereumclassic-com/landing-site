import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Network Status — Ethereum Classic',
  description: 'Live Ethereum Classic network status — block height, hashrate, difficulty, and peer count.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
