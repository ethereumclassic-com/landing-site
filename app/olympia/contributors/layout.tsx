import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contributors',
  description:
    'Three independent client teams building the Olympia upgrade for Ethereum Classic.',
}

export default function ContributorsLayout({ children }: { children: React.ReactNode }) {
  return children
}
