import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Infrastructure',
  description: 'Infrastructure tools and services powering the Ethereum Classic ecosystem.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
