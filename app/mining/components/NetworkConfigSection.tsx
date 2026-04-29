import { FadeIn } from '@/app/components/ui'

interface EvmVersion {
  name: string
  ethOrigin: boolean
}

interface NetworkConfig {
  name: string
  chainId: string
  currency: string
  rpc: string
  explorer: string
  explorerLabel: string
  consensus: string
  evmVersions: EvmVersion[]
  nextUpgrade: EvmVersion[]
}

const networks: NetworkConfig[] = [
  {
    name: 'ETC Mainnet',
    chainId: '61',
    currency: 'ETC',
    rpc: 'https://etc.rivet.link',
    explorer: 'https://etc.blockscout.com',
    explorerLabel: 'Blockscout',
    consensus: 'Proof-of-Work',
    evmVersions: [
      { name: 'Spiral', ethOrigin: false },
      { name: 'Shanghai', ethOrigin: true },
    ],
    nextUpgrade: [
      { name: 'Olympia', ethOrigin: false },
      { name: 'Fusaka', ethOrigin: true },
    ],
  },
  {
    name: 'Mordor Testnet',
    chainId: '63',
    currency: 'METC',
    rpc: 'https://rpc.mordor.etccooperative.org',
    explorer: 'https://etc-mordor.blockscout.com',
    explorerLabel: 'Blockscout',
    consensus: 'Proof-of-Work',
    evmVersions: [
      { name: 'Spiral', ethOrigin: false },
      { name: 'Shanghai', ethOrigin: true },
    ],
    nextUpgrade: [
      { name: 'Olympia', ethOrigin: false },
      { name: 'Fusaka', ethOrigin: true },
    ],
  },
]

function EvmLabel({ versions }: { versions: EvmVersion[] }) {
  const primary = versions.find((v) => !v.ethOrigin)
  const secondary = versions.find((v) => v.ethOrigin)
  return (
    <span>
      {primary && <span>{primary.name}</span>}
      {secondary && (
        <span className="ml-1.5 text-[10px] font-normal text-[var(--text-subtle)]">
          {secondary.name}
        </span>
      )}
    </span>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <dt className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
          {label}
        </dt>
        <dd className="text-right">{children}</dd>
      </div>
      <div className="h-px bg-[var(--border-default)]" />
    </>
  )
}

export function NetworkConfigSection() {
  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Network Configuration
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Network Configuration
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Production RPC endpoints, chain IDs, and explorer URLs for ETC
            Mainnet (Chain 61) and Mordor Testnet (Chain 63). Drop-in
            configuration for MetaMask, Hardhat, Foundry, and any
            EVM-compatible toolchain. Both networks run Proof-of-Work consensus
            under the Spiral EVM specification, with the Olympia upgrade pending
            activation.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {networks.map((net, i) => (
            <FadeIn key={net.chainId} delay={i * 100}>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                <h3 className="font-mono text-lg font-bold text-[var(--text-primary)]">
                  {net.name}
                  <span className="ml-2 text-sm font-normal text-[var(--text-subtle)]">
                    Chain {net.chainId}
                  </span>
                </h3>

                <dl className="mt-5 space-y-3">
                  <Row label="Chain ID">
                    <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">{net.chainId}</span>
                  </Row>
                  <Row label="Currency">
                    <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">{net.currency}</span>
                  </Row>
                  <Row label="RPC">
                    <code className="max-w-[220px] truncate font-mono text-xs text-[var(--brand-green)]">
                      {net.rpc}
                    </code>
                  </Row>
                  <Row label="Explorer">
                    <a
                      href={net.explorer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-[var(--brand-green)] transition-colors hover:underline"
                    >
                      {net.explorerLabel} →
                    </a>
                  </Row>
                  <Row label="Consensus">
                    <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">{net.consensus}</span>
                  </Row>
                  <Row label="EVM">
                    <span className="font-mono text-sm font-semibold text-[var(--text-primary)]">
                      <EvmLabel versions={net.evmVersions} />
                    </span>
                  </Row>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-mono text-xs uppercase tracking-wider text-[var(--text-subtle)]">
                      Next Upgrade
                    </dt>
                    <dd className="text-right font-mono text-sm font-semibold text-[var(--text-primary)]">
                      <EvmLabel versions={net.nextUpgrade} />
                    </dd>
                  </div>
                </dl>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
