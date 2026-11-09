import Link from 'next/link'
import { FadeIn } from '@/app/components/ui'

const stats = [
  {
    value: 'Only mature PoW',
    label: 'with native smart contracts',
    detail: 'Solidity and the EVM on PoW consensus',
  },
  {
    value: '24/7',
    label: 'Global energy demand signal',
    detail: 'Continuous, permissionless, every time zone',
  },
  {
    value: 'Any Scale',
    label: 'Stranded energy monetization',
    detail: 'Retail GPU through institutional ASIC',
  },
]

export function EnergyHeroSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:px-10 lg:px-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand-green)]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Energy &amp; Sustainability
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
            Proof-of-Work as{' '}
            <span className="text-[var(--brand-green)]">Energy Infrastructure</span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--text-muted)]">
            Proof-of-Work mining is programmable demand for electricity. Unlike most industrial consumers,
            a mining operation can move to the energy instead of waiting for the energy to be delivered to
            it. A solar farm in a remote valley, a gas well with no pipeline and a hydro plant with no
            transmission line all produce stranded power, and mining can put that power to productive use.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
            Miners also respond to price in seconds. When power is cheap and abundant, they ramp up; when the
            grid needs capacity, they curtail, faster than most conventional demand-response programs. Grid
            operators increasingly value that flexibility: an elastic buyer can improve grid economics for
            every other participant.
          </p>
          <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
            Ethereum Classic is the only mature Proof-of-Work blockchain with native smart contracts. The
            network that draws on energy around the world also runs programmable financial contracts, and
            ETC trades against major currencies on exchanges worldwide. That combination of Proof-of-Work
            energy economics and smart contracts makes ETC an energy platform as well as an energy consumer.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/regulation"
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--brand-green)] bg-[var(--brand-green-subtle)] px-5 py-2.5 text-sm font-semibold text-[var(--brand-green)] transition-colors hover:bg-[var(--brand-green)]/12"
            >
              Regulatory Framework →
            </Link>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 100}>
              <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6">
                <p className="text-2xl font-bold tracking-tight text-[var(--brand-green)]">
                  {s.value}
                </p>
                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">{s.label}</p>
                <p className="mt-2 text-xs text-[var(--text-subtle)]">{s.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
