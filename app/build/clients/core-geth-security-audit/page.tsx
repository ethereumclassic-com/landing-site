'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import Script from 'next/script'
import { CheckIcon } from 'lucide-react'
import { getActiveClients } from '../../data/build'
import { SectionDivider } from '@/app/components/ui/SectionDivider'
import {
  CORE_GETH_FUKUII_MIGRATION_URL,
  CORE_GETH_MIGRATION_URL,
  CORE_GETH_RELEASE_URL,
  CORE_GETH_SECURITY_POLICY_URL,
  CORE_GETH_VERSION,
} from '@/lib/core-geth'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Core-Geth v1.12.x Security Audit',
  description:
    'An audit of the Core-Geth v1.12.x release line, v1.12.20 through v1.12.23: six CVEs and a GraphQL denial of service, a 21-month maintenance gap, and an active attack on ETC mainnet bootnodes in March 2026. Every finding is fixed in Core-Geth v1.13.0.',
  datePublished: '2026-03-01',
  dateModified: '2026-09-17',
  author: { '@type': 'Organization', name: 'White B0x', url: 'https://whiteb0x.com' },
  publisher: { '@type': 'Organization', name: 'Ethereum Classic', url: 'https://ethereumclassic.com' },
  about: [
    { '@type': 'SoftwareApplication', name: 'Core-Geth', url: 'https://github.com/ethereumclassic/core-geth' },
    { '@type': 'SoftwareApplication', name: 'Fukuii', url: 'https://fukuii.org' },
  ],
}

interface CVE {
  id: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  summary: string
  component: string
  affected: string
  /** What the v1.12.x releases did about it, per the audit's vulnerability summary. */
  v112x: string
  patched: string
  cvss: string
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
    v112x: 'Backported in v1.12.22',
    patched: 'ethereumclassic/core-geth v1.13.0',
    cvss: '7.4 High',
    commit: '681c915f0',
    ghsa: 'GHSA-q26p-9cq4-7fc2',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-22862',
    severity: 'High',
    summary: 'ECIES Decrypt() length check used +1 instead of +params.BlockSize (16). Crafted RLPx auth messages with undersized ECIES payloads cause an out-of-bounds read — remote crash during P2P handshake, no authentication required.',
    component: 'crypto/ecies/ecies.go — Decrypt()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    v112x: 'Backported in v1.12.21',
    patched: 'ethereumclassic/core-geth v1.13.0',
    cvss: '7.5 High',
    commit: 'c46834dd8',
    ghsa: 'GHSA-mr7q-c9w9-wh4h',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26315',
    severity: 'High',
    summary: 'ECIES GenerateShared() accepted unvalidated ephemeral public keys into ECDH. A MAC-oracle attack using repeated unauthenticated RLPx handshakes can leak bits of the node\'s static P2P private key.',
    component: 'crypto/ecies/ecies.go — GenerateShared()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    v112x: 'Backported in v1.12.21',
    patched: 'ethereumclassic/core-geth v1.13.0',
    cvss: '5.9 Medium',
    commit: 'c19892395',
    ghsa: 'GHSA-m6j8-rg6r-7mv8',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26314',
    severity: 'High',
    summary: 'IsOnCurve() did not verify coordinates are strictly less than the curve prime P. Out-of-field coordinates satisfy the naive curve equation via modular arithmetic and bypass the validity gate, leading to undefined scalar multiplication results.',
    component: 'crypto/secp256k1/curve.go — IsOnCurve(); C ext secp256k1_ext_scalar_mul()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    v112x: 'Backported in v1.12.22, whose release notes label it CVE-2026-26315',
    patched: 'ethereumclassic/core-geth v1.13.0',
    cvss: '8.1 High',
    commit: 'c19892395',
    ghsa: 'GHSA-2gjw-fg97-vg3r',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26313',
    severity: 'High',
    summary: 'P2P message handler validated payload size (10 MiB cap) but not the number of RLP list items. A crafted header declaring millions of tiny items allocates per-item memory before validation — remote OOM crash via a single P2P message from any connected peer. v1.13.0 holds each message as an undecoded rlp.RawList until it is validated, and matches every response to a pending request.',
    component: 'eth/protocols/eth/, eth/protocols/snap/, p2p/tracker/',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    v112x: 'Mitigated in v1.12.22 with a CPU amplification path left open, then hardened further in v1.12.23',
    patched: 'ethereumclassic/core-geth v1.13.0',
    cvss: '7.5 High',
    commit: '7a4988919',
    ghsa: 'GHSA-689v-6xwf-5jf3',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-22868',
    severity: 'Medium',
    summary: 'KZG blob proof validation DoS — invalid proofs trigger full expensive cryptographic verification without disconnecting the offending peer. Ethereum Classic has no blob transactions, so the path is not reached in normal operation; v1.13.0 fixes it regardless.',
    component: 'core/txpool/validation.go — validateBlobSidecar(); eth/fetcher/tx_fetcher.go — Enqueue()',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    v112x: 'Declared not applicable to ETC and left unfixed',
    patched: 'ethereumclassic/core-geth v1.13.0',
    cvss: '5.3 Medium',
    commit: '9985c33fb',
    status: 'Patched',
  },
]

const severityColors: Record<CVE['severity'], string> = {
  Critical: 'text-[var(--color-error)] bg-[var(--color-error-bg)]',
  High: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
  Medium: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
  Low: 'text-[var(--color-info)] bg-[var(--color-info-bg)]',
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
    mitigation: 'Fixed in v1.13.0: responses are decoded lazily and bounded by the request they answer. Commit 7a4988919.',
  },
  {
    area: 'P2P key oracle (CVE-2026-26315 + CVE-2026-26314)',
    risk: 'High',
    description: 'Repeated unauthenticated RLPx handshakes with crafted ephemeral keys can leak bits of the node\'s static private key across the 21-month exposure window.',
    mitigation: 'Fixed in v1.13.0. Rotating the P2P node key after upgrading is required: rename the key file rather than deleting it, and expect the enode ID to change.',
  },
  {
    area: 'Remote crash via ECIES (CVE-2026-22862)',
    risk: 'High',
    description: 'Off-by-fifteen length check in ECIES Decrypt() allows undersized ciphertext to trigger an out-of-bounds read during the RLPx handshake.',
    mitigation: 'Fixed in v1.13.0. Commit c46834dd8.',
  },
  {
    area: 'Go Runtime End-of-Life',
    risk: 'High',
    description: 'Every v1.12.x archive was built on a Go version that is no longer supported: Go 1.21 for the Linux, macOS and later Windows archives, and Go 1.22 for every Arm archive and v1.12.20\'s Windows archive. Support ended in August 2024 and February 2025, and by the March 2026 audit the standard library had gone 19 months without patches.',
    mitigation: 'Core-Geth v1.13.0 is built with Go 1.26.8.',
  },
  {
    area: 'Single unmaintained upstream',
    risk: 'High',
    description: 'No response to security disclosures sent during 2025. The etclabscore/core-geth repository received no substantive code commit between June 2024 and the March 2026 emergency releases.',
    mitigation: 'Maintenance moved to ethereumclassic/core-geth, which has more than one maintainer with admin access and takes pull requests. Running Fukuii beside Core-Geth, once Fukuii publishes a release, removes the single-client dependency.',
  },
  {
    area: '21-month release gap',
    risk: 'Medium',
    description: 'The 21-month gap between v1.12.20 (June 2024) and the March 2026 emergency releases is the longest maintenance gap in ETC network history.',
    mitigation: 'Protocol-funded maintenance path established via ECIP-1112 treasury.',
  },
  {
    area: 'CPU amplification in v1.12.22 (CVE-2026-26313)',
    risk: 'Medium',
    description: 'v1.12.22 stops the out-of-memory crash but scans the whole RLP payload before rejecting an oversized message: about 2,500 times the work per attack message that v1.13.0 does, so a peer can still exhaust CPU.',
    mitigation: 'Fixed in v1.13.0, which bounds each response by the request it answers.',
  },
  {
    area: 'Unreviewed emergency releases',
    risk: 'High',
    description: 'The v1.12.21 and v1.12.22 pull requests were each opened and merged by the same account with no review recorded on GitHub: the first about 70 minutes after opening, the second in 95 seconds. Neither v1.12.23 pull request records a review either. With no second reviewer, a defective or malicious change shipped under cover of an emergency has nothing to catch it.',
    mitigation: 'No release in either line carries a second reviewer approval on GitHub. v1.13.0 is reviewed by automated agents before changes land, its test suites run in CI on every push, and the published audits measure the released binaries rather than the build configuration.',
  },
]

interface ReleaseStatus {
  release: string
  date: string
  url: string
  status: string
  fixed?: boolean
}

/** Each v1.12.x release against the audit's findings, from the audit and its August follow-up. */
const releaseStatus: ReleaseStatus[] = [
  {
    release: 'v1.12.20',
    date: 'June 10, 2024',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.20',
    status: 'All six CVEs and the GraphQL denial of service unpatched. Built on Go 1.21 and, for its Windows and Arm archives, Go 1.22, which reached end of life two and eight months later.',
  },
  {
    release: 'v1.12.21 "Aegis"',
    date: 'March 18, 2026',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.21',
    status: 'Cut during the live attack on ETC bootnodes, about five hours after the crash was reported. Backports two CVEs. Still built on Go 1.21 and Go 1.22.',
  },
  {
    release: 'v1.12.22 "Hermes"',
    date: 'March 28, 2026',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.22',
    status: 'Backports the remaining CVEs, mitigating CVE-2026-26313 with a CPU amplification path left open. Introduces an eth_syncing regression that reports highestBlock incorrectly (#697). Still built on Go 1.21 and Go 1.22.',
  },
  {
    release: 'v1.12.23 "Argos"',
    date: 'August 14, 2026',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.23',
    status: 'A p2p hardening series. The eth_syncing regression is not fixed, a storage-range response cap can disconnect peers that answer correctly, and the archives are still built on Go 1.21 and Go 1.22.',
  },
  {
    release: 'v1.13.0',
    date: 'September 14, 2026',
    url: 'https://github.com/ethereumclassic/core-geth/releases/tag/v1.13.0',
    status: 'Every finding in the audit and its follow-up fixed. Built with Go 1.26.8 and released from ethereumclassic/core-geth.',
    fixed: true,
  },
]

const riskColors: Record<RiskItem['risk'], string> = {
  Critical: 'text-[var(--color-error)] bg-[var(--color-error-bg)]',
  High: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
  Medium: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
}

const riskAccentColors: Record<RiskItem['risk'], string> = {
  Critical: 'bg-[var(--color-error)]',
  High: 'bg-[var(--color-warning)]',
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
  { ref: 'white-b0x/core-geth', date: 'Feb – Mar 2026', url: 'https://github.com/white-b0x/core-geth', state: 'COMPLETE — patches published Mar 20–21', title: 'Olympia upgrade cross-client sprint — all CVEs patched and Go toolchain modernized', significance: 'Preparing Core-Geth as a reference client for the Olympia multi-client upgrade required a full modernization sprint. Starting February 26, 2026, White B0x authored CVE-2025-24883, then the Go 1.21 → 1.24 toolchain upgrade (removing the fjl/memsize lock-in), the remaining five CVEs, and the Go 1.24 → 1.26 final upgrade — all on the white-b0x/core-geth main branch. The work was refactored into individually scoped PRs and published to ethereumclassic/core-geth on March 20–21, one per CVE, with test coverage and linked CVE references. This is the version of the patches that subsequently appeared in v1.12.22 without citation. Released as Core-Geth v1.13.0 on September 14, 2026.' },
  { ref: '#694', date: '18 Mar 2026', url: 'https://github.com/etclabscore/core-geth/pull/694', state: 'MERGED — 70 minutes after opening', title: 'Release v1.12.21 ("Aegis") — emergency ECIES patch', significance: <>Forced by active attack on bootnodes ams3 and sfo3. First code activity from <a href="https://github.com/diega" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">@diega</a> in 14 months. Three additional CVEs remained unaddressed.</> },
  { ref: '#696', date: '28 Mar 2026', url: 'https://github.com/etclabscore/core-geth/pull/696', state: 'MERGED — under 2 minutes after opening', title: 'Release v1.12.22 ("Hermes") — remaining CVE backports', significance: 'Merged in under 2 minutes with no pre-merge review. Drawn from White B0x work publicly available since 20–21 March without citation. Go 1.21 EOL toolchain left unchanged.' },
  { ref: '#697', date: 'Apr 2026', url: 'https://github.com/etclabscore/core-geth/issues/697', state: 'OPEN — unresolved', title: 'Incorrect RPC eth_syncing response with v1.12.22', significance: 'Regression introduced by the rushed v1.12.22: highestBlock reported incorrectly. Services relying on eth_syncing for sync status receive wrong data.' },
]

const structuralFailures: StructuralFailure[] = [
  { title: 'No CVE Tracking Infrastructure', detail: 'Issue #292 (2021) requested built-in CVE tracking in version-check. Never implemented. Operators had no automated signal that their client was exposed — they had to independently monitor the go-ethereum advisory database.' },
  { title: 'Automated Security PRs Unreviewed', detail: 'Dependabot filed security bump PRs for golang.org/x/crypto and golang.org/x/net across January–April 2025, all unreviewed or auto-closed. PR #683 explicitly cited CVE-2025-24883 by name and was ignored for 9 months.' },
  { title: 'Single Point of Human Authority', detail: <><a href="https://github.com/diega" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">@diega</a> was the only person with merge access willing to cut releases. One community maintainer had a ready-to-merge PR (#649) but no merge rights. No governance path for security-critical changes without a non-reviewing approver.</> },
  { title: 'Go Toolchain Lock-in', detail: 'The fjl/memsize dependency was incompatible with Go 1.22+, locking the client to Go 1.21 (EOL August 2024). Three community PRs attempted partial fixes. The lock-in was known; it was not prioritized until it became a crisis.' },
  { title: 'Emergency Releases without Pre-release Testing', detail: 'The v1.12.21 pull request was merged 70 minutes after it opened and the v1.12.22 pull request in under 2 minutes, each by its author and with no review. The rushed process introduced the eth_syncing regression (issue #697, still open).' },
]

export default function CoreGethSecurityAuditPage() {
  const fukuii = getActiveClients().find((c) => c.id === 'fukuii')!

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
              <span className="font-mono text-sm text-[var(--color-text-muted)]">March 2026 · follow-up August 2026</span>
            </div>

            <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-4xl">
              Core-Geth v1.12.x Security Audit
            </h1>

            <p className="mt-3 text-[var(--color-text-secondary)]">
              An audit of the Core-Geth v1.12.x release line, published from{' '}
              <a
                href="https://github.com/etclabscore/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-error)] transition hover:text-[var(--color-error)]/80"
              >
                etclabscore/core-geth
              </a>
              . It found six CVEs and a GraphQL denial of service left unpatched through a 21-month gap
              in security maintenance, one of them exploited against Ethereum Classic bootnodes in March
              2026. Every v1.12.x release, v1.12.23 included, still carries at least one unpatched CVE and
              was built on a Go version that left support in August 2024 or February 2025. All of them are fixed in Core-Geth v1.13.0, released September 14, 2026
              from{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
              >
                ethereumclassic/core-geth
              </a>
              .
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={CORE_GETH_RELEASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
              >
                Download Core-Geth {CORE_GETH_VERSION}
              </a>
              <a
                href={CORE_GETH_MIGRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
              >
                Upgrade Guide
              </a>
              <a
                href="https://github.com/ethereumclassic/core-geth/blob/main/docs/audits/2026-03-security-audit.md"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
              >
                Raw Audit Report (GitHub)
              </a>
              <a
                href="https://docs.coregeth.com/audits/2026-08-security-followup/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
              >
                August 2026 Follow-up
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                { label: 'Affects v1.12.x', color: 'text-[var(--color-error)]' },
                { label: '6 CVEs', color: 'text-[var(--color-error)]' },
                { label: '5 HIGH severity', color: 'text-[var(--color-warning)]' },
                { label: '21-month gap', color: 'text-[var(--color-warning)]' },
                { label: 'Go 1.21 and 1.22 EOL', color: 'text-[var(--color-text-muted)]' },
                { label: 'Fixed in v1.13.0', color: 'text-[var(--color-primary)]' },
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

        {/* Status by release */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">What Operators Need to Do</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Status by Release</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
              The findings apply to every release in the v1.12.x line, including the most recent. If you
              run any of them, upgrade to Core-Geth v1.13.0 or later and rotate your node key, as the{' '}
              <a href={CORE_GETH_MIGRATION_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                migration guide
              </a>{' '}
              describes.
            </p>
            <div className="mt-6 overflow-hidden rounded-xl border border-[var(--border)]">
              {releaseStatus.map((item) => (
                <div
                  key={item.release}
                  className={`flex flex-col gap-1 border-b border-[var(--border)] px-5 py-4 last:border-b-0 md:flex-row md:gap-6 ${
                    item.fixed ? 'bg-[var(--color-primary)]/5' : 'bg-[var(--panel)]'
                  }`}
                >
                  <div className="shrink-0 md:w-48">
                    <a href={item.url} target="_blank" rel="noopener noreferrer"
                      className={`font-mono text-sm font-semibold hover:opacity-80 ${
                        item.fixed ? 'text-[var(--color-primary)]' : 'text-[var(--text-primary)]'
                      }`}>
                      {item.release}
                    </a>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">{item.date}</p>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">{item.status}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[var(--color-text-muted)]">
              The v1.12.22 release notes attach CVE-2026-26315, which v1.12.21 had already fixed, to the fix for
              CVE-2026-26314, so matching those notes against the advisory records shows CVE-2026-26314 as
              unaddressed when it shipped in v1.12.22. The v1.12.21 and v1.12.23 release notes carry no advisory
              identifiers.
            </p>
          </div>
        </div>

        {/* Discovery Context */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Background</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">How This Was Found</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              During cross-client testing, the Ethereum Classic core developers found that{' '}
              <a
                href="https://github.com/etclabscore/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                etclabscore/core-geth
              </a>
              , then the primary Ethereum Classic execution client, had received no security maintenance
              since its v1.12.20 release in June 2024. Six CVEs and a GraphQL depth-limit denial of service
              had accumulated unpatched, and every binary was built on Go 1.21 or Go 1.22, whose support ended in
              August 2024 and February 2025.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Private disclosures sent to that repository in 2025 received no response, and neither did a
              public disclosure by a Ledger security researcher in February 2026, until an attack on ETC
              bootnodes in March 2026 forced the emergency v1.12.21 and v1.12.22 releases. Those backported
              the CVE fixes onto the same end-of-life toolchain. The ETC Cooperative, which controls that
              repository, had entered maintenance mode at the end of 2024 and published that maintenance of
              the client would fall to other stakeholders. The full remediation was developed at{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                ethereumclassic/core-geth
              </a>
              , the community repository created in December 2024, and released there as Core-Geth v1.13.0
              on September 14, 2026.
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
              at v1.12.20. All are fixed in{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth/releases/tag/v1.13.0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                Core-Geth v1.13.0
              </a>
              .
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
                      FIXED IN v1.13.0
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">{cve.summary}</p>
                  <div className="mt-3 space-y-1 text-xs text-[var(--color-text-muted)]">
                    <p>Component: <span className="text-[var(--color-text-secondary)]">{cve.component}</span></p>
                    <p>Affected: <span className="text-[var(--color-text-secondary)]">{cve.affected}</span></p>
                    <p>In v1.12.x: <span className="text-[var(--color-text-secondary)]">{cve.v112x}</span></p>
                    <p>Fixed in: <span className="text-[var(--color-text-secondary)]">{cve.patched}</span></p>
                    <p>CVSS 3.1: <span className="text-[var(--color-text-secondary)]">{cve.cvss}</span></p>
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
                    FIXED IN v1.13.0
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  No query depth or complexity limit on the GraphQL endpoint (<code>--graphql</code> flag).
                  Deeply nested queries exhaust CPU and memory. v1.13.0 limits query depth to 20.{' '}
                  <a
                    href="https://github.com/advisories/GHSA-mh3m-8c74-74xh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    GHSA-mh3m-8c74-74xh
                  </a>
                  , a stack overflow reachable only once a depth limit is enabled, is already fixed in the
                  graphql-go v1.3.0 the client used, and v1.13.0 ships graphql-go v1.10.2.
                </p>
                <div className="mt-3 space-y-1 text-xs text-[var(--color-text-muted)]">
                  <p>Component: <span className="text-[var(--color-text-secondary)]">graphql/service.go</span></p>
                  <p>Affected: <span className="text-[var(--color-text-secondary)]">etclabscore/core-geth ≤ v1.12.20</span></p>
                  <p>In v1.12.x: <span className="text-[var(--color-text-secondary)]">Not addressed in any release</span></p>
                  <p>Fixed in: <span className="text-[var(--color-text-secondary)]">ethereumclassic/core-geth v1.13.0</span></p>
                  <p>CVSS 3.1: <span className="text-[var(--color-text-secondary)]">7.5 High, where the endpoint is exposed</span></p>
                  <p>Fix: <code className="text-[var(--text-primary)]">6a046ee910</code></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Go Runtime EOL */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Go Toolchain</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Go Runtime End-of-Life</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Each v1.12.x release was built by two toolchains, not one. The Linux and macOS
              archives, and the Windows archives from v1.12.21, were built with Go 1.21; every Arm
              archive, and v1.12.20&apos;s Windows archive, was built with Go 1.22. Go&apos;s release
              policy provides security patches only for the two most recent major versions, so support
              ended in August 2024 for Go 1.21 and February 2025 for Go 1.22. As of the March 2026
              audit, Go 1.21 had been unsupported for 19 months, leaving the standard library
              (net/http, crypto/tls, crypto/x509) unpatched across that window. Core-Geth measured
              each published archive: every v1.12.20 to v1.12.23 archive carries 55 to 61 Go standard
              library advisories that v1.13.0 does not.
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
              is built with Go 1.26.8, and a scan of its archives reports no Go standard library
              advisory at all. The v1.12.x source cannot simply be rebuilt on a supported Go: its
              release build stops in <code>blst</code> v0.3.11 from Go 1.24, and at the linker in{' '}
              <code>fjl/memsize</code> from Go 1.23. v1.13.0 carries <code>blst</code> v0.3.17, no
              memsize, and <code>go 1.26.0</code> in its module file. Commit:{' '}
              <code>b7d164018</code>. The{' '}
              <a
                href="https://docs.coregeth.com/audits/2026-09-go-toolchain/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                Go toolchain audit
              </a>{' '}
              lists every advisory and how each archive was measured.
            </p>
          </div>
        </div>

        {/* Release Timeline */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Timeline</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Release Timeline</h2>
            <div className="mt-6 space-y-3">
              {[
                { date: 'June 10, 2024', event: 'Core-Geth v1.12.20 released at etclabscore/core-geth', note: 'Last release before a 21-month gap in security maintenance' },
                { date: 'August 2024', event: 'Go 1.21 reaches end-of-life', note: 'Build toolchain unsupported, runtime CVEs accumulate unpatched' },
                { date: 'January 23, 2025', event: 'Last upstream commit before the 2026 emergency releases: a GitHub Actions CI update', note: 'No code changes; repository effectively frozen' },
                { date: 'Throughout 2025', event: 'Security disclosures sent to upstream maintainer', note: 'No response received' },
                { date: 'February 4, 2026', event: 'Ledger security researcher publicly discloses three CVEs in issue #692', note: 'No maintainer response until March 18' },
                { date: 'Feb – Mar 2026', event: 'All six CVEs patched by White B0x', note: 'CVE-2025-24883, CVE-2026-22862, CVE-2026-26315, CVE-2026-26314, CVE-2026-22868, CVE-2026-26313' },
                { date: '4 March 2026', event: 'Go toolchain upgraded 1.21 → 1.26', note: 'Commit b7d164018; blst v0.3.11 → v0.3.16' },
                { date: 'March 18, 2026', event: 'v1.12.21 ("Aegis") released at etclabscore/core-geth during the bootnode attack', note: 'Emergency ECIES patch; Go 1.21 toolchain unchanged' },
                { date: 'March 20–21, 2026', event: 'Fixes submitted to ethereumclassic/core-geth as pull requests #10 to #36', note: 'One per CVE, with tests and linked advisories' },
                { date: 'March 28, 2026', event: 'v1.12.22 ("Hermes") released at etclabscore/core-geth', note: 'Remaining CVE backports; Go 1.21 toolchain unchanged; eth_syncing regression introduced' },
                { date: 'August 14, 2026', event: 'v1.12.23 ("Argos") released at etclabscore/core-geth', note: 'p2p hardening series; still on Go 1.21, with the eth_syncing regression unfixed' },
                { date: 'September 14, 2026', event: 'Core-Geth v1.13.0 released at ethereumclassic/core-geth', note: 'Six CVEs and the GraphQL depth limit fixed; built with Go 1.26.8' },
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
          <div className="mx-auto max-w-6xl">
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
              (v1.12.21) was opened and merged by its author 70 minutes later, with no review, and the release
              followed about five hours after the crash was first reported: the first code activity from the
              upstream maintainer in 14 months.
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
                        : s.state.startsWith('MERGED') || s.state.startsWith('COMPLETE')
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
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Preferred Successor</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Why Fukuii Succeeds Core-Geth</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-[var(--color-text-secondary)]">
              The security failure in the v1.12.x line was not a one-off. It was the predictable outcome of a
              Go-based client built outside the Ethereum Classic ecosystem, maintained under a corporate
              structure that has since wound down.{' '}
              <a href="https://fukuii.org" target="_blank" rel="noopener noreferrer"
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
                      Preferred successor
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
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">When to Move</p>
                    <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      Fukuii&apos;s releases are published at fukuii-project/fukuii-cli. Until one is listed there,
                      Core-Geth v1.13.x is the client to run. Once it is, run both side by side and move across
                      when their heads agree.
                    </p>
                    <a
                      href={CORE_GETH_FUKUII_MIGRATION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-medium text-[var(--color-primary)] hover:underline"
                    >
                      Migrating to Fukuii →
                    </a>
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
          <div className="mx-auto max-w-6xl">
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
              ecosystem in 2021. ETC Cooperative-paid staff maintained the client through the
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
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Migration</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Network Migration Path</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Core-Geth v1.13 is the last release line of this client, maintained through the
              transition.{' '}
              <a href="https://fukuii.org" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                Fukuii
              </a>{' '}
              (
              <a href="https://github.com/fukuii-project/fukuii-cli" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                github
              </a>
              ) is the preferred Ethereum Classic client going forward. Until Fukuii publishes a
              release, v1.13.x is the client to run. Once it does, run both side by side, compare
              their heads, and move across when they agree, as the{' '}
              <a href={CORE_GETH_FUKUII_MIGRATION_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                migration guide
              </a>{' '}
              describes.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              <strong className="text-[var(--text-primary)]">
                If you run any v1.12.x release, upgrade to Core-Geth v1.13.0 or later and rotate your
                node key.
              </strong>{' '}
              Every v1.12.x release, v1.12.23 included, carries at least one unpatched CVE and is
              built on Go 1.21. The{' '}
              <a href={CORE_GETH_MIGRATION_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                migration guide
              </a>{' '}
              covers Linux, macOS, Windows and Docker, and needs no resync.
            </p>
          </div>
        </div>

        <SectionDivider />

        {/* Recommendations */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Recommendations</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Recommendations</h2>
            <div className="mt-6 space-y-3">
              <div className="rounded-xl border border-[var(--color-error)]/20 bg-[var(--color-error)]/5 p-5">
                <span className="inline-flex rounded-full bg-[var(--color-error)]/10 px-2.5 py-0.5 text-xs font-semibold text-[var(--color-error)]">
                  Node operators on any v1.12.x release
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Upgrade to{' '}
                  <a href={CORE_GETH_RELEASE_URL} target="_blank" rel="noopener noreferrer"
                    className="text-[var(--color-primary)]">
                    Core-Geth {CORE_GETH_VERSION}
                  </a>{' '}
                  from ethereumclassic/core-geth, following the{' '}
                  <a href={CORE_GETH_MIGRATION_URL} target="_blank" rel="noopener noreferrer"
                    className="text-[var(--color-primary)]">
                    migration guide
                  </a>
                  . Every v1.12.x release, v1.12.23 included, carries at least one unpatched CVE and an
                  end-of-life Go toolchain. Nodes on v1.12.20 or earlier are exposed to remote crash
                  (CVE-2026-26313, CVE-2026-22862) and potential key-oracle attacks (CVE-2026-26315).
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  All nodes
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Rotate the P2P node key after upgrading. It is a required step, because CVE-2026-26315
                  leaks bits of that key. With the node stopped, rename the key rather than deleting it;
                  the node writes a new one on its next start, and its enode ID changes:{' '}
                  <code className="rounded bg-[var(--bg)] px-2 py-0.5 text-xs text-[var(--text-primary)]">
                    mv &lt;datadir&gt;/geth/nodekey &lt;datadir&gt;/geth/nodekey.old-rotated-$(date +%F)
                  </code>
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  Infrastructure providers &amp; exchanges
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Treat the upgrade to v1.13.0 as a security-critical update, not a routine version
                  bump. Plan to run Fukuii beside Core-Geth once Fukuii publishes a release, and move
                  traffic across when their heads agree.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  Multi-client operation
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Run at least two independent clients once a second is recommended. When Fukuii
                  publishes a release, bring it up beside Core-Geth and compare heads before moving
                  traffic across. No client other than Fukuii is recommended.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  GraphQL endpoints
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Keep the{' '}
                  <code className="rounded bg-[var(--bg)] px-1.5 py-0.5 text-xs text-[var(--text-primary)]">--graphql</code>{' '}
                  endpoint off on public-facing nodes until they run v1.13.0. No v1.12.x release adds
                  the query depth limit.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Methodology</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Methodology and Scope</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The audit began during cross-client interoperability testing. It targeted{' '}
              <code>etclabscore/core-geth</code> at tag v1.12.20 (commit <code>c2fb44129</code>), cross-referenced
              against the go-ethereum security advisory database and the Go vulnerability database
              (vuln.go.dev). Each advisory was assessed by tracing the code core-geth shares with go-ethereum.
              Exploitability was confirmed for CVE-2026-22862, which was exploited; for the others, reachability
              from unauthenticated network input was established by reading the affected call paths. Fixes were
              cherry-picked from go-ethereum where possible, and ported by hand for CVE-2026-26313 and
              CVE-2026-26314, where the code had diverged. Tools: govulncheck, manual code review, the go-ethereum
              advisory database and vuln.go.dev.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Every patch was validated on the Mordor testnet: sync resuming after the patch, P2P handshake
              stability under normal peer traffic, unchanged JSON-RPC responses from eth_syncing,
              eth_blockNumber and net_peerCount, and block processing against known Mordor block hashes.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-sm font-semibold text-[var(--text-primary)]">In scope</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-secondary)]">
                  <li>Go packages inherited from go-ethereum with known CVE exposure</li>
                  <li>The Go toolchain version and dependency security posture</li>
                  <li>P2P input validation: devp2p, RLPx, eth and snap</li>
                  <li>RPC endpoint security: GraphQL and JSON-RPC</li>
                </ul>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-sm font-semibold text-[var(--text-primary)]">Out of scope</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[var(--color-text-secondary)]">
                  <li>Consensus-layer correctness and ETC protocol compliance</li>
                  <li>EVM execution correctness</li>
                  <li>Dependencies not listed in the go-ethereum security advisory database</li>
                  <li>Infrastructure: bootnode operators, DNS and CDN</li>
                  <li>The Fukuii codebase</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">References</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">References</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="https://github.com/ethereumclassic/core-geth/releases/tag/v1.13.0" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Core-Geth v1.13.0 release notes and downloads
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/release-reports/v1.13.0/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Core-Geth v1.13.0 release report
                </a>
              </li>
              <li>
                <a href={CORE_GETH_MIGRATION_URL} target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Migrating to v1.13.0
                </a>
              </li>
              <li>
                <a href="https://github.com/ethereumclassic/core-geth/blob/main/docs/audits/2026-03-security-audit.md" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  March 2026 security audit: docs/audits/2026-03-security-audit.md
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/audits/2026-08-security-followup/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  August 2026 security follow-up, covering v1.12.23
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/audits/2026-08-dependency-modernization/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Dependency and toolchain modernization
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/audits/2026-09-go-toolchain/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Go toolchain: which toolchain built each archive, and the advisories each one carries
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/etc-cooperative-transition/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  The ETC Cooperative transition: where each service continues
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/audits/2026-09-release-pipeline/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Release artifacts audit
                </a>
              </li>
              <li>
                <a href={CORE_GETH_SECURITY_POLICY_URL} target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Reporting a vulnerability: SECURITY.md
                </a>
              </li>
              <li>
                <a href="https://github.com/etclabscore/core-geth" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-error)] hover:opacity-80">
                  etclabscore/core-geth: the previous repository and the v1.12.x releases
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
                  Client Implementations
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
