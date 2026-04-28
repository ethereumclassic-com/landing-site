'use client'

import Link from 'next/link'
import { OverviewTable } from '@/app/components/ui'

const gpuFeatures = [
  { title: 'Multi-algorithm flexibility', desc: 'Repurpose hardware if ETC economics shift. GPUs mine dozens of algorithms.' },
  { title: 'Lower barrier to entry', desc: 'NVIDIA and AMD cards available at consumer retail. No MOQ, no bulk order.' },
  { title: 'Resale value', desc: 'Gaming and compute demand provides a secondary market. ASICs have no resale outside crypto mining.' },
  { title: 'Home-scale viable', desc: 'A single GPU rig generates meaningful revenue at home without industrial power infrastructure.' },
  { title: 'Incremental scaling', desc: 'Add cards to a rig or add rigs one at a time. No minimum commitment.' },
]

const asicFeatures = [
  { title: 'Peak ETChash efficiency', desc: 'Purpose-built silicon achieves hashrates impossible with GPUs at equivalent power draw.' },
  { title: 'Lower power per MH/s', desc: 'Industrial ASIC operations have dramatically lower electricity cost per unit of security produced.' },
  { title: 'Predictable output', desc: 'ASICs run one algorithm at a fixed rate. No driver issues, no gaming workload competition.' },
  { title: 'Datacenter-ready form factor', desc: 'Rack-mountable units designed for density. Purpose-built for 24/7 continuous operation.' },
  { title: 'Manufacturers on ETC', desc: 'Bitmain, Jasminer, iPollo, and Innosilicon all produce ETChash-compatible ASICs.' },
]

const manufacturers = [
  { name: 'Bitmain', models: 'E9 series', algo: 'ETChash', notes: 'Largest ASIC manufacturer globally' },
  { name: 'Jasminer', models: 'X16-Q, X4-Q', algo: 'ETChash', notes: 'High-efficiency low-noise form factors' },
  { name: 'iPollo', models: 'V1 Mini, V1 Classic', algo: 'ETChash', notes: 'Consumer-friendly entry-level units' },
  { name: 'Innosilicon', models: 'A11 Pro', algo: 'ETChash', notes: 'High-density rack configurations' },
]

export default function MiningApproachesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden px-6 py-20 md:px-10 lg:px-12">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--color-primary)]/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-4xl">
          <div className="mb-4">
            <Link href="/mining" className="text-sm text-[var(--color-primary)] transition hover:opacity-80">
              ← Mining Hub
            </Link>
          </div>
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-warning-border)] bg-[var(--color-warning-bg)] px-4 py-1.5 text-sm font-medium text-[var(--color-warning)]">
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
              </svg>
              Mining Approaches
            </span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] md:text-5xl">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[var(--color-primary)] to-emerald-300 bg-clip-text text-transparent">
              Mining Approach
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            ETC supports both GPU and ASIC mining via the ETChash algorithm. Every scale of operation has a valid entry point — from a single home rig to grid-scale industrial deployment.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/mining/hardware"
              className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:opacity-90"
            >
              Hardware Guide
            </Link>
            <Link
              href="/mining/profitability"
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
            >
              Profitability Calculator
            </Link>
          </div>
        </div>
      </section>

      {/* GPU vs ASIC */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">GPU vs ASIC</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Both are valid. Your choice depends on how you value flexibility, efficiency, and capital exposure.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* GPU */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
                  <svg aria-hidden="true" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">GPU Mining</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">NVIDIA &amp; AMD</p>
                </div>
              </div>
              <ul className="space-y-4">
                {gpuFeatures.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">{f.title}</p>
                      <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg border border-purple-500/20 bg-purple-500/5 p-4">
                <p className="text-xs font-medium text-purple-400">Best for</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Home miners, hobbyists, operators who want optionality, and those in markets with consumer GPU access.</p>
              </div>
            </div>

            {/* ASIC */}
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-warning-bg)]">
                  <svg aria-hidden="true" className="h-6 w-6 text-[var(--color-warning)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[var(--text-primary)]">ASIC Mining</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">ETChash-dedicated silicon</p>
                </div>
              </div>
              <ul className="space-y-4">
                {asicFeatures.map((f) => (
                  <li key={f.title} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--color-warning)]" />
                    <div>
                      <p className="text-sm font-medium text-[var(--text-primary)]">{f.title}</p>
                      <p className="mt-0.5 text-sm text-[var(--color-text-muted)]">{f.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-lg border border-[var(--color-warning)]/20 bg-[var(--color-warning)]/5 p-4">
                <p className="text-xs font-medium text-[var(--color-warning)]">Best for</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">Industrial operators, stranded energy deployments, and anyone maximizing hash per watt at scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASIC Manufacturers */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">ETChash ASIC Manufacturers</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            These manufacturers produce hardware purpose-built for ETChash.
          </p>
          <div className="mt-8">
            <OverviewTable
              heading="ASIC Manufacturers"
              rows={manufacturers.map((m) => ({
                label: `${m.name} — ${m.models}`,
                value: m.notes,
              }))}
            />
          </div>
          <div className="mt-4">
            <Link
              href="/mining/hardware/buy"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:underline"
            >
              Browse hardware &amp; buy links
              <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Dedicated vs Flexible Load */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)] md:text-3xl">Dedicated vs Flexible Load</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            How you operate matters as much as what hardware you run.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Dedicated Mining</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Always-on operations targeting maximum uptime. Best for stable, low-cost power contracts where curtailment isn&apos;t needed. Industrial ASIC farms typically operate this way — fixed capacity, predictable revenue, optimized power agreements.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-[var(--color-primary)]">+</span> Maximum hash output per installation</li>
                <li className="flex gap-2"><span className="text-[var(--color-primary)]">+</span> Simpler operations, minimal management overhead</li>
                <li className="flex gap-2"><span className="text-[var(--color-primary)]">+</span> Predictable revenue modeling</li>
                <li className="flex gap-2"><span className="text-[var(--color-error)]">−</span> Full exposure to power price spikes</li>
                <li className="flex gap-2"><span className="text-[var(--color-error)]">−</span> No ability to monetize grid flexibility services</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--panel)] p-8">
              <h3 className="text-lg font-bold text-[var(--text-primary)]">Flexible Load Mining</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">
                Operations that curtail mining during expensive grid hours and ramp up during cheap or stranded periods. Natural fit for co-located renewable energy, flared gas monetization, or grid-balancing contracts. The miner acts as a dispatchable load — valuable to grid operators.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-[var(--color-text-muted)]">
                <li className="flex gap-2"><span className="text-[var(--color-primary)]">+</span> Captures cheapest available energy</li>
                <li className="flex gap-2"><span className="text-[var(--color-primary)]">+</span> Grid services revenue potential (demand response)</li>
                <li className="flex gap-2"><span className="text-[var(--color-primary)]">+</span> Ideal for stranded/curtailed renewable sources</li>
                <li className="flex gap-2"><span className="text-[var(--color-error)]">−</span> Lower average uptime reduces gross hash output</li>
                <li className="flex gap-2"><span className="text-[var(--color-error)]">−</span> Requires automated monitoring and control systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Scale Considerations */}
      <section className="border-t border-[var(--border)] bg-[var(--panel)]/50 px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Scale Considerations</h2>
          <p className="mt-2 text-[var(--color-text-secondary)]">
            Each scale of operation has a distinct profile, cost structure, and pool strategy.
          </p>
          <div className="mt-8">
            <OverviewTable
              heading="Scale vs Strategy"
              rows={[
                { label: 'Home (1–5 units)', value: 'Pool mining, any hardware, residential power, start small' },
                { label: 'Small Farm (5–50 units)', value: 'Commercial power, dedicated mining OS, pool with low payout threshold' },
                { label: 'Mid-scale (50–500 units)', value: 'Direct power agreement, mixed ASIC+GPU, consider solo pool or private pool' },
                { label: 'Industrial (500+ units)', value: 'Dedicated infrastructure, ASIC-only, stranded energy co-location, treasury ops' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Decision Matrix */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">GPU vs ASIC Decision Matrix</h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <OverviewTable
              heading="GPU"
              rows={[
                { label: 'ETChash Efficiency', value: 'Moderate' },
                { label: 'Capital Cost', value: 'Low–Medium' },
                { label: 'Flexibility', value: 'High — multi-algorithm' },
                { label: 'Resale Value', value: 'Strong' },
                { label: 'Setup Complexity', value: 'Low' },
                { label: 'Minimum Scale', value: 'Single card' },
                { label: 'Noise / Heat', value: 'Moderate' },
                { label: 'Hardware Availability', value: 'Consumer retail, global' },
              ]}
            />
            <OverviewTable
              heading="ASIC"
              rows={[
                { label: 'ETChash Efficiency', value: 'Peak', color: 'green' },
                { label: 'Capital Cost', value: 'High' },
                { label: 'Flexibility', value: 'None — ETChash only' },
                { label: 'Resale Value', value: 'Low outside crypto' },
                { label: 'Setup Complexity', value: 'Low–Medium' },
                { label: 'Minimum Scale', value: 'Single unit' },
                { label: 'Noise / Heat', value: 'High — datacenter environment' },
                { label: 'Hardware Availability', value: 'Manufacturer direct / brokers' },
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[var(--color-primary)]/30 bg-[var(--color-primary)]/5 p-8 text-center">
            <h2 className="text-2xl font-bold text-[var(--text-primary)]">Ready to mine?</h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--color-text-secondary)]">
              Use the hardware guide to compare specific units, then the profitability calculator to model returns at your electricity rate.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/mining/hardware"
                className="inline-flex items-center gap-2 rounded-xl bg-[var(--color-primary)] px-6 py-3 font-medium text-[var(--background)] transition-all hover:opacity-90"
              >
                Hardware Guide
              </Link>
              <Link
                href="/mining/profitability"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Profitability Calculator
              </Link>
              <Link
                href="/mining/hardware/buy"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--color-primary)]/30"
              >
                Buy Hardware
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
