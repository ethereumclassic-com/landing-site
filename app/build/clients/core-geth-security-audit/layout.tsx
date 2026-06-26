import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core-Geth Security Audit — March 2026',
  description:
    'Security audit of Core-Geth (etclabscore/core-geth): six unpatched CVEs, a 21-month maintenance gap, and Go 1.21 EOL. All issues resolved in v1.13.0 at ethereumclassic/core-geth.',
}

export default function CoreGethSecurityAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
