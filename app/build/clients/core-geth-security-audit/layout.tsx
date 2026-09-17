import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Core-Geth v1.12.x Security Audit',
  description:
    'An audit of the Core-Geth v1.12.x release line: six CVEs, a 21-month maintenance gap, and an active network attack on ETC mainnet bootnodes in March 2026. Status by release, full CVE analysis, the postmortem evidence trail, and the upgrade to Core-Geth v1.13.0, which fixes every finding.',
  keywords: [
    'Core-Geth v1.12 security', 'Core-Geth v1.12.x audit', 'Core-Geth v1.12.23', 'Core-Geth CVE', 'etclabscore core-geth vulnerability',
    'Ethereum Classic node security', 'ETC execution client', 'Fukuii ETC client',
    'CVE-2026-22862', 'CVE-2026-26313', 'CVE-2025-24883', 'CVE-2026-26315',
    'CVE-2026-26314', 'CVE-2026-22868', 'Ethereum Classic P2P security',
    'ECIES vulnerability', 'RLPx handshake crash', 'ETC node operator',
    'Core-Geth v1.13.0', 'Core-Geth v1.13.0 release', 'Core-Geth upgrade guide', 'ethereumclassic/core-geth', 'White B0x',
    'Chippr Robotics', 'Fukuii execution client', 'core-geth maintenance failure',
    'ETC client migration', 'Go 1.21 and Go 1.22 EOL', 'core-geth security audit',
  ],
  openGraph: {
    ...OG_BASE,
    title: 'Core-Geth v1.12.x Security Audit',
    description:
      'The Core-Geth v1.12.x line: six CVEs, 21 months unmaintained, and an active network attack in March 2026, all fixed in Core-Geth v1.13.0. Status by release, and the audit and postmortem with full GitHub evidence trail.',
    type: 'article',
    url: 'https://ethereumclassic.com/build/clients/core-geth-security-audit',
  },
  alternates: {
    canonical: 'https://ethereumclassic.com/build/clients/core-geth-security-audit',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CoreGethSecurityAuditLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
