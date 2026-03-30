import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor FAQ',
  description:
    'Ethereum Classic investment questions answered — monetary policy, supply cap, where to trade, and what makes ETC unique.',
}

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
