import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Store — Ethereum Classic',
  description: 'Ethereum Classic merchandise and branded items.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
