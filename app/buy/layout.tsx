import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Buy ETC — Ethereum Classic',
    default: 'Buy Ethereum Classic (ETC)',
  },
  description:
    'Buy Ethereum Classic with credit card, bank transfer, P2P, or ATM. Compare exchanges and instant-buy options.',
}

export default function BuyLayout({ children }: { children: React.ReactNode }) {
  return children
}
