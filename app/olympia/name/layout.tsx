import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Olympia — The Name and Its Meaning',
  description:
    'The name Olympia carries ten years of Ethereum Classic history — an ode to the pre-genesis testnet, the Marvel upgrade lineage, Greek mythology, and the competitive return to active development.',
}

export default function NameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
