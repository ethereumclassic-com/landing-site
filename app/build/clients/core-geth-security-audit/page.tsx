'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'

import { SectionDivider } from '@/app/components/ui/SectionDivider'
import {
  CORE_GETH_DOCS_URL,
  CORE_GETH_LATEST_RELEASE_URL,
  CORE_GETH_MIGRATION_URL,
  CORE_GETH_REPO_URL,
  CORE_GETH_SECURITY_POLICY_URL,
} from '@/lib/core-geth'
import { SECURITY_CONTACT_EMAIL } from '@/lib/social'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Core-Geth v1.12.x Security Audit',
  description:
    'An audit of the Core-Geth v1.12.x release line, v1.12.20 through v1.12.23: six CVEs and a GraphQL denial of service, a 21-month maintenance gap, and an active attack on ETC mainnet bootnodes in March 2026. Every finding is fixed in Core-Geth v1.13.0.',
  datePublished: '2026-03-01',
  dateModified: '2026-09-22',
  author: { '@type': 'Organization', name: 'White B0x', url: 'https://whiteb0x.com' },
  publisher: { '@type': 'Organization', name: 'Ethereum Classic', url: 'https://ethereumclassic.com' },
  about: [
    { '@type': 'SoftwareApplication', name: 'Core-Geth', url: 'https://github.com/ethereumclassic/core-geth' },
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
    mitigation: 'Fixed in v1.13.0 by commit c19892395, which validates public keys before ECDH and closes both identifiers. Rotating the P2P node key after upgrading is required: rename the key file rather than deleting it, and expect the enode ID to change.',
  },
  {
    area: 'Remote crash via ECIES (CVE-2026-22862)',
    risk: 'High',
    description: 'Off-by-fifteen length check in ECIES Decrypt() allows undersized ciphertext to trigger an out-of-bounds read during the RLPx handshake.',
    mitigation: 'Fixed in v1.13.0 by commit c46834dd8, which measures the ciphertext against the AES block size rather than a single byte.',
  },
  {
    area: 'Go Runtime End-of-Life',
    risk: 'High',
    description: 'Every v1.12.x archive was built on a Go version that is no longer supported: Go 1.21 for the Linux, macOS and later Windows archives, and Go 1.22 for every Arm archive and v1.12.20\'s Windows archive. Support ended in August 2024 and February 2025, and by the March 2026 audit the standard library had gone 19 months without patches.',
    mitigation: 'Core-Geth v1.13.0 is built with Go 1.26.8, by commit b7d164018, which also carries blst forward so the line builds on a current compiler.',
  },
  {
    area: 'Single unmaintained upstream',
    risk: 'High',
    description: 'No response to security disclosures sent during 2025. The etclabscore/core-geth repository received no substantive code commit between June 2024 and the March 2026 emergency releases.',
    mitigation: 'Maintenance moved to ethereumclassic/core-geth, which has more than one maintainer with admin access and takes pull requests. Releases are published there, and a node tracking the previous repository will not see them.',
  },
  {
    area: '21-month release gap',
    risk: 'Medium',
    description: 'The 21-month gap between v1.12.20 (June 2024) and the March 2026 emergency releases is the longest maintenance gap in ETC network history.',
    mitigation: 'Funding routes are published at docs.coregeth.com/support/, behind the repository\'s Sponsor button. ECIP-1112, the Sovereignty Vault, is a draft that would accumulate base-fee revenue for this work, and that revenue is raised from the network\'s own usage.',
  },
  {
    area: 'CPU amplification in v1.12.22 (CVE-2026-26313)',
    risk: 'Medium',
    description: 'v1.12.22 stops the out-of-memory crash but scans the whole RLP payload before rejecting an oversized message: about 2,500 times the work per attack message that v1.13.0 does, so a peer can still exhaust CPU.',
    mitigation: 'Fixed in v1.13.0, which bounds each response by the request it answers. Commit 7a4988919.',
  },
  {
    area: 'Unreviewed emergency releases',
    risk: 'High',
    description: 'The v1.12.21 and v1.12.22 pull requests were each opened and merged by the same account with no review recorded on GitHub: the first about 70 minutes after opening, the second in 95 seconds. Neither v1.12.23 pull request records a review either. With no second reviewer, a defective or malicious change shipped under cover of an emergency has nothing to catch it.',
    mitigation: 'From v1.13.1 a change reaches main only with an approving review from someone other than its author, with continuous integration required alongside that review rather than in place of it. Commit a6cc29b9d names the core developers team as code owners, so an author always has a reviewer. v1.13.0 predates the rule and carries no second-reviewer approval either.',
  },
  {
    area: 'Single-operator dependency',
    risk: 'High',
    description: 'The client, the public RPC endpoint the ecosystem pointed at, and the peer discovery lists compiled into releases were each run by one organization, whose board has communicated that it is winding down. The endpoint went offline in late August 2026 without notice, and anything holding it in configuration stopped working.',
    mitigation: 'Commit eb0cb35a9 compiles into v1.13.0 the discovery trees and bootnodes the community organization publishes on domains it holds, so no release ships a list that can go dark with one operator. --bootnodes and --discovery.dns accept any other list, and from v1.13.1 no single account can put one into a release unreviewed (a6cc29b9d).',
  },
]

interface ReleaseStatus {
  release: string
  date: string
  url: string
  status: string
  /** Share of Core-Geth nodes on this release, from the census cited below. */
  share: string
  fixed?: boolean
}

/** Each v1.12.x release against the audit's findings, from the audit and its August follow-up. */
const releaseStatus: ReleaseStatus[] = [
  {
    release: 'v1.12.20 and earlier',
    date: 'June 10, 2024 and before',
    share: '30.2% — 158 nodes, across v1.12.17 to v1.12.20',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.20',
    status: 'All six CVEs and the GraphQL denial of service unpatched. Built on Go 1.21 and, for its Windows and Arm archives, Go 1.22, which reached end of life two and eight months later.',
  },
  {
    release: 'v1.12.21 "Aegis"',
    share: '9.5% — 50 nodes',
    date: 'March 18, 2026',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.21',
    status: 'Cut during the live attack on ETC bootnodes, about five hours after the crash was reported. Backports CVE-2026-22862 and CVE-2026-26315, leaving CVE-2025-24883, CVE-2026-26313, CVE-2026-26314 and CVE-2026-22868 open and the GraphQL depth limit unaddressed. Still built on Go 1.21 and Go 1.22.',
  },
  {
    release: 'v1.12.22 "Hermes"',
    share: '31.5% — 165 nodes',
    date: 'March 28, 2026',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.22',
    status: 'Backports CVE-2025-24883 and CVE-2026-26314 and mitigates CVE-2026-26313 with a CPU amplification path left open. CVE-2026-22868 is left unfixed and the GraphQL depth limit unaddressed. Introduces an eth_syncing regression that reports highestBlock incorrectly (#697). Still built on Go 1.21 and Go 1.22.',
  },
  {
    release: 'v1.12.23 "Argos"',
    share: '26.3% — 138 nodes',
    date: 'August 14, 2026',
    url: 'https://github.com/etclabscore/core-geth/releases/tag/v1.12.23',
    status: 'A p2p hardening series that hardens CVE-2026-26313 further. CVE-2026-22868 is still unfixed, the GraphQL depth limit is still unaddressed, the eth_syncing regression is not fixed, a storage-range response cap can disconnect peers that answer correctly, and the archives are still built on Go 1.21 and Go 1.22.',
  },
  {
    release: 'v1.13.0',
    share: '1.7% — 9 nodes',
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

/**
 * The published record at docs.coregeth.com. Each summary is that document's
 * own description, so it stays the author's wording rather than a paraphrase.
 */
const CORE_GETH_AUDITS = [
  ['March 2026 security audit', 'audits/2026-03-security-audit',
    'Six CVEs and a GraphQL denial of service in Core-Geth v1.12.x, with the per-release breakdown and the March 2026 attack on Ethereum Classic bootnodes.'],
  ['August 2026 dependency modernization', 'audits/2026-08-dependency-modernization',
    'What changed underneath Core-Geth between the December 2024 archive point and v1.13.0: the Go toolchain, the module graph and the linter.'],
  ['August 2026 security follow-up', 'audits/2026-08-security-followup',
    'Core-Geth v1.12.23 measured at its tag against the advisory records: what it fixed, what it left open, and how its CVE identifiers reconcile.'],
  ['September 2026 Go toolchain', 'audits/2026-09-go-toolchain',
    'Which Go toolchain built each published Core-Geth archive, and the Go standard library advisories each v1.12.x archive carries that v1.13.0 does not.'],
  ['September 2026 release artifacts', 'audits/2026-09-release-pipeline',
    'What the published Core-Geth archives actually contain: platform floors, architectures and provenance, measured from the files themselves.'],
] as const

const CORE_GETH_REPORTS = [
  ['v1.13.0 release report', 'release-reports/v1.13.0',
    'What Core-Geth v1.13.0 fixes and changes, the files it publishes, and how to verify a download against its checksum and build attestation.'],
  ['v1.13.0: the record behind the release', 'release-reports/v1.13.0-record',
    'Claims made about the Core-Geth v1.13.0 release, answered from the public record: commit metadata, pull requests, release files and advisory databases.'],
] as const

interface MissedSignal {
  ref: string
  date: string
  url: string
  state: string
  title: string
  significance: ReactNode
}

/**
 * The two repositories are told apart by colour throughout the report: the
 * previous one red, the community one green. Applied where the data arrays
 * render, so a string added to one of them is coloured without further work.
 * Anything that is already an element is passed through untouched.
 */
/**
 * A card's reference, qualified by the repository it lives in, so a reader can
 * tell which of the two a pull request number belongs to. Read from the URL
 * rather than written into each entry. An entry whose ref is already a
 * repository path is left as it is.
 */
function qualifiedRef(url: string, ref: string): string {
  const repo = url.match(/github\.com\/([^/]+\/[^/]+)/)
  return !repo || ref.includes('/') ? ref : `${repo[1]} ${ref}`
}

/** Closes a section with a link to the published document it draws on. */
function AuditLink({ slug, children }: { slug: string; children: ReactNode }) {
  return (
    <p className="mt-5">
      <a href={`${CORE_GETH_DOCS_URL}${slug}/`} target="_blank" rel="noopener noreferrer"
        className="text-sm font-medium text-[var(--color-primary)] hover:underline">
        {children} <span aria-hidden="true">&rarr;</span>
      </a>
    </p>
  )
}

const RICH_TEXT = /(etclabscore\/core-geth|ethereumclassic\/core-geth|\b(?=[0-9a-f]*[a-f])[0-9a-f]{9}\b)/g

function repoColors(value: ReactNode): ReactNode {
  if (typeof value !== 'string') return value
  return value.split(RICH_TEXT).map((part, i) =>
    part === 'etclabscore/core-geth' ? (
      <span key={i} className="text-[var(--color-error)]">{part}</span>
    ) : part === 'ethereumclassic/core-geth' ? (
      <span key={i} className="text-[var(--color-primary)]">{part}</span>
    ) : /^(?=[0-9a-f]*[a-f])[0-9a-f]{9}$/.test(part) ? (
      <a key={i} href={`${CORE_GETH_REPO_URL}/commit/${part}`} target="_blank" rel="noopener noreferrer"
        className="font-mono text-[var(--color-primary)] hover:underline">
        {part}
      </a>
    ) : (
      part
    ),
  )
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
  { ref: 'white-b0x/core-geth', date: 'Feb 2026', url: 'https://github.com/white-b0x/core-geth', state: 'COMPLETE — public from 26 February', title: 'Olympia upgrade cross-client sprint — all CVEs patched and Go toolchain modernized', significance: 'Preparing Core-Geth as a reference client for the Olympia multi-client upgrade required a full modernization sprint. Starting February 26, 2026, White B0x authored CVE-2025-24883, then the Go 1.21 → 1.24 toolchain upgrade that removed the fjl/memsize lock-in, the remaining five CVEs, and the Go 1.24 → 1.26 final upgrade, all on the white-b0x/core-geth main branch and all in public while the previous repository had shipped nothing.' },
  { ref: '#694', date: '18 Mar 2026', url: 'https://github.com/etclabscore/core-geth/pull/694', state: 'MERGED — 70 minutes after opening', title: 'Release v1.12.21 ("Aegis") — emergency ECIES patch', significance: <>Published during the active attack on bootnodes ams3 and sfo3, and the first code activity from <a href="https://github.com/diega" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">@diega</a> in 14 months. Two of the six CVEs were backported. CVE-2025-24883 stayed open, nine months after a community pull request linked its advisory and a month after White B0x fixed it in public; CVE-2026-26313, CVE-2026-26314 and CVE-2026-22868 stayed open with it, the GraphQL depth limit was untouched, and the toolchain stayed on Go 1.21 and Go 1.22.</> },
  { ref: '#10–#36', date: '20–21 Mar 2026', url: 'https://github.com/ethereumclassic/core-geth/pull/10', state: 'COMPLETE — opened 20–21 March', title: 'The sprint opened as scoped pull requests at ethereumclassic/core-geth', significance: 'The sprint was refactored into individually scoped pull requests and opened against ethereumclassic/core-geth on 20 and 21 March: one per CVE in #10 to #20, each with a linked advisory, then the test, documentation and rlp backport work behind them. They were filed against the old master branch and stayed open until 4 September, when each was closed as included in main. This is the version of the patches that appeared in v1.12.22 a week later, which its release notes do not reference, and it shipped as Core-Geth v1.13.0 on September 14, 2026.' },
  { ref: '#696', date: '28 Mar 2026', url: 'https://github.com/etclabscore/core-geth/pull/696', state: 'MERGED — under 2 minutes after opening', title: 'Release v1.12.22 ("Hermes") — remaining CVE backports', significance: 'Merged in under 2 minutes with no pre-merge review, carrying the White B0x work that had been public since 20–21 March, which its release notes do not reference. It carried the remaining backports but left CVE-2026-26313 mitigated with a CPU amplification path still open and CVE-2026-22868 unfixed, introduced the eth_syncing regression reported in #697, and left the toolchain on Go 1.21 and Go 1.22.' },
  { ref: '#697', date: 'Apr 2026', url: 'https://github.com/etclabscore/core-geth/issues/697', state: 'OPEN — unresolved', title: 'Incorrect RPC eth_syncing response with v1.12.22', significance: 'Regression introduced by v1.12.22: highestBlock reported incorrectly. Services relying on eth_syncing for sync status receive wrong data.' },
  { ref: '#700', date: 'Aug 2026', url: 'https://github.com/etclabscore/core-geth/pull/700', state: 'MERGED — no review recorded', title: 'Release v1.12.23 ("Argos") — p2p hardening series', significance: 'Opened and merged by the same account 169 minutes apart, with no review or comment recorded. CVE-2026-22868 is still unpatched, declared not applicable because Ethereum Classic has no blob transactions, though the binary still ships the Ethereum code paths and flags that carry it and its Ethereum support reaches only Cancun. The eth_syncing regression stayed unfixed, a storage-range response cap could disconnect peers that answered correctly, the archives were still built on Go 1.21 and Go 1.22, and measured from the files themselves they require glibc 2.34 against v1.12.20\'s 2.17, so an operator on Ubuntu 20.04, Debian 11, RHEL 8 or Amazon Linux 2 could not run the release they were told to install.' },
  { ref: 'v1.13.0', date: 'Sep 2026', url: 'https://github.com/ethereumclassic/core-geth/releases/tag/v1.13.0', state: 'COMPLETE — every finding resolved', title: 'Core-Geth v1.13.0 released at ethereumclassic/core-geth', significance: 'The security pull requests opened at the community repository on 20 March 2026 targeted the old master branch. They were closed on 4 September as included in main, each closing comment naming the commit that carried it, and the release followed ten days later: six CVEs and the GraphQL depth limit resolved, on Go 1.26.8.' },
]

const structuralFailures: StructuralFailure[] = [
  { title: 'No CVE Tracking Infrastructure', detail: 'Issue #292 (2021) requested built-in CVE tracking in version-check. Never implemented. Operators had no automated signal that their client was exposed — they had to independently monitor the go-ethereum advisory database.' },
  { title: 'Automated Security PRs Unreviewed', detail: 'Dependabot filed security bump PRs for golang.org/x/crypto and golang.org/x/net across January–April 2025, all unreviewed or auto-closed. PR #683 cited CVE-2025-24883 by name and stayed open for 9 months, closing when its author deleted their fork.' },
  { title: 'Single Point of Human Authority', detail: <><a href="https://github.com/diega" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)]">@diega</a> was the only person with merge access who cut releases. One community maintainer had a ready-to-merge PR (#649) but no merge rights. No governance path for security-critical changes without a non-reviewing approver.</> },
  { title: 'Go Toolchain Lock-in', detail: 'The fjl/memsize dependency was incompatible with Go 1.22+, locking the client to Go 1.21 (EOL August 2024). Three community PRs attempted partial fixes. The lock-in was known; it was not prioritized until it became a crisis.' },
  { title: 'Emergency Releases without Pre-release Testing', detail: 'The v1.12.21 pull request was merged 70 minutes after it opened and the v1.12.22 pull request in under 2 minutes, each by its author and with no review recorded. The same process introduced the eth_syncing regression (issue #697, still open).' },
]

/** The action this report asks for. Shown at the top and again at the upgrade section. */
function UpgradeCallout({ className = '' }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-xl border border-[var(--color-primary)]/30 bg-[var(--bg-elevated)] ${className}`}>
      <div className="border-l-2 border-[var(--color-primary)] px-6 py-6 md:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Upgrade now</p>
        <p className="mt-2 text-lg font-semibold leading-snug text-[var(--text-primary)] md:text-xl">
          Run the current Core-Geth release, and rotate the P2P node key as you go.
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          About twenty minutes of downtime. Your chain data carries over, so there is no resync.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-3">
          <a
            href={CORE_GETH_LATEST_RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-primary)] px-4 py-2 text-sm font-semibold text-[var(--brand-green-foreground)] transition hover:bg-[var(--color-primary-hover)]"
          >
            Download the latest Core-Geth
          </a>
          <a
            href={CORE_GETH_MIGRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
          >
            Migration guide
          </a>
          <a
            href={`${CORE_GETH_DOCS_URL}support/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[var(--color-primary)] hover:underline"
          >
            Support this work &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}

export default function CoreGethSecurityAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-16 pb-12 md:px-10 md:pt-20 lg:px-12">
          <div className="relative mx-auto max-w-6xl">
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
              in security maintenance. Two of them, CVE-2026-22862 and CVE-2026-26315, were exploited
              against Ethereum Classic bootnodes in March 2026. Every v1.12.x release, v1.12.23 included, still carries at least one unpatched CVE and
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


            <UpgradeCallout className="mt-6" />

            <div className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2">
              {([['Audits', CORE_GETH_AUDITS], ['Reports', CORE_GETH_REPORTS]] as const).map(([heading, items]) => (
                <div key={heading}>
                  <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">{heading}</p>
                  <ul className="mt-2.5 space-y-3">
                    {items.map(([label, slug, summary]) => (
                      <li key={slug}>
                        <a href={`${CORE_GETH_DOCS_URL}${slug}/`} target="_blank" rel="noopener noreferrer"
                          className="text-sm font-medium text-[var(--color-primary)] hover:underline">
                          {label}
                        </a>
                        <p className="mt-0.5 text-xs leading-relaxed text-[var(--color-text-secondary)]">{summary}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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

        {/* In short */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Summary</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
              Upgrade to Core-Geth v1.13.0 or Later, and Rotate Your Node Key
            </h2>

            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Core-Geth went 21 months without security maintenance, from v1.12.20 in June 2024 to
              the emergency releases of March 2026. Six CVEs and a GraphQL denial of service
              accumulated in that window. Two of them, CVE-2026-22862 and CVE-2026-26315, were
              exploited against the Ethereum Classic mainnet bootnodes on 18 March 2026, where one
              bootnode crash-looped through more than 805 restarts before a patch reached it.
            </p>

            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['7', 'findings, unpatched through the gap'],
                ['21 months', 'with no security maintenance'],
                ['98%', 'of Core-Geth nodes not yet on v1.13.0'],
                ['55 to 61', 'Go advisories in each v1.12.x archive'],
              ].map(([figure, label]) => (
                <div key={label} className="bg-[var(--bg-elevated)] px-5 py-4">
                  <p className="font-mono text-xl font-bold text-[var(--color-primary)]">{figure}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[var(--color-text-secondary)]">{label}</p>
                </div>
              ))}
            </div>

            <p className="mt-6 leading-relaxed text-[var(--color-text-secondary)]">
              The three releases cut in response did not close the line. Every v1.12.x build,
              v1.12.23 included, still carries at least one unpatched CVE and still serves the
              GraphQL endpoint with no query depth limit, and every published archive was built on a
              Go release that had already left support. The v1.12.21 archives also raised the Linux
              glibc floor, so an operator on Ubuntu 20.04, Debian 11, RHEL 8 or Amazon Linux 2 could
              not run the security release they were told to install.
            </p>

            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              <strong className="text-[var(--text-primary)]">
                Core-Geth v1.13.0, released from{' '}
                <span className="text-[var(--color-primary)]">ethereumclassic/core-geth</span> on
                14 September 2026, fixes every finding
              </strong>{' '}
              and is built with Go 1.26.8, with no Go standard library advisory reported against its
              archives. Run{' '}
              <a href={CORE_GETH_LATEST_RELEASE_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline">
                the current release
              </a>
              ; a node tracking the previous repository will not see it. Rotate the P2P node key as
              you upgrade rather than merely considering it: CVE-2026-26315 is an oracle against that
              key, so a key used by an unpatched node should be treated as exposed. Rename the key
              file rather than deleting it, and expect the enode ID to change.
            </p>
          </div>
        </div>

        <SectionDivider />

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
                className="text-[var(--color-error)] hover:opacity-80"
              >
                etclabscore/core-geth
              </a>
              , then the primary Ethereum Classic execution client, had received no security maintenance
              since its v1.12.20 release in June 2024. Six CVEs and a GraphQL depth-limit denial of service
              had accumulated unpatched, and every binary was built on Go 1.21 or Go 1.22, whose support ended in
              August 2024 and February 2025.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Private disclosures sent to that repository in 2025 received no response. Neither did the
              community pull requests that named the vulnerabilities in public, one of which linked the
              advisory for CVE-2025-24883 in June 2025, nor the public disclosure by a Ledger security
              researcher in February 2026. An attack on ETC bootnodes in March 2026 was what produced the
              emergency v1.12.21 and v1.12.22 releases, which backported some of the CVE fixes onto the
              same end-of-life toolchain and left the rest open. The ETC Cooperative, which controls that
              repository, had entered maintenance mode at the end of 2024 and published that maintenance of
              the client would fall to other stakeholders.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The full remediation began in February 2026 and was published at{' '}
              <a
                href="https://github.com/ethereumclassic/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80"
              >
                ethereumclassic/core-geth
              </a>
              , the community repository created in December 2024. Those pull requests, filed in the
              repository the client had moved to, stayed open for five and a half months.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The previous repository went on publishing over the same period. Its first maintainer response
              to the February disclosure is dated 18 March 2026, the day the attack began, and three further
              releases followed: v1.12.21 merged 70 minutes after it opened, v1.12.22 in under two minutes,
              and v1.12.23 in August, none of them carrying a recorded review.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The community repository&apos;s work reached operators as Core-Geth v1.13.0 on 14 September
              2026, from code that had been public since February.
            </p>
          </div>
        </div>

        {/* March 2026 Attack */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">March 2026</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">The March 2026 Attack on Core-Geth v1.12.x Nodes</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              On 18 March 2026, the ECIES handshake path was actively exploited against the ETC
              mainnet classic bootnodes <strong>ams3</strong> and <strong>sfo3</strong>. Two defects
              in that path were reachable by any unauthenticated peer: CVE-2026-22862, the decrypt
              length undercheck (CVSS 7.5 High, GHSA-mr7q-c9w9-wh4h), and CVE-2026-26315, the
              invalid-curve key oracle in <code>GenerateShared</code> (CVSS 5.9 Medium,
              GHSA-m6j8-rg6r-7mv8). Malicious P2P traffic sent crafted <code>auth</code> messages with undersized ECIES payloads,
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
              <a href="https://github.com/etclabscore/core-geth/issues/692" target="_blank" rel="noopener noreferrer" className="text-[var(--color-error)]">
                issue #692
              </a>
              . PR{' '}
              <a href="https://github.com/etclabscore/core-geth/pull/694" target="_blank" rel="noopener noreferrer" className="text-[var(--color-error)]">
                #694
              </a>{' '}
              (v1.12.21), which cherry-picked the fix for both defects, was opened and merged by its author
              70 minutes later, with no review, and the release followed about five hours after the crash was
              first reported: the first code activity from the upstream maintainer in 14 months.
            </p>
          </div>
        </div>

        <SectionDivider />

        {/* Release Timeline */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Timeline</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Release Timeline</h2>
            <div className="mt-6 space-y-3">
              {[
                { date: 'June 10, 2024', event: 'Core-Geth v1.12.20 released at etclabscore/core-geth', note: 'Last release before a 21-month gap in security maintenance' },
                { date: 'August 2024', event: 'Go 1.21 reaches end-of-life', note: 'Build toolchain unsupported, runtime CVEs accumulate unpatched' },
                { date: 'January 23, 2025', event: 'Last upstream commit before the 2026 emergency releases: a GitHub Actions CI update', note: 'No code changes recorded in the period that follows' },
                { date: 'Throughout 2025', event: 'Security disclosures sent to upstream maintainer', note: 'No response recorded' },
                { date: 'February 4, 2026', event: 'Ledger security researcher publicly discloses three CVEs in issue #692', note: 'No maintainer response until March 18' },
                { date: 'Feb – Mar 2026', event: 'All six CVEs patched by White B0x', note: 'CVE-2025-24883, CVE-2026-22862, CVE-2026-26315, CVE-2026-26314, CVE-2026-22868, CVE-2026-26313' },
                { date: '4 March 2026', event: 'Go toolchain upgraded 1.21 → 1.26', note: 'Commit b7d164018; blst v0.3.11 → v0.3.16' },
                { date: 'March 18, 2026', event: 'v1.12.21 ("Aegis") released at etclabscore/core-geth during the bootnode attack', note: 'Emergency ECIES patch. Two of six CVEs backported and four left open, the GraphQL depth limit untouched, the Go 1.21 toolchain unchanged, and the Linux glibc floor raised from 2.17 to 2.34' },
                { date: 'March 20–21, 2026', event: 'Fixes submitted to ethereumclassic/core-geth as pull requests #10 to #36', note: 'The CVEs one per pull request in #10 to #20, each with a linked advisory, then the test and documentation work behind them' },
                { date: 'March 28, 2026', event: 'v1.12.22 ("Hermes") released at etclabscore/core-geth', note: 'Remaining CVE backports, but CVE-2026-26313 only mitigated with a CPU amplification path open and CVE-2026-22868 left unfixed; eth_syncing regression introduced; Go 1.21 toolchain unchanged' },
                { date: 'August 14, 2026', event: 'v1.12.23 ("Argos") released at etclabscore/core-geth', note: 'p2p hardening only. CVE-2026-22868 and the eth_syncing regression still unfixed, a storage-range response cap can disconnect peers that answer correctly, still built on Go 1.21, and the glibc floor still 2.34' },
                { date: 'September 14, 2026', event: 'Core-Geth v1.13.0 released at ethereumclassic/core-geth', note: 'Six CVEs and the GraphQL depth limit fixed; built with Go 1.26.8' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-36 shrink-0 pt-0.5 font-mono text-xs text-[var(--color-text-muted)]">
                    {item.date}
                  </div>
                  <div className="flex-1 border-l border-[var(--border)] pl-4">
                    <p className="text-sm font-medium text-[var(--text-primary)]">{repoColors(item.event)}</p>
                    <p className="mt-0.5 text-xs text-[var(--color-text-muted)]">{repoColors(item.note)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SectionDivider />

        {/* Status by release */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">What Operators Need to Do</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Status by Release</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
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
                        item.url.includes('etclabscore') ? 'text-[var(--color-error)]' : 'text-[var(--color-primary)]'
                      }`}>
                      {item.release}
                    </a>
                    <p className="font-mono text-xs text-[var(--color-text-muted)]">{item.date}</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs font-semibold text-[var(--text-primary)]">{item.share}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{repoColors(item.status)}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
              The v1.12.22 release notes attach CVE-2026-26315, which v1.12.21 had already fixed, to the fix for
              CVE-2026-26314, so matching those notes against the advisory records shows CVE-2026-26314 as
              unaddressed when it shipped in v1.12.22. The v1.12.21 and v1.12.23 release notes carry no advisory
              identifiers.
            </p>
            <AuditLink slug="audits/2026-08-security-followup">The August 2026 follow-up measures v1.12.23 at its tag and reconciles every identifier</AuditLink>
            <p className="mt-3 text-xs leading-relaxed text-[var(--color-text-muted)]">
              Shares are of the 524 Core-Geth nodes seen on{' '}
              <a href="https://etcnodes.org" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:underline">etcnodes.org</a>{' '}
              on 17 September 2026, of 550 nodes in total. A further four report v1.12.24, which is a
              development build of the previous repository&apos;s master branch rather than a release.
              These figures move, and etcnodes.org carries the current breakdown.
            </p>
          </div>
        </div>

        {/* CVE Gap Analysis — 3-column grid */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">CVE Analysis</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">CVE Gap Analysis</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The following vulnerabilities were present in{' '}
              <a
                href="https://github.com/etclabscore/core-geth"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-error)] hover:opacity-80"
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
                    <p>Affected: <span className="text-[var(--color-text-secondary)]">{repoColors(cve.affected)}</span></p>
                    <p>In v1.12.x: <span className="text-[var(--color-text-secondary)]">{repoColors(cve.v112x)}</span></p>
                    <p>Fixed in: <span className="text-[var(--color-text-secondary)]">{repoColors(cve.patched)}</span></p>
                    <p>CVSS 3.1: <span className="text-[var(--color-text-secondary)]">{cve.cvss}</span></p>
                    <p>Fix: <code className="text-[var(--text-primary)]">{repoColors(cve.commit)}</code></p>
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
                  <p>Affected: <span className="text-[var(--color-text-secondary)]"><span className="text-[var(--color-error)]">etclabscore/core-geth</span> ≤ v1.12.20</span></p>
                  <p>In v1.12.x: <span className="text-[var(--color-text-secondary)]">Not addressed in any release</span></p>
                  <p>Fixed in: <span className="text-[var(--color-text-secondary)]"><span className="text-[var(--color-primary)]">ethereumclassic/core-geth</span> v1.13.0</span></p>
                  <p>CVSS 3.1: <span className="text-[var(--color-text-secondary)]">7.5 High, where the endpoint is exposed</span></p>
                  <p>Fix: <code className="text-[var(--text-primary)]">6a046ee910</code></p>
                </div>
              </div>
            </div>
            <AuditLink slug="audits/2026-03-security-audit">The March 2026 audit carries the per-CVE analysis and the disclosure timeline</AuditLink>
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

        {/* Release artifacts */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Artifacts</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">What the Published Archives Contain</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              A release is what the archive contains, not what the build configuration says it
              builds, and the two can disagree for a long time without anything reporting it. The
              build succeeds, the tests pass, the archive is well formed and the checksum matches.
              Core-Geth measured the published archives by opening them.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              <strong className="text-[var(--text-primary)]">The Linux platform floor moved without being announced.</strong>{' '}
              v1.12.20 required <code>GLIBC_2.17</code>; v1.12.21 raised it to <code>GLIBC_2.34</code>
              and v1.12.22 and v1.12.23 held it there. glibc 2.34 merged <code>libpthread</code> and{' '}
              <code>libdl</code> into <code>libc</code>, so a binary linked against it acquires that
              whole symbol family at that version, and no change in the source causes it. Ubuntu
              20.04, Debian 11, RHEL and Rocky 8, and Amazon Linux 2 all ship older glibc. An
              operator on any of them could run v1.12.20 and could not run the security release they
              were told to upgrade to. Every Arm archive moved the same way in the same release.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              <strong className="text-[var(--text-primary)]">The macOS archive changed architecture under a fixed name.</strong>{' '}
              <code>core-geth-osx-&lt;version&gt;.zip</code> carried an x86_64 binary at v1.12.19 and
              an Apple Silicon binary from v1.12.20 onward, under a name that records no
              architecture. An Intel Mac user following the same download path as always receives a
              binary their machine cannot execute, and the failure appears when they run it rather
              than when they download it.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              v1.13.0 states the platform floor as a build input and fails the release when an
              artifact does not meet it, restoring <code>GLIBC_2.17</code> on x86_64 and each Arm
              target to the floor v1.12.20 shipped. It publishes both macOS architectures under names
              that say which is which, and every archive and image carries a checksum and a build
              attestation.
            </p>
            <AuditLink slug="audits/2026-09-release-pipeline">The release-artifact audit lists every measurement and how each archive was read</AuditLink>
          </div>
        </div>

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
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{repoColors(item.description)}</p>
                  <p className="mt-3 text-sm">
                    <strong className="text-[var(--color-primary)]">Mitigation:</strong>{' '}
                    <span className="text-[var(--color-text-secondary)]">{repoColors(item.mitigation)}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Postmortem Evidence Trail — 2-column grid */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Evidence Trail</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Postmortem: Public Evidence Trail</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              The following issues, pull requests and releases at{' '}
              <a href="https://github.com/etclabscore/core-geth" target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-error)] hover:opacity-80">
                etclabscore/core-geth
              </a>{' '}
              and the community repository form a linkable evidence trail. Each entry before the attack was a
              missed opportunity to prevent it; the last two record how the v1.12.x line ended and where the
              findings were resolved.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {missedSignals.map((s) => (
                <div key={s.ref} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                    <a href={s.url} target="_blank" rel="noopener noreferrer"
                      className={`font-mono text-sm font-semibold [overflow-wrap:anywhere] hover:opacity-80 ${
                        s.url.includes('etclabscore') ? 'text-[var(--color-error)]' : 'text-[var(--color-primary)]'
                      }`}>
                      {qualifiedRef(s.url, s.ref)}
                    </a>
                    <span className="font-mono text-xs text-[var(--color-text-muted)]">{s.date}</span>
                  </div>
                  <span className={`mt-2 inline-flex rounded-sm px-2 py-0.5 font-mono text-[10px] font-medium ${
                    s.state.startsWith('OPEN') || s.state.includes('never')
                      ? 'bg-[var(--color-error)]/10 text-[var(--color-error)]'
                      : s.state.startsWith('COMPLETE')
                      ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                      : 'bg-[var(--color-warning)]/10 text-[var(--color-warning)]'
                  }`}>{s.state}</span>
                  <p className="mt-2 text-sm font-medium text-[var(--text-primary)]">{repoColors(s.title)}</p>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">{repoColors(s.significance)}</p>
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
            <p className="mt-4 text-[var(--color-text-secondary)]">
              Five independent structural failures — any one of which, if addressed, would have been sufficient to prevent the March 2026 attack.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {structuralFailures.map((f, i) => (
                <div key={i} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--bg)] font-mono text-sm font-medium text-[var(--color-text-muted)]">
                    {i + 1}
                  </div>
                  <p className="font-semibold text-[var(--text-primary)]">{f.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">{repoColors(f.detail)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Prior Maintainers */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Attribution</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Maintainers</h2>
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

            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Current</p>
            <p className="mt-2 leading-relaxed text-[var(--color-text-secondary)]">
              The client is maintained in the{' '}
              <a href={CORE_GETH_REPO_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                ethereumclassic
              </a>{' '}
              organization by the{' '}
              <code className="rounded bg-[var(--bg)] px-1 font-mono text-sm text-[var(--text-primary)]">
                @ethereumclassic/core-developers
              </code>{' '}
              team, which{' '}
              <a href="https://github.com/ethereumclassic/core-geth/commit/85d68471d35c21361752414ed32cd3b8ef1ca775"
                target="_blank" rel="noopener noreferrer"
                className="font-mono text-[var(--color-primary)] hover:underline">
                85d68471d
              </a>{' '}
              names as code owners across the consensus, networking, CI, licensing and documentation
              paths. Naming a team rather than an account is what keeps a reviewer available when any
              one person is not, which is the failure this report documents.
            </p>
          </div>
        </div>

        {/* Network Migration Path */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Upgrade</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">Upgrade Path</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Core-Geth is maintained in the{' '}
              <a href={CORE_GETH_REPO_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                ethereumclassic
              </a>{' '}
              organization, and that is where its releases are published. Run the{' '}
              <a href={CORE_GETH_LATEST_RELEASE_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                current release
              </a>{' '}
              and track that repository: a node watching the previous one will not see it.
            </p>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              <strong className="text-[var(--text-primary)]">
                If you run any v1.12.x release, upgrade to Core-Geth v1.13.0 or later and rotate your
                node key.
              </strong>{' '}
              Every v1.12.x release, v1.12.23 included, carries at least one unpatched CVE and
              was built on a Go version that left support in August 2024 or February 2025. The{' '}
              <a href={CORE_GETH_MIGRATION_URL} target="_blank" rel="noopener noreferrer"
                className="text-[var(--color-primary)] hover:opacity-80">
                migration guide
              </a>{' '}
              covers Linux, macOS, Windows and Docker, and needs no resync.
            </p>

            <UpgradeCallout className="mt-6" />
          </div>
        </div>

        <SectionDivider />

        {/* What else changed in v1.13.0 */}
        <div className="border-t border-[var(--border)] px-6 py-10 md:px-10 lg:px-12">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-primary)]">Defaults</p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">What Else Changed in v1.13.0</h2>
            <p className="mt-4 leading-relaxed text-[var(--color-text-secondary)]">
              Two defaults changed with this release, for different reasons. One is a security
              posture taken against the state of the network these audits measured. The other
              follows from the condition behind the CVE gap itself: services the network relied on
              were run by one organization, whose board has communicated that it is winding down.
            </p>

            <div className="mt-6 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--color-primary)]/40">
                <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
                  Security posture: MESS is on
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  v1.13.0 ships MESS (ECBP-1100) enabled on Ethereum Classic and Mordor, where the
                  v1.12.x line disabled it. MESS changes which of two competing chains a node prefers,
                  never whether a block is valid.{' '}
                  <code className="rounded bg-[var(--bg)] px-1 font-mono text-xs">--mess=false</code>{' '}
                  keeps the v1.12.x behavior.{' '}
                  <a
                    href="https://docs.coregeth.com/operate/mess/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-primary)] hover:underline"
                  >
                    MESS, and which setting fits which operator
                  </a>
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--color-primary)]/40">
                <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
                  Peer discovery moved to the community organization
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  The bootnodes and DNS discovery trees compiled into v1.13.0 are published from{' '}
                  <a
                    href="https://github.com/ethereumclassic/discv4-dns-lists"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-primary)] hover:underline"
                  >
                    ethereumclassic/discv4-dns-lists
                  </a>
                  , in the community organization and on domains it holds. The lists the previous releases carried
                  are the Cooperative&apos;s, are set to be archived as it dissolves, and this client
                  does not hold their signing key.{' '}
                  <code className="rounded bg-[var(--bg)] px-1 font-mono text-xs">--bootnodes</code>{' '}
                  and{' '}
                  <code className="rounded bg-[var(--bg)] px-1 font-mono text-xs">--discovery.dns</code>{' '}
                  accept any other list.{' '}
                  <a
                    href="https://docs.coregeth.com/guides/bootnodes-and-discovery/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-primary)] hover:underline"
                  >
                    How the lists are built
                  </a>
                </p>
              </div>
              </div>
              <div className="rounded-xl border border-[var(--color-primary)]/25 bg-[var(--color-primary)]/[0.04] p-6 transition hover:border-[var(--color-primary)]/40">
                <h3 className="text-base font-semibold tracking-tight text-[var(--text-primary)]">
                  The ETC Cooperative is winding down, and why that matters
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  The public RPC endpoint the ecosystem pointed at went offline in late August 2026
                  without notice, and anything holding it in configuration stopped working. A release
                  whose discovery lists can disappear the same way carries that risk into every node
                  running it.{' '}
                  <a
                    href="https://docs.coregeth.com/etc-cooperative-transition/#public-json-rpc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[var(--color-primary)] hover:underline"
                  >
                    Where each service continues
                  </a>
                </p>
              </div>
            </div>
            <AuditLink slug="release-reports/v1.13.0">The v1.13.0 release report covers every change and how to verify a download</AuditLink>
          </div>
        </div>

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
                  <a href={CORE_GETH_LATEST_RELEASE_URL} target="_blank" rel="noopener noreferrer"
                    className="text-[var(--color-primary)]">
                    the current Core-Geth release
                  </a>{' '}
                  from <span className="text-[var(--color-primary)]">ethereumclassic/core-geth</span>, following the{' '}
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
                  bump. Upgrade one node first, confirm its head matches the rest, then move the
                  remainder and rotate each node key as you go.
                </p>
              </div>
              <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--bg)] px-2.5 py-0.5 text-xs font-semibold text-[var(--color-text-secondary)]">
                  Multi-client operation
                </span>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  Run more than one node and compare their heads before acting on either reading.
                  The clients page lists the implementations and the ETC execution plugins, so you can
                  see what a second opinion could come from.
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
              <code className="text-[var(--color-error)]">etclabscore/core-geth</code> at tag v1.12.20 (commit <code>c2fb44129</code>), cross-referenced
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
                  Core-Geth v1.13.0 release notes
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/release-reports/v1.13.0/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Core-Geth v1.13.0 release report
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/release-reports/v1.13.0-record/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  v1.13.0: the record behind the release, answering published claims from commit metadata, pull requests and release files
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/operate/mess/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  MESS: what v1.13.0 defaults to, and the trade-off per operator
                </a>
              </li>
              <li>
                <a href={CORE_GETH_MIGRATION_URL} target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Migrating to v1.13.0
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/audits/2026-03-security-audit/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  March 2026 security audit: the six CVEs, per release, with the disclosure timeline
                </a>
              </li>
              <li>
                <a href="https://docs.coregeth.com/audits/2026-09-release-pipeline/" target="_blank" rel="noopener noreferrer"
                  className="text-[var(--color-primary)] hover:opacity-80">
                  September 2026 release-artifact audit: what the published archives contain, measured by opening them
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
                <a href={`mailto:${SECURITY_CONTACT_EMAIL}`}
                  className="text-[var(--color-primary)] hover:opacity-80">
                  Security contact for pools, exchanges and service providers: {SECURITY_CONTACT_EMAIL}
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
                  ECIP-1112: Sovereignty Vault (draft) — where base-fee revenue would accumulate
                </a>
              </li>
            </ul>
          </div>
        </div>

      </main>
    </>
  )
}
