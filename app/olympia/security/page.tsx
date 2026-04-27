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
    id: 'GHSA-4xc9-8hmq-j652',
    severity: 'Critical',
    summary: 'Consensus issue in EVM SELFDESTRUCT handling — incorrect state transition under specific contract interaction patterns',
    affected: 'Core-Geth ≤ 1.12.19',
    patched: 'Core-Geth 1.13.0 (ethereumclassic fork)',
    status: 'Patched',
  },
  {
    id: 'GHSA-7p92-x423-wg5m',
    severity: 'High',
    summary: 'DoS via crafted p2p message — unbounded memory allocation in devp2p layer',
    affected: 'Core-Geth ≤ 1.12.19',
    patched: 'Core-Geth 1.13.0 (ethereumclassic fork)',
    status: 'Patched',
  },
  {
    id: 'GHSA-rjjm-x32p-m3f7',
    severity: 'High',
    summary: 'JSON-RPC denial of service — specially crafted RPC call causes excessive CPU consumption',
    affected: 'Core-Geth ≤ 1.12.19',
    patched: 'Core-Geth 1.13.0 (ethereumclassic fork)',
    status: 'Patched',
  },
  {
    id: 'GHSA-vf56-7gx4-qx8v',
    severity: 'Medium',
    summary: 'Transaction pool manipulation — priority fee calculation edge case allows queue displacement',
    affected: 'Core-Geth ≤ 1.12.19',
    patched: 'Core-Geth 1.13.0 (ethereumclassic fork)',
    status: 'Patched',
  },
  {
    id: 'GO-2024-3321',
    severity: 'High',
    summary: 'Go 1.21 runtime vulnerability — net/http request smuggling via malformed Transfer-Encoding headers',
    affected: 'Go ≤ 1.21.x (Core-Geth build dependency)',
    patched: 'Go 1.24 (Core-Geth 1.13.0)',
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
    area: 'Unpatched CVEs',
    risk: 'Critical',
    description: 'Multiple disclosed vulnerabilities remain unpatched in the upstream production release, including consensus and DoS vectors.',
    mitigation: 'All known CVEs patched in Core-Geth 1.13.0 under the ethereumclassic organization.',
  },
  {
    area: 'Go Runtime EOL',
    risk: 'High',
    description: 'Upstream Core-Geth builds on Go 1.21, which reached end-of-life in August 2024. Runtime vulnerabilities affect all compiled binaries.',
    mitigation: 'Core-Geth 1.13.0 builds on Go 1.24 (current stable).',
  },
  {
    area: 'Single Maintainer',
    risk: 'High',
    description: 'No active maintainer — unresponsive to security disclosures, no redundancy in core development. Effectively deprecated for two years.',
    mitigation: 'Olympia introduces multi-client architecture (Fukuii, Core-Geth, Besu) with multi-maintainer review.',
  },
  {
    area: 'No Release Cadence',
    risk: 'Medium',
    description: 'The 21-month gap between releases is the longest in the network\'s history. No maintenance releases, no security advisories published.',
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

        <div
          className="relative mx-auto max-w-3xl"
        >
          <div className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[var(--color-primary)] transition hover:text-[var(--color-primary)]/80"
            >
              ← Olympia Hub
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-sm bg-[var(--color-error)]/15 px-2 py-0.5 font-mono text-[10px] font-medium text-[var(--color-error)]">
              SECURITY
            </span>
            <span className="font-mono text-sm text-[var(--color-text-muted)]">March 2026</span>
          </div>

          <h1
            className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl lg:text-4xl"
          >
            Core-Geth Security Gap Analysis
          </h1>

          <p className="mt-3 text-[var(--color-text-secondary)]">
            Assessment of the Core-Geth execution client covering the 21-month maintenance gap from
            February 2024 through April 2026: the longest maintenance gap in the network&apos;s history.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="border-t border-[var(--border)] px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="cdc-content article-content space-y-10">
            {/* Executive Summary */}
            <div>
              <h2>Executive Summary</h2>
              <p>
                Ethereum Classic&apos;s primary execution client, Core-Geth, has not shipped a maintenance
                release in 21 months. During this period, multiple security vulnerabilities were disclosed
                in upstream go-ethereum and the Go runtime, none of which have been patched in the
                production release available to node operators.
              </p>
              <p>
                The upstream repository has been unresponsive to security disclosures, with no active
                maintainer, no redundancy in core development, and no published security advisories.
                This represents a structural risk to the Ethereum Classic network.
              </p>
              <p>
                For the Olympia transition, Core-Geth has been brought forward with all known security
                patches under the{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ethereumclassic
                </a>{' '}
                organization. We recommend all node operators update to the patched release.
              </p>
            </div>

            {/* CVE Gap Analysis */}
            <div>
              <h2>CVE Gap Analysis</h2>
              <p>
                The following vulnerabilities affect the current upstream Core-Geth production release.
                All have been patched in Core-Geth 1.13.0 maintained under the ethereumclassic organization.
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
                      <span
                        className="rounded-sm bg-[var(--color-primary)]/10 px-2 py-0.5 text-[10px] font-mono font-medium text-[var(--color-primary)]"
                      >
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
                The upstream Core-Geth production release is built with Go 1.21, which reached end-of-life
                in August 2024. Go&apos;s release policy provides security patches only for the two most
                recent major versions. As of March 2026, Go 1.21 has been unsupported for 19 months.
              </p>
              <p>
                Runtime vulnerabilities in Go&apos;s standard library (net/http, crypto/tls, encoding)
                affect all binaries compiled with the vulnerable toolchain — including Core-Geth. The
                GO-2024-3321 advisory above is one example; additional runtime CVEs exist in the Go
                vulnerability database.
              </p>
              <p>
                Core-Geth 1.13.0 under the ethereumclassic organization builds on Go 1.24 (current stable,
                supported through February 2027).
              </p>
            </div>

            {/* Release Timeline */}
            <div>
              <h2>Release Timeline</h2>
              <div className="mt-4 space-y-3">
                {[
                  { date: 'June 2023', event: 'Core-Geth 1.12.19 released (Spiral hard fork)', note: 'Last upstream release' },
                  { date: 'August 2024', event: 'Go 1.21 reaches end-of-life', note: 'Build toolchain unsupported' },
                  { date: 'September 2024', event: 'GHSA-4xc9-8hmq-j652 disclosed (Critical)', note: 'No upstream response' },
                  { date: 'December 2024', event: 'Multiple CVEs accumulated, no security advisory published', note: '18 months since last release' },
                  { date: 'February 2025', event: 'Security disclosures sent to upstream maintainer', note: 'No response received' },
                  { date: 'March 2026', event: 'Core-Geth 1.13.0 released under ethereumclassic org', note: 'All known CVEs patched, Go 1.24' },
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

            {/* Recommendations */}
            <div>
              <h2>Recommendations</h2>
              <ul>
                <li>
                  <strong>Node operators:</strong> Update to Core-Geth 1.13.0 from the{' '}
                  <a
                    href="https://github.com/ethereumclassic/core-geth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    ethereumclassic/core-geth
                  </a>{' '}
                  repository. This release includes all known security patches and is built on Go 1.24.
                </li>
                <li>
                  <strong>Mining operators:</strong> Evaluate{' '}
                  <a
                    href="https://github.com/ethereumclassic/fukuii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Fukuii
                  </a>{' '}
                  as the recommended long-term client for Proof-of-Work consensus and mining operations.
                </li>
                <li>
                  <strong>Infrastructure providers:</strong> Consider running multiple client implementations
                  (Fukuii, Core-Geth, Besu) for cross-validation and redundancy.
                </li>
                <li>
                  <strong>Exchanges and custodians:</strong> Verify your ETC node is running a patched client
                  before the Olympia hard fork activation.
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div>
              <h2>Methodology</h2>
              <p>
                This analysis was conducted by reviewing the upstream go-ethereum security advisories
                (GitHub Advisory Database), the Go vulnerability database (vuln.go.dev), and the Core-Geth
                commit history from June 2023 through March 2026. Each CVE was verified against the
                Core-Geth codebase to confirm applicability to Ethereum Classic.
              </p>
              <p>
                The patched Core-Geth 1.13.0 release was validated through Mordor testnet deployment,
                cross-client genesis hash verification, and automated test suites across all three
                Olympia client implementations.
              </p>
            </div>

            {/* Related */}
            <div>
              <h2>Related</h2>
              <ul>
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
                    href="https://github.com/ethereumclassic/core-geth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Core-Geth (ethereumclassic fork)
                  </a>
                </li>
                <li>
                  <a
                    href="https://ecips.ethereumclassic.org/ECIPs/ecip-1111"
                    target="_blank"
                    rel="noopener noreferrer"
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
