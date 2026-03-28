import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Glossary',
  description: 'Ethereum Classic glossary — definitions of blockchain, mining, DeFi, and ETC-specific terms.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
