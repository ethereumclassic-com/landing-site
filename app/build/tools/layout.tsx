import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Developer Tools',
  description: 'Development tools, SDKs, and libraries for building on Ethereum Classic.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
