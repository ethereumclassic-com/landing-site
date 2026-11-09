import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'US-Friendly Exchanges',
  description: 'Buy and trade Ethereum Classic on exchanges that serve US customers, with bank transfers, US tax forms and FinCEN registration.',
}

export default function USFriendlyLayout({ children }: { children: React.ReactNode }) {
  return children
}
