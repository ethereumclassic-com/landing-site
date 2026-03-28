import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research Reports',
  description: 'In-depth research reports on Ethereum Classic ecosystem, technology, and market.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
