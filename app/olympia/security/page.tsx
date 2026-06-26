'use client'

import Link from 'next/link'

interface CVE {
  id: string
  severity: 'Critical' | 'High' | 'Medium' | 'Low'
  summary: string
  affected: string
  patched: string
  status: 'Patched' | 'Unpatched in upstream'
}

const cves: CVE[] = [
  {
    id: 'CVE-2026-26313',
    severity: 'High',
    summary: 'P2P RLP item count memory exhaustion — crafted message header declares millions of tiny items within the 10 MiB cap, triggering remote OOM crash with a single message from any connected peer.',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-22862',
    severity: 'High',
    summary: 'ECIES Decrypt() length check off-by-15 (used +1 instead of +BlockSize). Undersized RLPx auth payload causes out-of-bounds read — remote crash during P2P handshake, no authentication required.',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26315',
    severity: 'High',
    summary: 'ECIES GenerateShared() missing public key validation. MAC-oracle attack using repeated unauthenticated RLPx handshakes can leak bits of the node\'s static P2P private key.',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-26314',
    severity: 'High',
    summary: 'secp256k1 IsOnCurve() field boundary bypass — coordinates ≥ prime P satisfy the naive curve equation via modular arithmetic, bypassing the validity gate and corrupting downstream scalar multiplication.',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    status: 'Patched',
  },
  {
    id: 'CVE-2025-24883',
    severity: 'High',
    summary: 'UnmarshalPubkey() missing IsOnCurve check — off-curve secp256k1 points pass deserialization without error, producing invalid results in all downstream ECDSA and ECDH operations.',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
    status: 'Patched',
  },
  {
    id: 'CVE-2026-22868',
    severity: 'Medium',
    summary: 'KZG blob proof validation DoS — invalid proofs trigger full expensive cryptographic verification without disconnecting the offending peer, enabling sustained CPU exhaustion from any connected peer.',
    affected: 'etclabscore/core-geth ≤ v1.12.20',
    patched: 'ethereumclassic/core-geth v1.13.0',
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
    area: 'Unpatched CVEs (6)',
    risk: 'Critical',
    description: 'Six vulnerabilities unpatched for up to 21 months in the primary ETC client, including remote crash and key-oracle vectors accessible from any connected peer.',
    mitigation: 'All CVEs patched in Core-Geth v1.13.0 at github.com/ethereumclassic/core-geth.',
  },
  {
    area: 'Go Runtime EOL',
    risk: 'High',
    description: 'Upstream Core-Geth v1.12.20 was built on Go 1.21, which reached end-of-life in August 2024. Runtime vulnerabilities in net/http and crypto/tls accumulated unpatched for 19 months.',
    mitigation: 'Core-Geth v1.13.0 builds on Go 1.26 (current stable as of March 2026).',
  },
  {
    area: 'Single Unmaintained Upstream',
    risk: 'High',
    description: 'No response to security disclosures (February 2025). The etclabscore/core-geth repository received no substantive code commit after June 2024.',
    mitigation: 'Client transferred to the ethereumclassic org. Olympia multi-client architecture (Fukuii, Core-Geth, Besu) eliminates single-client dependency.',
  },
  {
    area: '21-Month Release Gap',
    risk: 'Medium',
    description: 'The gap between v1.12.20 (June 2024) and v1.13.0 (March 2026) is the longest maintenance gap in ETC network history.',
    mitigation: 'Olympia establishes protocol-funded maintenance through the Treasury (ECIP-1112).',
  },
]

const riskColors: Record<RiskItem['risk'], string> = {
  Critical: 'text-[var(--color-error)] bg-[var(--color-error-bg)]',
  High: 'text-orange-400 bg-orange-500/10',
  Medium: 'text-[var(--color-warning)] bg-[var(--color-warning-bg)]',
}

export default function SecurityPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-error)]/6 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-3xl">
          <div className="mb-4">
            <div className="flex items-center gap-3">
              <Link
                href="/olympia"
                className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
              >
                ← Olympia Hub
              </Link>
              <span className="text-sm text-[var(--color-text-muted)]">/</span>
              <Link
                href="/build/clients/core-geth-security-audit"
                className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
              >
                Full Audit →
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-sm bg-[var(--color-error)]/15 px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--color-error)]">
              SECURITY
            </span>
            <span className="font-mono text-sm text-[var(--color-text-muted)]">March 2026</span>
          </div>

          <h1 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-4xl">
            Core-Geth Security Gap Analysis
          </h1>

          <p className="mt-3 text-[var(--color-text-secondary)]">
            Security vulnerabilities discovered during Olympia upgrade preparation. Core developers found a 21-month maintenance gap in upstream Core-Geth — the
            longest in the network&apos;s history — and brought the client forward under{' '}
            <a
              href="https://github.com/ethereumclassic/core-geth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
            >
              github.com/ethereumclassic/core-geth
            </a>{' '}
            by{' '}
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
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="cdc-content article-content space-y-10">

            {/* Discovery Context */}
            <div>
              <h2>How This Was Found</h2>
              <p>
                During Olympia upgrade preparation, the ETC core team needed to validate Core-Geth
                as a reference client alongside Besu and Nethermind — both carrying ETC overlays
                for cross-client testing but not recommended for production. Core-Geth was the only
                existing ETC client at the time. That process confirmed what the commit history
                showed: upstream Core-Geth at{' '}
                <a href="https://github.com/etclabscore/core-geth" target="_blank" rel="noopener noreferrer">
                  etclabscore/core-geth
                </a>{' '}
                had not shipped a code release since v1.12.20 on 10 June 2024 — a 21-month gap — had
                accumulated six unpatched CVEs, and was still shipping binaries built on Go 1.21, a
                runtime that reached end-of-life in August 2024.
              </p>
              <p>
                Security disclosures sent to the upstream maintainer in February 2025 received no
                response. With Olympia requiring a reliable, patched client for network continuity,
                the ETC core development team brought Core-Geth forward under the{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ethereumclassic
                </a>{' '}
                organization.{' '}
                <a
                  href="https://whiteb0x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  White B0x
                </a>{' '}
                applied all known patches, upgraded the Go toolchain to 1.26, and released
                Core-Geth v1.13.0. We recommend all node operators update to this release.
              </p>
            </div>

            {/* CVE Gap Analysis */}
            <div>
              <h2>CVE Gap Analysis</h2>
              <p>
                The following vulnerabilities were present in{' '}
                <a href="https://github.com/etclabscore/core-geth" target="_blank" rel="noopener noreferrer">
                  etclabscore/core-geth
                </a>{' '}
                at v1.12.20. All are patched in Core-Geth v1.13.0 at{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ethereumclassic/core-geth
                </a>
                .
              </p>

              <div className="mt-4 space-y-3">
                {cves.map((cve) => (
                  <div
                    key={cve.id}
                    className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4"
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      <code className="text-sm text-[var(--text-primary)]">{cve.id}</code>
                      <span
                        className={`rounded-sm px-2 py-0.5 text-[10px] font-mono font-medium ${severityColors[cve.severity]}`}
                      >
                        {cve.severity.toUpperCase()}
                      </span>
                      <span className="rounded-sm bg-[var(--color-primary)]/10 px-2 py-0.5 text-[10px] font-mono font-medium text-[var(--color-primary)]">
                        {cve.status.toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{cve.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[var(--color-text-muted)]">
                      <span>Affected: {cve.affected}</span>
                      <span>Fix: {cve.patched}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Go Runtime EOL */}
            <div>
              <h2>Go Runtime End-of-Life</h2>
              <p>
                The upstream Core-Geth v1.12.20 release was built with Go 1.21, which reached end-of-life
                in August 2024. Go&apos;s release policy provides security patches only for the two most
                recent major versions. As of March 2026, Go 1.21 had been unsupported for 19 months.
              </p>
              <p>
                Runtime vulnerabilities in Go&apos;s standard library (net/http, crypto/tls, encoding)
                affect all binaries compiled with the vulnerable toolchain, including Core-Geth.
                Multiple runtime CVEs are catalogued in the Go vulnerability database (vuln.go.dev)
                for this period.
              </p>
              <p>
                The toolchain gap was surfaced during Olympia reference client alignment work.
                Core-Geth v1.13.0 at{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github.com/ethereumclassic/core-geth
                </a>{' '}
                is built on Go 1.26+ (current stable).
              </p>
            </div>

            {/* Release Timeline */}
            <div>
              <h2>Release Timeline</h2>
              <div className="mt-4 space-y-3">
                {[
                  { date: '10 June 2024', event: 'Core-Geth v1.12.20 released at etclabscore/core-geth', note: 'Final upstream release — no code releases after this date' },
                  { date: 'August 2024', event: 'Go 1.21 reaches end-of-life', note: 'Build toolchain unsupported; runtime CVEs accumulate unpatched' },
                  { date: '23 January 2025', event: 'Last upstream commit — GitHub Actions CI update', note: 'No substantive code changes; repository frozen' },
                  { date: 'February 2025', event: 'Security disclosures sent to upstream maintainer', note: 'No response received' },
                  { date: 'Feb – Mar 2026', event: 'Six CVEs patched at ethereumclassic/core-geth', note: 'CVE-2025-24883, CVE-2026-22862, CVE-2026-26315, CVE-2026-26314, CVE-2026-22868, CVE-2026-26313' },
                  { date: 'March 2026', event: 'Core-Geth v1.13.0 released at github.com/ethereumclassic/core-geth', note: 'All CVEs patched, Go 1.26, Olympia-ready' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-32 shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
                      {item.date}
                    </div>
                    <div className="flex-1 border-l border-[var(--border)] pl-4">
                      <p className="text-sm text-[var(--text-primary)]">{item.event}</p>
                      <p className="text-xs text-[var(--color-text-muted)]">{item.note}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Risk Assessment */}
            <div>
              <h2>Risk Assessment</h2>
              <div className="mt-4 space-y-3">
                {riskAssessment.map((item, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[var(--text-primary)]">{item.area}</span>
                      <span
                        className={`rounded-sm px-2 py-0.5 text-[10px] font-mono font-medium ${riskColors[item.risk]}`}
                      >
                        {item.risk.toUpperCase()}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{item.description}</p>
                    <p className="mt-2 text-sm">
                      <strong className="text-[var(--color-primary)]">Mitigation:</strong>{' '}
                      <span className="text-[var(--color-text-secondary)]">{item.mitigation}</span>
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Attribution */}
            <div>
              <h2>Prior Maintainers</h2>
              <p>
                Core-Geth is a fork of{' '}
                <a
                  href="https://github.com/multi-geth/multi-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  multi-geth
                </a>
                , originally created by{' '}
                <a href="https://github.com/sorpaas" target="_blank" rel="noopener noreferrer">
                  Wei Tang (@sorpaas)
                </a>
                — the first multi-network go-ethereum fork with first-class ETC support. The
                core-geth fork was developed by ETC Labs until they left the ETC ecosystem in
                2022, then maintained by ETC Cooperative-paid staff through the Spiral hard fork
                until announcing maintenance mode in December 2024:{' '}
                <a href="https://github.com/meowsbits" target="_blank" rel="noopener noreferrer">
                  Isaac Ardis (@meowsbits)
                </a>
                ,{' '}
                <a href="https://github.com/diega" target="_blank" rel="noopener noreferrer">
                  Diego López León (@diega)
                </a>
                , and{' '}
                <a href="https://github.com/ziogaschr" target="_blank" rel="noopener noreferrer">
                  Chris Ziogas (@ziogaschr)
                </a>
                .
              </p>
            </div>

            {/* Migration Path */}
            <div>
              <h2>Network Migration Path</h2>
              <p>
                Core-Geth v1.13.x is the final stable release series of this client. The ETC
                network is migrating to{' '}
                <a
                  href="https://fukuii.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Fukuii
                </a>{' '}
                (
                <a
                  href="https://github.com/chippr-robotics/fukuii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                ) as the primary ETC-native execution client. Core-Geth will continue to be
                maintained through the Olympia upgrade cycle, but operators should plan their
                migration to Fukuii beyond that point.{' '}
                <strong>
                  If you are running any v1.12.x release, upgrade to v1.13.0 immediately.
                </strong>{' '}
                The v1.12 series is affected by all six vulnerabilities documented here and is not
                supported for the Olympia network upgrade.
              </p>
            </div>

            {/* Recommendations */}
            <div>
              <h2>Recommendations</h2>
              <ul>
                <li>
                  <strong>Node operators (v1.12.x):</strong> Update to Core-Geth v1.13.0 from{' '}
                  <a
                    href="https://github.com/ethereumclassic/core-geth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com/ethereumclassic/core-geth
                  </a>
                  . This release includes all known security patches, is built on Go 1.26, and is
                  required for Olympia hard fork compatibility.
                </li>
                <li>
                  <strong>Infrastructure providers and exchanges:</strong> Treat the upgrade to
                  v1.13.0 as a security-critical patch before Olympia activation. Begin planning
                  migration to{' '}
                  <a
                    href="https://fukuii.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fukuii
                  </a>{' '}
                  for post-Olympia operation.
                </li>
                <li>
                  <strong>Multi-client operation:</strong> Run multiple client implementations
                  (Fukuii, Core-Geth, Besu) for cross-validation and redundancy during the
                  transition.
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div>
              <h2>Methodology</h2>
              <p>
                These findings emerged from Olympia upgrade preparation work. Core-Geth was required
                as a reference client alongside Besu and Nethermind (both running ETC overlays for
                cross-client testing). Validation included reviewing the upstream go-ethereum security
                advisories (GitHub Advisory Database), the Go vulnerability database (vuln.go.dev),
                and the Core-Geth commit history from June 2024 through March 2026. Each CVE was
                verified against the etclabscore/core-geth v1.12.20 codebase to confirm applicability
                to Ethereum Classic.
              </p>
              <p>
                Core-Geth v1.13.0 was validated through Mordor testnet deployment, cross-client genesis
                hash verification, and automated test suites across the Olympia reference client set
                (Core-Geth, Besu, Nethermind). Fukuii is the only ETC-native production client and is
                built on Scala 3 / Pekko — it does not share the Go toolchain.
              </p>
            </div>

            {/* Related */}
            <div>
              <h2>Related</h2>
              <ul>
                <li>
                  <a
                    href="https://github.com/ethereumclassic/core-geth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    github.com/ethereumclassic/core-geth
                  </a>
                </li>
                <li>
                  <Link href="/olympia/clients" className="text-[var(--color-primary)]">
                    Olympia Client Implementations
                  </Link>
                </li>
                <li>
                  <Link href="/core-devs/olympia" className="text-[var(--color-primary)]">
                    Olympia Core Developer Call
                  </Link>
                </li>
                <li>
                  <a
                    href="https://ecips.ethereumclassic.org/ECIPs/ecip-1111"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    ECIP-1111: Olympia EVM and Protocol Upgrades
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </main>
  )
}
