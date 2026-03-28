import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Ethereum Classic community events, meetups, and conferences.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
