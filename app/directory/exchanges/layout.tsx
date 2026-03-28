import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Exchange Directory',
  description: 'Complete directory of exchanges that list Ethereum Classic for trading.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
