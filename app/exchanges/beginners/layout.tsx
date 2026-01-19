import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Exchanges for Beginners | Ethereum Classic',
  description: 'New to crypto? Start here. Easy-to-use exchanges where you can buy your first Ethereum Classic with a credit card or bank transfer.',
}

export default function BeginnersLayout({ children }: { children: React.ReactNode }) {
  return children
}
