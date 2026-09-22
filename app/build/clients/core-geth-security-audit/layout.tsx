import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Core-Geth v1.12.x Security Audit',
  description:
    'An audit of the Core-Geth v1.12.x release line: six CVEs and a GraphQL denial of service, a 21-month maintenance gap, and two CVEs exploited against ETC mainnet bootnodes in March 2026. Status by release, full CVE analysis, what the published archives contain, the postmortem evidence trail, and the upgrade to Core-Geth v1.13.0 or later, which fixes every finding.',
  keywords: [
    'Core-Geth v1.12 security', 'Core-Geth v1.12.x audit', 'Core-Geth v1.12.23', 'Core-Geth CVE', 'etclabscore core-geth vulnerability',
    'Ethereum Classic node security', 'ETC execution client', 'Core-Geth MESS default',
    'CVE-2026-22862', 'CVE-2026-26313', 'CVE-2025-24883', 'CVE-2026-26315',
    'CVE-2026-26314', 'CVE-2026-22868', 'Ethereum Classic P2P security',
    'ECIES vulnerability', 'RLPx handshake crash', 'ETC node operator',
    'Core-Geth v1.13.0', 'Core-Geth v1.13.0 release', 'Core-Geth upgrade guide', 'ethereumclassic/core-geth', 'White B0x',
    'Core-Geth glibc 2.34', 'ETC bootnodes and DNS discovery', 'core-geth maintenance failure',
    'GraphQL query depth limit', 'Core-Geth v1.13.1 review policy',
    'ETC client migration', 'Go 1.21 and Go 1.22 EOL', 'core-geth security audit',
  ],
  openGraph: {
    ...OG_BASE,
    title: 'Core-Geth v1.12.x Security Audit',
    description:
      'The Core-Geth v1.12.x line: six CVEs and a GraphQL denial of service, 21 months unmaintained, and two CVEs exploited against ETC bootnodes in March 2026. All fixed in Core-Geth v1.13.0 or later. Status by release, per-CVE analysis, and the postmortem with its full GitHub evidence trail.',
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
