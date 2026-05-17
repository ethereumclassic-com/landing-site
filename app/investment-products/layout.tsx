import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Institutional Investment Products — Ethereum Classic',
  description:
    'Grayscale Ethereum Classic Trust (ETCG) on OTCQX since May 2018. GBTC converted to ETF Jan 2024, ETHE Jul 2024 — ETCG has completed all prerequisite stages. Full Grayscale product lifecycle, fund facts, and brokerage access via Schwab, Fidelity, and Interactive Brokers.',
  openGraph: {
    title: 'Institutional Investment Products — Ethereum Classic',
    description:
      'ETCG on OTCQX since 2018. GBTC and ETHE established the trust-to-ETF conversion path. ETCG has completed Stage 1 and 2. IRA-eligible at major brokerages.',
    type: 'website',
  },
}

export default function InvestmentProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
