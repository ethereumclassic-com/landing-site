import { Cpu, Code2 } from 'lucide-react'
import { FadeIn } from '@/app/components/ui'
import { fetchHashrateTHs } from '@/lib/hashrate'

const staticStats = [
  { value: 'July 2015', label: 'In Production Since', detail: 'Longest-running EVM' },
  { value: 'Fusaka', label: 'EVM Parity', detail: 'Full Ethereum execution layer' },
  { value: 'GPU + ASIC', label: 'Hardware Access', detail: 'Retail to institutional' },
]

const columns = [
  {
    icon: Cpu,
    heading: 'From Proof-of-Work',
    subheading: "Bitcoin's regulatory trajectory",
    points: [
      'No pre-mine, no foundation controlling the protocol, no issuer.',
      'Mining hardware is globally distributed, permissionless to acquire.',
      'Block rewards and tips go to miners. The treasury is funded by basefee, not inflation.',
      'CLARITY Act digital commodity classification path: same PoW profile as Bitcoin.',
      'Energy demand that can co-locate with any power source, anywhere in the world.',
    ],
  },
  {
    icon: Code2,
    heading: 'From the EVM',
    subheading: "Ethereum's regulatory trajectory",
    points: [
      'Full Solidity and EVM compatibility. Every Ethereum tool, library, and framework works without modification.',
      'Classic USD ($USC) by Brale: a live, 1:1 USD-backed stablecoin on a PoW chain.',
      'GENIUS Act-compliant stablecoin infrastructure, the first on any Proof-of-Work network.',
      'ETCswap V2 and V3 provide on-chain liquidity for composable DeFi with a regulated stable base.',
      'Smart contracts enable programmable settlement for energy transactions on-chain.',
    ],
  },
]

export async function ETCUniquePositionSection() {
  const hashrateTHs = await fetchHashrateTHs()
  const stats = [
    { value: `${hashrateTHs.toFixed(1)} TH/s`, label: 'Network Hashrate', detail: 'Globally distributed' },
    ...staticStats,
  ]

  return (
    <section className="section-gradient border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Unique Position
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            The Largest Proof-of-Work Network with Native Smart Contracts
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            ETC is not simply a PoW network or simply a smart contract platform. It sits at the
            intersection of both, inheriting the commodity classification path that Bitcoin
            established and the programmable finance frameworks that Ethereum established. No other
            active blockchain occupies this position. Bitcoin has PoW without
            programmability, Ethereum has the EVM without PoW. ETC has both.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            For energy markets, this intersection has a specific consequence: the same network that
            provides a global 24/7 energy demand signal also supports programmable contracts for
            energy settlement. ETC/USD price is a function of energy cost, block reward, and
            hardware efficiency. Mining activity continuously arbitrages between energy markets and crypto
            markets. The EVM layer means those contracts can be settled on the same
            chain that prices them.
          </p>
        </FadeIn>

        {/* Stat strip */}
        <FadeIn delay={60}>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5"
              >
                <p className="text-xl font-bold tracking-tight text-[var(--text-primary)]">{s.value}</p>
                <p className="mt-0.5 text-xs font-medium text-[var(--text-primary)]">{s.label}</p>
                <p className="mt-1 text-[10px] text-[var(--text-subtle)]">{s.detail}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Two-column intersection */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {columns.map((col, i) => (
            <FadeIn key={col.heading} delay={i * 80}>
              <div className="flex h-full flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                    <col.icon size={16} className="text-[var(--brand-green)]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{col.heading}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--text-subtle)]">
                      {col.subheading}
                    </p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {col.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <span
                        className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--brand-green)]"
                        aria-hidden="true"
                      />
                      <p className="text-xs leading-relaxed text-[var(--text-muted)]">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
