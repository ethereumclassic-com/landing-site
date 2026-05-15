import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Olympia — The Name and Its Meaning',
  description:
    'The name Olympia carries ten years of Ethereum Classic history — from Olympic (the proving ground) to Olympia (the arena), through the Marvel upgrade lineage, Greek mythology, and the competitive return to active development.',
}

export default function NameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
