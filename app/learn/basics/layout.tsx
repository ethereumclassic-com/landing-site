import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Basics',
  description: 'The fundamentals of Ethereum Classic: what it is, how it works and why it matters.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
