import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Payment Apps',
  description: 'Payment solutions and merchant tools for accepting Ethereum Classic.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
