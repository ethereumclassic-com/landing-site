import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started Building on ETC',
  description: 'Start building on Ethereum Classic. Deploy your first smart contract.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
