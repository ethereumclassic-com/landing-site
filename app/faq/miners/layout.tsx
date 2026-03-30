import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Miner FAQ',
  description:
    'Ethereum Classic mining questions answered — hardware, software, pools, ETCHash algorithm, profitability, and block rewards.',
}

export default function MinersLayout({ children }: { children: React.ReactNode }) {
  return children
}
