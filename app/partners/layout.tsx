import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Partnerships | Ethereum Classic',
  description: 'How exchanges, custodians, wallets, miners, infrastructure providers, builders and institutions propose a partnership with ethereumclassic.com.',
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
