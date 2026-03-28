import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Statistics',
  description:
    'Live Ethereum Classic mining stats — hashrate, difficulty, block time.',
}

export default function StatsLayout({ children }: { children: React.ReactNode }) {
  return children
}
