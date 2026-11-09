import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'

interface MiningOverviewSectionProps {
  /** Null when there is no live reading. */
  hashrateTHs: number | null
}

export function MiningOverviewSection({ hashrateTHs }: MiningOverviewSectionProps) {
  const stats = [
    { value: hashrateTHs !== null ? hashrateTHs.toFixed(1) : '—', unit: hashrateTHs !== null ? 'TH/s' : undefined, label: 'Network Hashrate' },
    { value: 'Etchash', label: 'Mining Algorithm' },
    { value: 'GPU + ASIC', label: 'Compatible Hardware' },
  ]

  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Mining
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Proof-of-Work Mining
          </h2>
        </FadeIn>

        {/* Stats */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 80}>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
                <p className="font-mono text-2xl font-bold text-[var(--brand-green)]">
                  {stat.value}
                  {stat.unit && (
                    <span className="ml-1 text-sm font-normal">{stat.unit}</span>
                  )}
                </p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Body copy */}
        <FadeIn delay={300}>
          <div className="mt-8">
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Ethereum Classic is the only mature EVM chain secured by Proof-of-Work. When Ethereum moved to
              Proof-of-Stake, a large share of its Ethash hardware moved to ETC, and ASIC makers such as Bitmain
              and Jasminer build for Etchash. Etchash supports both ASIC efficiency for commercial-grade operations and
              GPU accessibility for global participation, decentralizing hashrate across
              geographies and reducing supply chain risk. Run{' '}
              <Link
                href="/build/clients/core-geth"
                className="font-semibold text-[var(--brand-green)] transition-colors hover:underline"
              >
                Core-Geth
              </Link>
              , the recommended client, to participate in block production and earn ETC rewards.
            </p>
            <p className="mt-4 text-sm font-medium text-[var(--text-muted)]">
              Secure the network, earn block rewards.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
