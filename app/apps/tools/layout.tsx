import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Utility Apps',
  description: 'Utility and developer tools built on Ethereum Classic.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
