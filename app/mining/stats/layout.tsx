import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Statistics',
  description:
    'Live Ethereum Classic mining statistics: hashrate, difficulty, block time, daily emission and pool share.',
}

export default function StatsLayout({ children }: { children: React.ReactNode }) {
  return children
}
