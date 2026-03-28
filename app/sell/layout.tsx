import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Sell ETC — Ethereum Classic',
    default: 'Sell Ethereum Classic (ETC)',
  },
  description:
    'Sell ETC on trusted exchanges. Convert Ethereum Classic to fiat or other cryptocurrencies.',
}

export default function SellLayout({ children }: { children: React.ReactNode }) {
  return children
}
