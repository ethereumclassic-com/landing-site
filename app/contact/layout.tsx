import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — Ethereum Classic',
  description: 'Contact the Ethereum Classic team for partnerships, listings, support, and inquiries.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
