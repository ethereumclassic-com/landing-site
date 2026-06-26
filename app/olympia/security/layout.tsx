import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core-Geth Security Gap Analysis — Olympia',
  description:
    'Six unpatched CVEs and a 21-month maintenance gap in etclabscore/core-geth discovered during Olympia cross-client testing. All issues resolved in v1.13.0 at ethereumclassic/core-geth.',
}

export default function SecurityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
