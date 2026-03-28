import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mining Pool — Ethereum Classic',
  description: 'Ethereum Classic mining pool information and statistics.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
