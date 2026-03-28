import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Profitability',
  description:
    'Calculate your ETC mining profitability. Revenue estimator with live difficulty.',
}

export default function ProfitabilityLayout({ children }: { children: React.ReactNode }) {
  return children
}
