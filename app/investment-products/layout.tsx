import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Institutional Investment Products — Ethereum Classic',
  description:
    'Grayscale Ethereum Classic Trust (ETCG) on OTCQX since 2018. Accessible via Charles Schwab, Fidelity, and Interactive Brokers. Regulated securities exposure to ETC.',
  openGraph: {
    title: 'Institutional Investment Products — Ethereum Classic',
    description:
      'ETCG on OTCQX: IRA-eligible regulated securities exposure to Ethereum Classic at major US brokerages.',
    type: 'website',
  },
}

export default function InvestmentProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
