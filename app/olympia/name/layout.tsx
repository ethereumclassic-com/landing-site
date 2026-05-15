import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Why Olympia — The Name and Its Meaning',
  description:
    'From Olympic (the proving ground) to Olympia (the arena) — why the name carries ten years of Ethereum Classic history, the Marvel upgrade lineage, Greek mythology, and why the upgrade arrives exactly when the world has caught up to what the chain was built for.',
}

export default function NameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
