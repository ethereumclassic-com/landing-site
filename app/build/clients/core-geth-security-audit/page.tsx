'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { CheckIcon, ClipboardIcon } from 'lucide-react'
import { getActiveClients } from '../../data/build'
import { SectionDivider } from '@/app/components/ui/SectionDivider'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Core-Geth v1.12.2x Security Audit — Migrate to Fukuii',
  description:
    'Six unpatched CVEs in etclabscore/core-geth v1.12.x, a 21-month maintenance gap, and an active network attack on ETC mainnet bootnodes in March 2026.',
  datePublished: '2026-03-01',
  dateModified: '2026-06-26',
  author: { '@type': 'Organization', name: 'White B0x', url: 'https://whiteb0x.com' },
  publisher: { '@type': 'Organization', name: 'Ethereum Classic', url: 'https://ethereumclassic.com' },
  about: [
    { '@type': 'SoftwareApplication', name: 'Core-Geth', url: 'https://github.com/ethereumclassic/core-geth' },
    { '@type': 'SoftwareApplication', name: 'Fukuii', url: 'https://fukuii.com' },
  ],
}

interface CVE {
  id: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  summary: string
  component: string
  affected: string
  patched: string
  commit: string
  ghsa?: string
  status: 'Patched'
}

const cves: CVE[] = [
  {
    id: 'CVE-2025-24883',
    severity: 'High',
    summary: 'Missing IsOnCurve check in UnmarshalPubkey — off-curve secp256k1 points pass deserialization without error, causing invalid results in any downstream ECDSA or ECDH operation.',
    component: 'crypto/crypto.go — UnmarshalPubkey()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    commit: '8e40b7e41',
    ghsa: 'GHSA-q26p-9cq4-7fc2',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-22862',
    severity: 'High',
    summary: 'ECIES Decrypt() length check used +1 instead of +params.BlockSize (16). Crafted RLPx auth messages with undersized ECIES payloads cause an out-of-bounds read — remote crash during P2P handshake, no authentication required.',
    component: 'crypto/ecies/ecies.go — Decrypt()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    commit: 'dc73f2e4f',
    ghsa: 'GHSA-mr7q-c9w9-wh4h',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26315',
    severity: 'High',
    summary: 'ECIES GenerateShared() accepted unvalidated ephemeral public keys into ECDH. A MAC-oracle attack using repeated unauthenticated RLPx handshakes can leak bits of the node\'s static P2P private key.',
    component: 'crypto/ecies/ecies.go — GenerateShared()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    commit: '2d3528803',
    ghsa: 'GHSA-m6j8-rg6r-7mv8',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26314',
    severity: 'High',
    summary: 'IsOnCurve() did not verify coordinates are strictly less than the curve prime P. Out-of-field coordinates satisfy the naive curve equation via modular arithmetic and bypass the validity gate, leading to undefined scalar multiplication results.',
    component: 'crypto/secp256k1/curve.go — IsOnCurve(); C ext secp256k1_ext_scalar_mul()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    commit: '2d3528803',
    ghsa: 'GHSA-2gjw-fg97-vg3r',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26313',
    severity: 'High',
    summary: 'P2P message handler validated payload size (10 MiB cap) but not the number of RLP list items. A crafted header declaring millions of tiny items allocates per-item memory before validation — remote OOM crash via a single P2P message from any connected peer.',
    component: 'eth/protocols/eth/handler.go + msgvalidate.go; eth/protocols/snap/handler.go',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    commit: '5d0cb8b34',
    ghsa: 'GHSA-689v-6xwf-5jf3',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-22868',
    severity: 'Medium',
    summary: 'KZG blob proof validation DoS — invalid proofs trigger full expensive cryptographic verification without disconnecting the offending peer, allowing sustained CPU exhaustion from any connected peer.',
    component: 'core/txpool/validation.go — validateBlobSidecar(); eth/fetcher/tx_fetcher.go — Enqueue()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    commit: '1419c5310',
    status: 'Patched',
  },
]

const severityColors: Record<CVE['severity'], string> = {
  Critical: 'text-[var(--color-error)] bg-[var(--color-error-bg)]',
  High: 'text-orange-400 bg-orange-500/10',
  Medium: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
  Low: 'text-blue-400 bg-blue-500/10',
}

interface RiskItem {
  area: string
  risk: 'Critical' | 'High' | 'Medium'
  description: string
  mitigation: string
}

const riskAssessment: RiskItem[] = [
  {
    area: 'Remote crash via RLP (CVE-2026-26313)',
    risk: 'Critical',
    description: 'Any peer on the ETC network can crash a node with a single crafted P2P message — no authentication, no prior relationship required.',
    mitigation: 'Item count validation added in v1.13.0. Commit 5d0cb8b34.',
  },
  {
    area: 'P2P key oracle (CVE-2026-26315 + CVE-2026-26314)',
    risk: 'High',
    description: 'Repeated unauthenticated RLPx handshakes with crafted ephemeral keys can leak bits of the node\'s static private key across the 21-month exposure window.',
    mitigation: 'Patched in v1.13.0. Rotate the P2P node key (rm <datadir>/geth/nodekey) as a precaution on long-running nodes.',
  },
  {
    area: 'Remote crash via ECIES (CVE-2026-22862)',
    risk: 'High',
    description: 'Off-by-fifteen length check in ECIES Decrypt() allows undersized ciphertext to trigger an out-of-bounds read during the RLPx handshake.',
    mitigation: 'Patched in v1.13.0. Commit dc73f2e4f.',
  },
  {
    area: 'Go Runtime End-of-Life',
    risk: 'High',
    description: 'Upstream Core-Geth shipped on Go 1.21, which reached EOL in August 2024. Runtime vulnerabilities in net/http, crypto/tls, and encoding accumulated unpatched for 19 months.',
    mitigation: 'Core-Geth v1.13.0 builds on Go 1.26 (current stable as of March 2026).',
  },
  {
    area: 'Single unmaintained upstream',
    risk: 'High',
    description: 'No response to security disclosures sent February 2025. The etclabscore/core-geth organization received no substantive code commit after June 2024.',
    mitigation: 'Client transferred to the ethereumclassic org. Olympia multi-client architecture (Fukuii, Core-Geth, Besu) eliminates single-client dependency.',
  },
  {
    area: '21-month release gap',
    risk: 'Medium',
    description: 'The gap between v1.12.20 (June 2024) and v1.13.0 (March 2026) is the longest maintenance gap in ETC network history.',
    mitigation: 'Protocol-funded maintenance path established via ECIP-1112 treasury.',
  },
]

const riskColors: Record<RiskItem['risk'], string> = {
  Critical: 'text-[var(--color-error)] bg-[var(--color-error-bg)]',
  High: 'text-orange-400 bg-orange-500/10',
  Medium: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
}

const riskAccentColors: Record<RiskItem['risk'], string> = {
  Critical: 'bg-[var(--color-error)]',
  High: 'bg-orange-400',
  Medium: 'bg-[var(--color-warning)]',
}

interface MissedSignal {
  ref: string
  date: string
  url: string
  state: string
  title: string
  significance: ReactNode
}

interface StructuralFailure {
  title: string
  detail: ReactNode
}

const missedSignals: MissedSignal[] = [
  { ref: '#292', date: 'Jan 2021', url: 'https://github.com/etclabscore/core-geth/issues/292', state: 'OPEN — never implemented', title: 'geth version-check to surface CVE advisories', significance: 'Filed by one of the core maintainers five years before the attack: add CVE tracking to version-check. Had it been implemented, the 2025–2026 advisories would have surfaced in every node operator\'s log.' },
  { ref: '#649', date: 'Nov 2024', url: 'https://github.com/etclabscore/core-geth/pull/649', state: 'OPEN — never merged', title: 'Merge go-ethereum v1.14', significance: 'Community maintainer prepared a full v1.14 merge, noted it was "ready for merge." Remained open through the March 2026 emergency.' },
  { ref: '#662', date: 'Jan 2025', url: 'https://github.com/etclabscore/core-geth/pull/662', state: 'CLOSED without merge', title: 'Dependabot: bump golang.org/x/crypto 0.17→0.31', significance: 'Automated tooling upgraded the exact dependency affected by CVE-2026-22862 — later exploited in production. Auto-closed when a newer version superseded it. No human reviewed it.' },
  { ref: '#683', date: 'Jun 2025', url: 'https://github.com/etclabscore/core-geth/pull/683', state: 'CLOSED without merge', title: 'Support go 1.24 — includes CVE-2025-24883 fix', significance: 'Community member @tornadocontrib explicitly referenced CVE-2025-24883 with a link to the advisory. Available for 9 months before the attack. Closed when contributor deleted their fork. No review, no response.' },
  { ref: '#685', date: 'Aug 2025', url: 'https://github.com/etclabscore/core-geth/pull/685', state: 'OPEN — never merged', title: 'Automated: remove unresponsive bootnodes', significance: 'Bootnode health check flagged deployed ETC bootnodes as unresponsive — some already experiencing intermittent crash-loops from early exploit probing.' },
  { ref: '#692', date: 'Feb 2026', url: 'https://github.com/etclabscore/core-geth/issues/692', state: 'CLOSED — no response for 42 days', title: 'Security vulnerabilities in go-ethereum affecting core-geth', significance: 'Ledger security researcher publicly disclosed CVE-2025-24883, CVE-2026-22862, and CVE-2026-22868 on 4 February 2026. First maintainer response: 18 March 2026 — the day the attack began.' },
  { ref: '#694', date: '18 Mar 2026', url: 'https://github.com/etclabscore/core-geth/pull/694', state: 'MERGED — 5 hours after opening', title: 'Release v1.12.21 ("Aegis") — emergency ECIES patch', significance: <>Forced by active attack on bootnodes ams3 and sfo3. First code activity from <a href="https://github.com/diega" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">@diega</a> in 14 months. Three additional CVEs remained unaddressed.</> },
  { ref: '#696', date: '28 Mar 2026', url: 'https://github.com/etclabscore/core-geth/pull/696', state: 'MERGED — under 2 minutes after opening', title: 'Release v1.12.22 ("Hermes") — remaining CVE backports', significance: 'Merged in under 2 minutes with no pre-merge review. Drawn from White B0x work publicly available since 20–21 March without citation. Go 1.21 EOL toolchain left unchanged.' },
  { ref: '#697', date: 'Apr 2026', url: 'https://github.com/etclabscore/core-geth/issues/697', state: 'OPEN — unresolved', title: 'Incorrect RPC eth_syncing response with v1.12.22', significance: 'Regression introduced by the rushed v1.12.22: highestBlock reported incorrectly. Services relying on eth_syncing for sync status receive wrong data.' },
]

const structuralFailures: StructuralFailure[] = [
  { title: 'No CVE Tracking Infrastructure', detail: 'Issue #292 (2021) requested built-in CVE tracking in version-check. Never implemented. Operators had no automated signal that their client was exposed — they had to independently monitor the go-ethereum advisory database.' },
  { title: 'Automated Security PRs Unreviewed', detail: 'Dependabot filed security bump PRs for golang.org/x/crypto and golang.org/x/net across January–April 2025, all unreviewed or auto-closed. PR #683 explicitly cited CVE-2025-24883 by name and was ignored for 9 months.' },
  { title: 'Single Point of Human Authority', detail: <><a href="https://github.com/diega" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">@diega</a> was the only person with merge access willing to cut releases. One community maintainer had a ready-to-merge PR (#649) but no merge rights. No governance path for security-critical changes without a non-reviewing approver.</> },
  { title: 'Go Toolchain Lock-in', detail: 'The fjl/memsize dependency was incompatible with Go 1.22+, locking the client to Go 1.21 (EOL August 2024). Three community PRs attempted partial fixes. The lock-in was known; it was not prioritized until it became a crisis.' },
  { title: 'Emergency Releases without Pre-release Testing', detail: 'v1.12.21 was cut 5 hours after the PR opened; v1.12.22 was merged in under 2 minutes. The rushed process introduced the eth_syncing regression (issue #697, still open).' },
]

export default function CoreGethSecurityAuditPage() {
  const [copied, setCopied] = useState(false)
  const fukuii = getActiveClients().find((c) => c.id === 'fukuii')!

  const copyToClipboard = (text: string) => {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <>
      <Script
        id="core-geth-security-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-16 pb-12 md:px-10 md:pt-20 lg:px-12">
          <div className="relative mx-auto max-w-4xl">
            <div className="mb-4 flex items-center gap-3">
              <Link
                href="/build/clients"
                className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
              >
                ← Node Clients
              </Link>
              <span className="text-sm text-[var(--color-text-muted)]">/</span>
              <Link
                href="/build/clients/core-geth"
                className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
              >
                Core-Geth
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <span className="rounded-sm bg-[var(--color-error)]/15 px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--color-error)]">
                SECURITY AUDIT
              </span>
              <span className="font-mono text-sm text-[var(--color-text-muted)]">March 2026</span>
            </div>

            <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-4xl">
              Core-Geth v1.12.2x Security Audit
            </h1>

            <p className="mt-3 text-[var(--color-text-secondary)]">
              Six unpatched CVEs and a 21-month maintenance gap discovered during Olympia upgrade
              preparation. The upstream client at{' '}
              <a
                href="https://github.com/etclabscore/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-error)] transition hover:text-[var(--color-error)]/80"
              >
                etclabscore/core-geth
              </a>{' '}
              received no security maintenance from June 2024 onward. All issues are patched in{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
              >
                ethereumclassic/core-geth
              </a>{' '}
              v1.13.0 by{' '}
              <a
                href="https://whiteb0x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
              >
                White B0x
              </a>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/ethereumclassic/core-geth/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
              >
                Get Core-Geth v1.13.0
              </a>
              <a
                href="https://github.com/white-b0x/core-geth/blob/main/docs/audits/2026-03-security-audit.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
              >
                Raw Audit Report (GitHub)
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: '6 CVEs', color: 'text-[var(--color-error)]' },
                { label: '5 HIGH severity', color: 'text-orange-400' },
                { label: '21-month gap', color: 'text-[var(--color-warning)]' },
                { label: 'Go 1.21 EOL', color: 'text-[var(--color-text-muted)]' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 font-mono text-xs ${chip.color}`}
                >
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Discovery Context */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Background</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">How This Was Found</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              During Olympia upgrade preparation, the ETC core team needed Core-Geth as a
              reference client alongside Besu and Nethermind — both carrying ETC overlays for
              cross-client testing but not recommended for production. Core-Geth was the only
              existing ETC client at the time. That work confirmed what the commit history showed:
              the{' '}
              <a
                href="https://github.com/etclabscore/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                etclabscore/core-geth
              </a>{' '}
              repository had not shipped a code release since v1.12.20 on June 10, 2024 — a
              21-month gap. Multiple CVEs had accumulated unpatched, and the client was still
              shipping binaries built on Go 1.21, a runtime that reached end-of-life in
              August 2024.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Security disclosures sent to the upstream maintainer in February 2025 received no
              response. The last substantive upstream commit was the v1.12.20 release itself;
              the final commit of any kind was a GitHub Actions CI update on January 23, 2025.
              With Olympia requiring a reliable, patched client for network continuity, the ETC
              core development team brought Core-Geth forward under the{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                ethereumclassic
              </a>{' '}
              organization, applied all known patches, upgraded the Go toolchain to 1.26, and
              released Core-Geth v1.13.0.
            </p>
          </div>
        </div>

        {/* CVE Gap Analysis — 3-column grid */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">CVE Analysis</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">CVE Gap Analysis</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
              The following vulnerabilities were present in{' '}
              <a
                href="https://github.com/etclabscore/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                etclabscore/core-geth
              </a>{' '}
              at v1.12.20. All are patched in{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                ethereumclassic/core-geth
              </a>{' '}
              v1.13.0.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cves.map((cve) => (
                <div
                  key={cve.id}
                  className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {cve.ghsa ? (
                      <a
                        href={`https://github.com/advisories/${cve.ghsa}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-[var(--text-primary)] hover:text-[var(--color-primary)]"
                      >
                        {cve.id}
                      </a>
                    ) : (
                      <code className="text-sm text-[var(--text-primary)]">{cve.id}</code>
                    )}
                    <span className={`rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium ${severityColors[cve.severity]}`}>
                      {cve.severity.toUpperCase()}
                    </span>
                    <span className="rounded-sm bg-[var(--color-primary)]/10 px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--color-primary)]">
                      PATCHED
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{cve.summary}</p>
                  <div className="mt-3 space-y-1 text-xs text-[var(--color-text-muted)]">
                    <p>Component: <span className="text-[var(--color-text-secondary)]">{cve.component}</span></p>
                    <p>Affected: <span className="text-[var(--color-text-secondary)]">{cve.affected}</span></p>
                    <p>Fix: <code className="text-[var(--text-primary)]">{cve.commit}</code></p>
                  </div>
                </div>
              ))}

              {/* GraphQL — no CVE ID */}
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <code className="text-sm text-[var(--text-primary)]">GraphQL Depth DoS</code>
                  <span className={`rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium ${severityColors.Medium}`}>
                    MEDIUM
                  </span>
                  <span className="rounded-sm bg-[var(--color-primary)]/10 px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--color-primary)]">
                    PATCHED
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  No query depth or complexity limit on the GraphQL endpoint (<code>--graphql</code> flag).
                  Deeply nested queries exhaust CPU and memory. Compounded by{' '}
                  <a
                    href="https://github.com/advisories/GHSA-mh3m-8c74-74xh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    GHSA-mh3m-8c74-74xh
                  </a>{' '}
                  — a bug in graphql-go v1.3.0 where MaxDepth was silently non-functional.
                </p>
                <div className="mt-3 space-y-1 text-xs text-[var(--color-text-muted)]">
                  <p>Component: <span className="text-[var(--color-text-secondary)]">graphql/service.go; graphql-go v1.3.0 → v1.9.0</span></p>
                  <p>Fix: <code className="text-[var(--text-primary)]">6c2d383fa</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Go Runtime EOL */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Go Toolchain</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Go Runtime End-of-Life</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The upstream Core-Geth v1.12.20 release was built with Go 1.21, which reached
              end-of-life in August 2024. Go&apos;s release policy provides security patches
              only for the two most recent major versions. As of March 2026, Go 1.21 had been
              unsupported for 19 months, leaving the runtime&apos;s standard library (net/http,
              crypto/tls, encoding) unpatched across that window.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Core-Geth v1.13.0 at{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                ethereumclassic/core-geth
              </a>{' '}
              builds on Go 1.26 (current stable). The upgrade proceeded in two steps:
              Go 1.21 → 1.24 (removing the incompatible <code>fjl/memsize</code> dependency and
              fixing <code>go vet</code> format errors), then Go 1.24 → 1.26 (updating all{' '}
              <code>golang.org/x/</code> dependencies for compatibility). The <code>blst</code>{' '}
              cryptography library was simultaneously upgraded from v0.3.11 to v0.3.16.
              Commit: <code>8385cf8e8</code>.
            </p>
          </div>
        </div>

        {/* Release Timeline */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Timeline</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Release Timeline</h2>
            <div className="mt-6 space-y-3">
              {[
                { date: 'June 10, 2024', event: 'Core-Geth v1.12.20 released at etclabscore/core-geth', note: 'Final upstream release — no code releases after this date' },
                { date: 'August 2024', event: 'Go 1.21 reaches end-of-life', note: 'Build toolchain unsupported, runtime CVEs accumulate unpatched' },
                { date: 'January 23, 2025', event: 'Last upstream commit — GitHub Actions CI update', note: 'No code changes; repository effectively frozen' },
                { date: 'February 2025', event: 'Security disclosures sent to upstream maintainer', note: 'No response received' },
                { date: 'Feb – Mar 2026', event: 'All six CVEs patched at ethereumclassic/core-geth', note: 'CVE-2025-24883, CVE-2026-22862, CVE-2026-26315, CVE-2026-26314, CVE-2026-22868, CVE-2026-26313' },
                { date: '4 March 2026', event: 'Go toolchain upgraded 1.21 → 1.26', note: 'Commit 8385cf8e8; blst v0.3.11 → v0.3.16' },
                { date: 'March 2026', event: 'Core-Geth v1.13.0 released at ethereumclassic/core-geth', note: 'All CVEs patched; Go 1.26; Olympia-ready' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-36 shrink-0 pt-0.5 font-mono text-xs text-[var(--color-text-muted)]">
                    {item.date}
                  </div>
                  <div className="flex-1 border-l border-[var(--border)] pl-4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{item.event}</p>
                    <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Risk Assessment — 3-column grid */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Risk Assessment</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Risk Assessment</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {riskAssessment.map((item, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <div className={`mb-3 h-1 w-10 rounded-full ${riskAccentColors[item.risk]}`} />
                  <span className={`rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium ${riskColors[item.risk]}`}>
                    {item.risk.toUpperCase()}
                  </span>
                  <p className="mt-2 text-sm font-semibold text-[var(--text-primary)]">{item.area}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.description}</p>
                  <p className="mt-3 text-sm">
                    <strong className="text-[var(--color-primary)]">Mitigation:</strong>{' '}
                    <span className="text-[var(--color-text-secondary)]">{item.mitigation}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* March 2026 Attack */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">March 2026</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">The March 2026 Attack</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              On 18 March 2026, CVE-2026-22862 was actively exploited against the ETC mainnet
              classic bootnodes <strong>ams3</strong> and <strong>sfo3</strong>. Malicious P2P
              traffic sent crafted <code>auth</code> messages with undersized ECIES payloads,
              crashing each node on inbound handshake attempts. Because the crash occurred in{' '}
              <code>listenLoop</code>, the node process exited and restarted under the service
              manager — only to crash again on the next malicious connection, producing an
              automated crash-loop. Bootnode <strong>sfo3</strong> accumulated{' '}
              <strong>805+ restart cycles</strong> on v1.12.20 before the patch was deployed.
            </p>
            <div className="mt-4 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4 font-mono text-xs text-[var(--color-text-secondary)]">
              <pre>{`panic: runtime error: makeslice: len out of range

goroutine 42797 [running]:
github.com/ethereum/go-ethereum/crypto/ecies.symDecrypt(...)
        crypto/ecies/ecies.go:224
github.com/ethereum/go-ethereum/crypto/ecies.(*PrivateKey).Decrypt(...)
        crypto/ecies/ecies.go:322
github.com/ethereum/go-ethereum/p2p/rlpx.(*handshakeState).readMsg(...)
        p2p/rlpx/rlpx.go:612
github.com/ethereum/go-ethereum/p2p/rlpx.(*handshakeState).runRecipient(...)
        p2p/rlpx/rlpx.go:415
github.com/ethereum/go-ethereum/p2p/rlpx.(*Conn).Handshake(...)
        p2p/rlpx/rlpx.go:308
github.com/ethereum/go-ethereum/p2p.(*Server).listenLoop.func2()
        p2p/server.go:921`}</pre>
            </div>
            <p className="mt-3 text-sm text-[var(--color-text-muted)]">
              Stack trace from{' '}
              <a href="https://github.com/etclabscore/core-geth/issues/692" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">
                issue #692
              </a>
              . PR{' '}
              <a href="https://github.com/etclabscore/core-geth/pull/694" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">
                #694
              </a>{' '}
              (v1.12.21) was opened and merged in 5 hours — the first code activity from the upstream
              maintainer in 14 months.
            </p>
          </div>
        </div>

        <SectionDivider />

        {/* Postmortem Evidence Trail — 2-column grid */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Evidence Trail</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Postmortem: Public Evidence Trail</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
              The following issues and PRs at{' '}
              <a href="https://github.com/etclabscore/core-geth" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                etclabscore/core-geth
              </a>{' '}
              form a linkable evidence trail. Each was a missed opportunity to prevent the March 2026 attack.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {missedSignals.map((s) => (
                <div key={s.ref} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <a href={s.url} target="_blank" rel="noopener noreferrer"
                        className="font-mono text-sm font-semibold text-[var(--color-primary)] hover:opacity-80">
                        {s.ref}
                      </a>
                      <span className="font-mono text-xs text-[var(--color-text-muted)]">{s.date}</span>
                    </div>
                    <span className={`rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium ${
                      s.state.startsWith('OPEN') || s.state.includes('never')
                        ? 'bg-[var(--color-error)]/10 text-[var(--color-error)]'
                        : s.state.startsWith('MERGED')
                        ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                        : 'bg-[var(--color-warning)]/10 text-[var(--color-warning)]'
                    }`}>{s.state}</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">{s.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{s.significance}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Structural Failures — 3-column grid */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Root Cause</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Structural Failures</h2>
            <p className="mt-4 max-w-3xl text-[var(--color-text-secondary)]">
              Five independent structural failures — any one of which, if addressed, would have been sufficient to prevent the March 2026 attack.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {structuralFailures.map((f, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] font-mono text-sm font-medium text-[var(--color-text-muted)]">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-[var(--text-primary)]">{f.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{f.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Why Fukuii — wide with embedded Fukuii card */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Recommended Client</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Why Fukuii Is the ETC Client</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
              The Core-Geth security failure was not a one-off — it was the predictable outcome of a
              Go-based client built outside the Ethereum Classic ecosystem, maintained under a corporate
              structure that has since wound down.{' '}
              <a href="https://fukuii.com" target="_blank" rel="noopener noreferrer"
                className="font-semibold text-[var(--color-primary)]">
                Fukuii
              </a>{' '}
              is the ETC-native execution client built from the ground up for Ethereum Classic. It does
              not share the Go toolchain, the go-ethereum P2P stack, or any of the code paths that were
              vulnerable in Core-Geth. Protocol-funded maintenance via ECIP-1112 provides a path not
              dependent on any single corporate entity.
            </p>

            {/* Fukuii large card */}
            <div className="mt-6 rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                {/* Left: client info */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-xl font-bold text-[var(--text-primary)]">{fukuii.name}</h3>
                    <span className="rounded-full bg-[var(--color-primary)]/15 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-primary)]">
                      Recommended
                    </span>
                    <span className="rounded-full border border-[var(--border)] bg-[var(--panel)] px-2.5 py-0.5 text-xs text-[var(--color-text-muted)]">
                      {fukuii.language}
                    </span>
                  </div>
                  <p className="mt-2 leading-relaxed text-[var(--color-text-secondary)]">{fukuii.description}</p>
                  <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                    {fukuii.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-primary)]" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {fukuii.platforms.map((p) => (
                      <span key={p} className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-[var(--panel)] px-3 py-1 text-xs text-[var(--color-text-secondary)]">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Quick Start */}
                <div className="w-full shrink-0 lg:w-96">
                  <div className="rounded-xl border border-[var(--border)] bg-[var(--bg)] p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">Quick Start</p>
                    <div className="flex items-center justify-between rounded-lg bg-[var(--panel)] p-2">
                      <code className="truncate text-sm text-[var(--color-primary)]">{fukuii.installCommand}</code>
                      <button
                        onClick={() => copyToClipboard(fukuii.installCommand ?? '')}
                        className="ml-2 shrink-0 rounded p-1 text-[var(--color-text-muted)] transition hover:text-[var(--text-primary)]"
                        aria-label="Copy install command"
                      >
                        {copied ? (
                          <CheckIcon className="h-4 w-4 text-[var(--color-primary)]" />
                        ) : (
                          <ClipboardIcon className="h-4 w-4" />
                        )}
                      </button>
                    </div>
                    {fukuii.configNotes && (
                      <p className="mt-2 text-xs text-[var(--color-text-muted)]">{fukuii.configNotes}</p>
                    )}
                    <div className="mt-4 flex flex-col gap-2">
                      <a
                        href={fukuii.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
                      >
                        Documentation
                      </a>
                      <a
                        href={fukuii.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
                      >
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prior Maintainers */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Attribution</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Prior Maintainers</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Core-Geth is a fork of{' '}
              <a href="https://github.com/multi-geth/multi-geth" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                multi-geth
              </a>
              , originally created and maintained by{' '}
              <a href="https://github.com/sorpaas" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                <strong>Wei Tang</strong> (@sorpaas)
              </a>
              . Multi-geth was the first multi-network go-ethereum fork with first-class ETC
              support, and its chain configuration architecture is the direct ancestor of
              core-geth.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The core-geth fork was then developed by ETC Labs until they left the ETC
              ecosystem in 2022. ETC Cooperative-paid staff maintained the client through the
              Spiral hard fork up until announcing maintenance mode for the client in December
              2024:
            </p>
            <ul className="mt-4 space-y-2">
              <li className="text-[var(--color-text-secondary)]">
                <a href="https://github.com/meowsbits" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  <strong>Isaac Ardis</strong> (@meowsbits)
                </a>{' '}
                — primary architect and long-term maintainer
              </li>
              <li className="text-[var(--color-text-secondary)]">
                <a href="https://github.com/diega" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  <strong>Diego López León</strong> (@diega)
                </a>{' '}
                — release manager; cut the v1.12.20 release
              </li>
              <li className="text-[var(--color-text-secondary)]">
                <a href="https://github.com/ziogaschr" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  <strong>Chris Ziogas</strong> (@ziogaschr)
                </a>{' '}
                — contributor and maintainer
              </li>
            </ul>
          </div>
        </div>

        {/* Network Migration Path */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Migration</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Network Migration Path</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Core-Geth v1.13.x is the final stable release series of this client. The ETC
              network is migrating to{' '}
              <a href="https://fukuii.com" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                Fukuii
              </a>{' '}
              (
              <a href="https://github.com/chippr-robotics/fukuii" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                github
              </a>
              ) as the primary ETC-native execution client. Core-Geth will continue to be
              maintained through the Olympia upgrade cycle to ensure a stable transition, but
              operators should plan their migration to Fukuii beyond that point.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              <strong className="text-[var(--text-primary)]">
                If you are running any v1.12.x release, upgrade to v1.13.0 immediately.
              </strong>{' '}
              The v1.12 series is affected by all six vulnerabilities documented in this audit
              and is not supported for the Olympia network upgrade.
            </p>
          </div>
        </div>

        <SectionDivider />

        {/* Recommendations */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-4xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Recommendations</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Recommendations</h2>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-[var(--color-error)]/20 bg-[var(--color-error)]/5 p-5">
                <span className="inline-flex rounded-full bg-[var(--color-error)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-error)]">
                  Node Operators (v1.12.x)
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Update to Core-Geth v1.13.0 from{' '}
                  <a href="https://github.com/ethereumclassic/core-geth" target="_blank" rel="noopener noreferrer"
                    className="text-[var(--color-primary)]">
                    github.com/ethereumclassic/core-geth
                  </a>
                  . Nodes running etclabscore/core-geth v1.12.20 or earlier are exposed to remote
                  crash (CVE-2026-26313, CVE-2026-22862) and potential key-oracle attacks
                  (CVE-2026-26315), and will not be compatible with the Olympia hard fork.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  Long-running nodes
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Rotate your P2P node key as a precaution against CVE-2026-26315 exposure:{' '}
                  <code className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--text-primary)]">
                    rm &lt;datadir&gt;/geth/nodekey
                  </code>
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  Infrastructure providers &amp; exchanges
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Treat the upgrade to v1.13.0 as a security-critical patch, not a routine version
                  bump. Begin planning migration to Fukuii for post-Olympia operation.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  Multi-client operation
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Run multiple client implementations (Fukuii, Core-Geth, Besu) for
                  cross-validation and redundancy during the transition.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  GraphQL endpoints
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Verify v1.13.0 is deployed before re-opening the{' '}
                  <code className="rounded bg-[var(--bg)] px-1.5 py-0.5 text-xs text-[var(--text-primary)]">--graphql</code>{' '}
                  port on public-facing nodes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Methodology</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Methodology</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              These findings emerged from Olympia upgrade preparation. Core-Geth was required as
              a reference client alongside Besu and Nethermind, both of which carry ETC overlays
              for cross-client testing and are not recommended for production use. Fukuii is the
              only ETC-native production client and is built on Scala 3 / Pekko — it does not
              share the Go toolchain. The etclabscore/core-geth codebase at v1.12.20 was assessed
              against the go-ethereum GitHub Security Advisory database and the Go vulnerability
              database (vuln.go.dev). Each advisory was verified for applicability to core-geth&apos;s
              shared codebase and manually ported or cherry-picked where upstream structural
              differences prevented a clean merge. All patches were validated through Mordor
              testnet deployment and automated test suites across the Olympia reference client set
              (Core-Geth, Besu, Nethermind).
            </p>
          </div>
        </div>

        {/* References */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">References</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">References</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://github.com/ethereumclassic/core-geth" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  ethereumclassic/core-geth — patched v1.13.0
                </a>
              </li>
              <li>
                <a href="https://github.com/etclabscore/core-geth" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-error)] hover:opacity-80">
                  etclabscore/core-geth — upstream (unmaintained since June 2024)
                </a>
              </li>
              <li>
                <a href="https://github.com/white-b0x/core-geth/blob/main/docs/audits/2026-03-security-audit.md" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Full audit report — docs/audits/2026-03-security-audit.md
                </a>
              </li>
              <li>
                <a href="https://github.com/ethereum/go-ethereum/security/advisories" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  go-ethereum GitHub Security Advisories
                </a>
              </li>
              <li>
                <a href="https://vuln.go.dev" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Go Vulnerability Database — vuln.go.dev
                </a>
              </li>
              <li>
                <Link href="/build/clients" className="text-[var(--color-primary)] hover:opacity-80">
                  ETC Node Clients
                </Link>
              </li>
              <li>
                <Link href="/olympia/clients" className="text-[var(--color-primary)] hover:opacity-80">
                  Olympia Client Implementations
                </Link>
              </li>
              <li>
                <a href="https://ecips.ethereumclassic.org/ECIPs/ecip-1112" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  ECIP-1112: Treasury Funding for Protocol Maintenance
                </a>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  )
}
