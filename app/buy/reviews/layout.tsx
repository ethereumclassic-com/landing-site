import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exchange Reviews',
  description:
    'Expert reviews of exchanges for buying Ethereum Classic.',
}

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return children
}
