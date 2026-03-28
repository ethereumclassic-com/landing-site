import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Security',
  description: 'Protect your Ethereum Classic. Best practices for wallet security, scam avoidance, and safe storage.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
