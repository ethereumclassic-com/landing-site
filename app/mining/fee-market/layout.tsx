import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Fee Market Imperative — Ethereum Classic Mining',
  description:
    'ETC blocks are 99% empty. Without a fee market, PoW miners have no long-term financial incentive. Olympia funds the core development that fills blocks, creates fee revenue, and secures the network.',
  keywords: [
    'ETC fee market',
    'ETC block utilization',
    'Olympia miners',
    'PoW fee revenue',
    'ETC mining future',
    'Ethereum Classic protocol treasury',
    'ETC transactions per block',
    'mining security incentive',
    'ETC Olympia upgrade',
    'ETC block rewards',
  ],
}

export default function FeeMarketLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
