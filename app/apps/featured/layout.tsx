import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Featured Apps',
  description: 'Top featured applications and dApps built on Ethereum Classic.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
