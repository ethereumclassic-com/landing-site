import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core-Geth Security Gap Analysis — Olympia',
  description:
    'Security gap analysis of the Core-Geth execution client covering unpatched CVEs, Go runtime EOL, and the 21-month maintenance gap from February 2024 to April 2026.',
}

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
