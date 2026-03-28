import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Wallet Reviews',
  description:
    'Expert reviews of the best wallets for storing Ethereum Classic.',
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
