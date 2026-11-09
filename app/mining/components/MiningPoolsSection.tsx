import { FadeIn } from '@/app/components/ui'
import { fetchPoolHashrates } from '@/lib/pool-hashrate'
import { fetchHashrateTHs } from '@/lib/hashrate'
import { PoolsTable } from './PoolsTable'
import { poolRows } from '../data/pools'
import { HashrateDistributionNote } from '@/app/components/HashrateDistributionNote'

export async function MiningPoolsSection() {
  const [poolHashrates, networkTHs] = await Promise.all([
    fetchPoolHashrates(),
    fetchHashrateTHs(),
  ])

  const rows = poolRows(poolHashrates)

  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Mining Pools
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Mining Pools
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            Etchash pools mining Ethereum Classic, largest first, with hashrate estimated from recent blocks. Your
            choice of pool affects earnings variance, payout frequency and how much you depend on one operator.
          </p>
        </FadeIn>

        <FadeIn delay={60}>
          <div className="mt-6">
            <HashrateDistributionNote />
          </div>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-8">
            <PoolsTable pools={rows} networkTHs={networkTHs} />
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
