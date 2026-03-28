import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Documentation',
  description: 'Ethereum Classic developer documentation, guides, and technical references.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
