import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Core-Geth v1.12.2x Security Audit — Migrate to Fukuii',
  description:
    'Six unpatched CVEs in etclabscore/core-geth v1.12.x, a 21-month maintenance gap, and an active network attack on ETC mainnet bootnodes in March 2026. Full CVE analysis, postmortem evidence trail, and migration guide to Fukuii — the canonical ETC-native execution client.',
  keywords: [
    'Core-Geth v1.12 security', 'Core-Geth CVE', 'etclabscore core-geth vulnerability',
    'Ethereum Classic node security', 'ETC execution client', 'Fukuii ETC client',
    'CVE-2026-22862', 'CVE-2026-26313', 'CVE-2025-24883', 'CVE-2026-26315',
    'CVE-2026-26314', 'CVE-2026-22868', 'Ethereum Classic P2P security',
    'ECIES vulnerability', 'RLPx handshake crash', 'ETC node operator',
    'Core-Geth v1.13.0', 'ethereumclassic/core-geth', 'White B0x',
    'Chippr Robotics', 'Fukuii execution client', 'core-geth maintenance failure',
    'ETC client migration', 'Go 1.21 EOL', 'core-geth security audit',
  ],
  openGraph: {
    title: 'Core-Geth v1.12.2x Security Audit — Migrate to Fukuii',
    description:
      'Six unpatched CVEs, 21 months unmaintained, and an active network attack in March 2026. Complete audit and postmortem with full GitHub evidence trail.',
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
