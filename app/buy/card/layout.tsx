import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Buy with Card',
  description:
    'Buy Ethereum Classic with Visa, Mastercard, or debit card.',
}

export default function CardLayout({ children }: { children: React.ReactNode }) {
  return children
}
