import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partners — Ethereum Classic',
  description: 'Ethereum Classic ecosystem partners, infrastructure providers, and collaborators.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
