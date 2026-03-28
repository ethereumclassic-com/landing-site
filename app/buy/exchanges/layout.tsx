import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy on Exchanges',
  description:
    'Buy Ethereum Classic on the top cryptocurrency exchanges.',
}

export default function ExchangesLayout({ children }: { children: React.ReactNode }) {
  return children
}
