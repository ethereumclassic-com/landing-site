import type { Metadata } from 'next'
import { OG_BASE } from '@/lib/seo'
import { EXPOSED_LINE, RECOMMENDED_LINE } from '@/lib/core-geth-record'

// The head coregeth.com/security carries, so a search result or a shared link reads the same on both sites.
const TITLE = `Core-Geth ${EXPOSED_LINE} Security Audits and the ${RECOMMENDED_LINE} Upgrade`
const DESCRIPTION = `The 2026 security audits of Core-Geth ${EXPOSED_LINE}: the CVEs found, what was used against Core-Geth ${EXPOSED_LINE} bootnodes, and what upgrading to ${RECOMMENDED_LINE} fixes.`

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    'Core-Geth v1.12 security audit', 'Core-Geth v1.13 upgrade', 'Core-Geth CVE', 'Core-Geth release record',
    'Ethereum Classic node security', 'ETC execution client', 'etclabscore/core-geth', 'ethereumclassic/core-geth',
    'CVE-2026-22862', 'CVE-2026-26315', 'CVE-2025-24883', 'CVE-2026-26314', 'CVE-2026-26313', 'CVE-2026-22868',
    'GraphQL query depth limit', 'Core-Geth node key rotation', 'Go 1.21 and Go 1.22 end of life', 'ETC node operator',
  ],
  openGraph: {
    ...OG_BASE,
    title: TITLE,
    description: DESCRIPTION,
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
