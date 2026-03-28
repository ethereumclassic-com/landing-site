import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Submit Your App',
  description: 'Submit your dApp or project for listing on the Ethereum Classic app directory.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
