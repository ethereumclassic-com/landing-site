import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Calculator',
  description: 'Ethereum Classic investment calculator. Model profits, losses, and portfolio growth.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
