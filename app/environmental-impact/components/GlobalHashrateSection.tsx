import { FadeIn } from '@/app/components/ui'
import HashrateChart from '@/app/components/homepage/HashrateChart'
import { fetchHashrateTHs, fetchAllHashrateHistories } from '@/lib/hashrate'

export async function GlobalHashrateSection() {
  const [hashrateTHs, histories] = await Promise.all([
    fetchHashrateTHs(),
    fetchAllHashrateHistories(),
  ])

  return (
    <section className="section-gradient border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
            Energy Demand Signal
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Global Network Hashrate
          </h2>
          <div className="mt-4 space-y-3">
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Hashrate is the direct measure of the energy Ethereum Classic&rsquo;s mining network
              consumes globally. Every terahash per second represents real electricity, real
              hardware, and real capital deployed by independent actors across every time zone. When hashrate rises, the network is absorbing more energy from the global supply, by choice and at
              market price, wherever that energy is cheapest. When it falls, miners
              curtail and that capacity returns to the grid.
            </p>
            <p className="text-sm leading-relaxed text-[var(--text-muted)]">
              Ethereum&rsquo;s 2022 move to Proof-of-Stake sent much of its mining hardware, worth hundreds of
              millions of dollars, to Ethereum Classic. The hashrate chart below shows that jump: a discrete,
              measurable event that changed the scale of ETC&rsquo;s energy footprint and security budget.
              Among mature smart contract platforms, only ETC had kept Proof-of-Work consensus to receive it.
            </p>
          </div>
        </FadeIn>

        {/* Live stat */}
        <FadeIn delay={100}>
          <div className="mt-10 flex items-end gap-4">
            <div>
              <p className="font-mono text-4xl font-bold text-[var(--brand-green)]">
                {hashrateTHs !== null ? hashrateTHs.toFixed(1) : '—'}{' '}
                {hashrateTHs !== null && <span className="text-lg font-normal">TH/s</span>}
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                Current Network Hashrate
              </p>
              <p className="mt-0.5 text-xs text-[var(--text-subtle)]">
                Updated hourly · Derived from Blockscout block data
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Hashrate chart */}
        <FadeIn delay={180}>
          <HashrateChart initial={{ currentTHs: hashrateTHs, histories }} />
        </FadeIn>

        {/* Source note */}
        <FadeIn delay={260}>
          <p className="mt-6 text-xs italic text-[var(--text-subtle)]">
            Hashrate is derived from block difficulty and Blockscout&apos;s average block time, and its history
            from on-chain block difficulty and block times, also via Blockscout.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
