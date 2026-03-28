import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Learn — Ethereum Classic',
    default: 'Learn About Ethereum Classic',
  },
  description:
    'Educational guides on ETC basics, wallets, trading, DeFi, mining, staking, and security.',
}

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return children
}
