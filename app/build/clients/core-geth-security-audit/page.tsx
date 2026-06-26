import Link from 'next/link'

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
    description: 'No response to security disclosures sent February 2025. The etclabscore/core-geth organisation received no substantive code commit after June 2024.',
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

export default function CoreGethSecurityAuditPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-16 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-error)]/6 blur-[80px]" />
        </div>

        <div className="relative mx-auto max-w-3xl">
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
            Core-Geth Security Audit
          </h1>

          <p className="mt-3 text-[var(--color-text-secondary)]">
            Six unpatched CVEs and a 21-month maintenance gap discovered during Fukuii cross-client
            testing for the Olympia upgrade. The upstream client at{' '}
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
              href="https://github.com/ethereumclassic/core-geth/blob/main/docs/audits/2026-03-security-audit.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:bg-[var(--panel-hover)]"
            >
              Raw Audit Report (GitHub)
            </a>
          </div>
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
                While building Fukuii and conducting cross-client interoperability testing for the
                Olympia upgrade, core developers ran compatibility tests against the upstream
                Core-Geth release available to node operators. The testing process confirmed what
                the commit history showed: the{' '}
                <a
                  href="https://github.com/etclabscore/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  etclabscore/core-geth
                </a>{' '}
                repository had not shipped a code release since v1.12.20 on 10 June 2024 — a
                21-month gap. Multiple CVEs had accumulated unpatched, and the client was still
                shipping binaries built on Go 1.21, a runtime that reached end-of-life in
                August 2024.
              </p>
              <p>
                Security disclosures sent to the upstream maintainer in February 2025 received no
                response. The last substantive upstream commit was the v1.12.20 release itself;
                the final commit of any kind was a GitHub Actions CI update on 23 January 2025.
                With Olympia requiring a reliable, patched client for network continuity, the ETC
                core development team brought Core-Geth forward under the{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ethereumclassic
                </a>{' '}
                organisation, applied all known patches, upgraded the Go toolchain to 1.26, and
                released Core-Geth v1.13.0.
              </p>
            </div>

            {/* CVE Gap Analysis */}
            <div>
              <h2>CVE Gap Analysis</h2>
              <p>
                The following vulnerabilities were present in{' '}
                <a
                  href="https://github.com/etclabscore/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  etclabscore/core-geth
                </a>{' '}
                at v1.12.20. All are patched in{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ethereumclassic/core-geth
                </a>{' '}
                v1.13.0.
              </p>

              <div className="mt-4 space-y-3">
                {cves.map((cve) => (
                  <div
                    key={cve.id}
                    className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4"
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
                      <span
                        className={`rounded-sm px-2 py-0.5 text-[10px] font-mono font-medium ${severityColors[cve.severity]}`}
                      >
                        {cve.severity.toUpperCase()}
                      </span>
                      <span className="rounded-sm bg-[var(--color-primary)]/10 px-2 py-0.5 text-[10px] font-mono font-medium text-[var(--color-primary)]">
                        PATCHED
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[var(--color-text-secondary)]">{cve.summary}</p>
                    <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[var(--color-text-muted)]">
                      <span>Component: {cve.component}</span>
                    </div>
                    <div className="mt-1 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[var(--color-text-muted)]">
                      <span>Affected: {cve.affected}</span>
                      <span>Fix commit: <code className="text-[var(--text-primary)]">{cve.commit}</code></span>
                    </div>
                  </div>
                ))}

                {/* GraphQL — no CVE */}
                <div className="rounded-lg border border-[var(--border)] bg-[var(--panel)] p-4">
                  <div className="flex flex-wrap items-center gap-2">
                    <code className="text-sm text-[var(--text-primary)]">GraphQL Depth DoS</code>
                    <span className={`rounded-sm px-2 py-0.5 text-[10px] font-mono font-medium ${severityColors.Medium}`}>
                      MEDIUM
                    </span>
                    <span className="rounded-sm bg-[var(--color-primary)]/10 px-2 py-0.5 text-[10px] font-mono font-medium text-[var(--color-primary)]">
                      PATCHED
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[var(--color-text-secondary)]">
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
                  <div className="mt-2 flex flex-wrap gap-x-6 gap-y-1 text-xs text-[var(--color-text-muted)]">
                    <span>Component: graphql/service.go; graphql-go v1.3.0 → v1.9.0</span>
                    <span>Fix commit: <code className="text-[var(--text-primary)]">6c2d383fa</code></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Go Runtime EOL */}
            <div>
              <h2>Go Runtime End-of-Life</h2>
              <p>
                The upstream Core-Geth v1.12.20 release was built with Go 1.21, which reached
                end-of-life in August 2024. Go&apos;s release policy provides security patches
                only for the two most recent major versions. As of March 2026, Go 1.21 had been
                unsupported for 19 months, leaving the runtime&apos;s standard library (net/http,
                crypto/tls, encoding) unpatched across that window.
              </p>
              <p>
                Core-Geth v1.13.0 at{' '}
                <a
                  href="https://github.com/ethereumclassic/core-geth"
                  target="_blank"
                  rel="noopener noreferrer"
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

            {/* Release Timeline */}
            <div>
              <h2>Release Timeline</h2>
              <div className="mt-4 space-y-3">
                {[
                  { date: '10 June 2024', event: 'Core-Geth v1.12.20 released at etclabscore/core-geth', note: 'Final upstream release — no code releases after this date' },
                  { date: 'August 2024', event: 'Go 1.21 reaches end-of-life', note: 'Build toolchain unsupported, runtime CVEs accumulate unpatched' },
                  { date: '23 January 2025', event: 'Last upstream commit — GitHub Actions CI update', note: 'No code changes; repository effectively frozen' },
                  { date: 'February 2025', event: 'Security disclosures sent to upstream maintainer', note: 'No response received' },
                  { date: 'Feb – Mar 2026', event: 'All six CVEs patched at ethereumclassic/core-geth', note: 'CVE-2025-24883, CVE-2026-22862, CVE-2026-26315, CVE-2026-26314, CVE-2026-22868, CVE-2026-26313' },
                  { date: '4 March 2026', event: 'Go toolchain upgraded 1.21 → 1.26', note: 'Commit 8385cf8e8; blst v0.3.11 → v0.3.16' },
                  { date: 'March 2026', event: 'Core-Geth v1.13.0 released at ethereumclassic/core-geth', note: 'All CVEs patched; Go 1.26; Olympia-ready' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-36 shrink-0 font-mono text-xs text-[var(--color-text-muted)]">
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
                , originally created and maintained by{' '}
                <a href="https://github.com/sorpaas" target="_blank" rel="noopener noreferrer">
                  <strong>Wei Tang</strong> (@sorpaas)
                </a>
                . Multi-geth was the first multi-network go-ethereum fork with first-class ETC
                support, and its chain configuration architecture is the direct ancestor of
                core-geth.
              </p>
              <p>
                The core-geth fork was then developed by ETC Labs until they left the ETC
                ecosystem in 2022. ETC Cooperative-paid staff maintained the client through the
                Spiral hard fork up until announcing maintenance mode for the client in December
                2024:
              </p>
              <ul>
                <li>
                  <a href="https://github.com/meowsbits" target="_blank" rel="noopener noreferrer">
                    <strong>Isaac Ardis</strong> (@meowsbits)
                  </a>{' '}
                  — primary architect and long-term maintainer
                </li>
                <li>
                  <a href="https://github.com/diega" target="_blank" rel="noopener noreferrer">
                    <strong>Diego López León</strong> (@diega)
                  </a>{' '}
                  — release manager; cut the v1.12.20 release
                </li>
                <li>
                  <a href="https://github.com/ziogaschr" target="_blank" rel="noopener noreferrer">
                    <strong>Chris Ziogas</strong> (@ziogaschr)
                  </a>{' '}
                  — contributor and maintainer
                </li>
              </ul>
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
                maintained through the Olympia upgrade cycle to ensure a stable transition, but
                operators should plan their migration to Fukuii beyond that point.
              </p>
              <p>
                <strong>
                  If you are running any v1.12.x release, upgrade to v1.13.0 immediately.
                </strong>{' '}
                The v1.12 series is affected by all six vulnerabilities documented in this audit
                and is not supported for the Olympia network upgrade.
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
                  . Nodes running etclabscore/core-geth v1.12.20 or earlier are exposed to remote
                  crash (CVE-2026-26313, CVE-2026-22862) and potential key-oracle attacks
                  (CVE-2026-26315), and will not be compatible with the Olympia hard fork.
                </li>
                <li>
                  <strong>Long-running nodes:</strong> Rotate your P2P node key as a precaution
                  against CVE-2026-26315 exposure:
                  <code className="ml-2 rounded bg-[var(--panel)] px-2 py-0.5 text-xs">rm &lt;datadir&gt;/geth/nodekey</code>
                </li>
                <li>
                  <strong>Infrastructure providers and exchanges:</strong> Treat the upgrade to
                  v1.13.0 as a security-critical patch, not a routine version bump. Begin planning
                  migration to Fukuii for post-Olympia operation.
                </li>
                <li>
                  <strong>Multi-client operation:</strong> Run multiple client implementations
                  (Fukuii, Core-Geth, Besu) for cross-validation and redundancy during the
                  transition.
                </li>
                <li>
                  <strong>GraphQL endpoints:</strong> Verify v1.13.0 is deployed before re-opening
                  the <code>--graphql</code> port on public-facing nodes.
                </li>
              </ul>
            </div>

            {/* Methodology */}
            <div>
              <h2>Methodology</h2>
              <p>
                These findings emerged from cross-client interoperability testing conducted during
                Fukuii development and Olympia upgrade preparation. The etclabscore/core-geth
                codebase at v1.12.20 was assessed against the go-ethereum GitHub Security
                Advisory database and the Go vulnerability database (vuln.go.dev). Each advisory
                was verified for applicability to core-geth&apos;s shared codebase and manually
                ported or cherry-picked where upstream structural differences prevented a clean
                merge. All patches were validated through Mordor testnet deployment and automated
                test suites across all three Olympia client implementations (Fukuii, Core-Geth,
                Besu).
              </p>
            </div>

            {/* References */}
            <div>
              <h2>References</h2>
              <ul>
                <li>
                  <a
                    href="https://github.com/ethereumclassic/core-geth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    ethereumclassic/core-geth — patched v1.13.0
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/etclabscore/core-geth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-error)]"
                  >
                    etclabscore/core-geth — upstream (unmaintained since June 2024)
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ethereumclassic/core-geth/blob/main/docs/audits/2026-03-security-audit.md"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    Full audit report — docs/audits/2026-03-security-audit.md
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/ethereum/go-ethereum/security/advisories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    go-ethereum GitHub Security Advisories
                  </a>
                </li>
                <li>
                  <a
                    href="https://vuln.go.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    Go Vulnerability Database — vuln.go.dev
                  </a>
                </li>
                <li>
                  <Link href="/build/clients" className="text-[var(--color-primary)]">
                    ETC Node Clients
                  </Link>
                </li>
                <li>
                  <Link href="/olympia/clients" className="text-[var(--color-primary)]">
                    Olympia Client Implementations
                  </Link>
                </li>
                <li>
                  <a
                    href="https://ecips.ethereumclassic.org/ECIPs/ecip-1112"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-primary)]"
                  >
                    ECIP-1112: Treasury Funding for Protocol Maintenance
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
