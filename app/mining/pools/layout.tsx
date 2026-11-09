import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Pools',
  description:
    'Compare Ethereum Classic mining pools by fee, payout scheme and share of recent blocks, with each pool\'s weekly share of blocks over the past year.',
}

export default function PoolsLayout({ children }: { children: React.ReactNode }) {
  return children
}
