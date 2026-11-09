import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Profitability Calculator',
  description:
    'Estimate ETC mining revenue and profit from your hashrate, power draw and electricity rate, at the live network hashrate.',
}

export default function ProfitabilityLayout({ children }: { children: React.ReactNode }) {
  return children
}
