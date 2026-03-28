import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Pools',
  description:
    'Top Ethereum Classic mining pools ranked by hashrate, fees, and reliability.',
}

export default function PoolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
