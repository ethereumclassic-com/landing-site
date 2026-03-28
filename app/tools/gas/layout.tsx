import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Gas Tracker',
  description: 'Live Ethereum Classic gas prices. Track current gas costs for ETC transactions.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
