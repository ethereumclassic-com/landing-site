import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { SectionDivider } from '@/app/components/ui'
import HashrateChart from '@/app/components/homepage/HashrateChart'
import { HashrateDistributionNote } from '@/app/components/HashrateDistributionNote'
import { fetchNetworkNow, fetchAllHashrateHistories } from '@/lib/hashrate'

// One upstream read per hour, shared by every visitor, rather than one per load.
export const revalidate = 3600

export default async function HashratePage() {
  const [now, histories] = await Promise.all([
    fetchNetworkNow(),
    fetchAllHashrateHistories(),
  ])

  return (
    <main className="min-h-screen">
      <section className="px-6 pt-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <p className="font-mono text-[11px] uppercase tracking-widest text-[var(--brand-green)]">
              Mining
            </p>
            <h1 className="mt-3 text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
              Network Hashrate
            </h1>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Hashrate is the total computational work securing Ethereum Classic.
              It is the clearest single measure of how expensive the chain is to
              attack — and it is an estimate, not a reading.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-10 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={100}>
            <HashrateChart
              initial={{ currentTHs: now.hashrateTHs, histories }}
            />
            <p className="mt-3 font-mono text-[10px] text-[var(--color-text-muted)]">
              {now.live
                ? `Derived from Blockscout difficulty at block ${now.height.toLocaleString()}, divided by Blockscout's reported average block time of ${now.blockTimeSeconds.toFixed(2)}s.`
                : 'Live data unavailable — showing reference values. Figures will update when Blockscout is reachable.'}
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-semibold text-[var(--text-primary)]">
              How network hashrate works on Ethereum Classic
            </h2>

            <div className="mt-6 space-y-6 text-[var(--color-text-muted)]">
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Nobody measures it — everybody estimates it
                </h3>
                <p className="mt-2">
                  There is no way to count the hashes miners try. Failed attempts
                  are never broadcast; only winning blocks are. Every hashrate
                  figure published anywhere, including this one, is inferred from
                  what the chain does reveal.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  The estimate is difficulty ÷ block time
                </h3>
                <p className="mt-2">
                  Difficulty states how much work a block is expected to take.
                  Average block time states how long blocks are actually taking.
                  Divide one by the other and you get work per second — the
                  hashrate. This site uses{' '}
                  <span className="font-mono text-[var(--text-primary)]">
                    difficulty ÷ average block time
                  </span>
                  , with both values taken from Blockscout at the same block, so
                  the figure here matches what the explorer reports.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Which is why short-window numbers are noisy
                </h3>
                <p className="mt-2">
                  Block times vary randomly even at constant hashrate — mining is a
                  memoryless process, so a run of fast or slow blocks is ordinary
                  luck rather than a change in participation. A figure computed
                  over a short window inherits that noise. Longer timeframes on the
                  chart above are meaningfully steadier than the 7-day view.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  ETChash, and what hardware qualifies
                </h3>
                <p className="mt-2">
                  ETC mines with ETChash (ECIP-1099), which uses a smaller DAG than
                  Ethash did. That keeps the chain mineable on GPUs with less
                  memory, alongside ASICs built for it. Hashrate figures are
                  therefore a mix of both classes of hardware.
                </p>
                <p className="mt-2">
                  <Link
                    href="/mining/hardware"
                    className="text-[var(--brand-green)] underline underline-offset-4"
                  >
                    Compare mining hardware
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Hashrate and security
                </h3>
                <p className="mt-2">
                  Rewriting confirmed history requires out-pacing the honest
                  network, so the cost of an attack scales with hashrate. This is
                  the sense in which hashrate is a security budget rather than a
                  performance statistic — it is what an attacker would have to
                  rent or buy.
                </p>
                <p className="mt-2">
                  Concentration matters alongside the total. A high figure spread
                  across many independent pools is a stronger position than the
                  same figure concentrated in one.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Hashrate and your earnings
                </h3>
                <p className="mt-2">
                  Your share of blocks is your hashrate divided by the
                  network&apos;s. When network hashrate rises and the block reward
                  is unchanged, the same hardware earns proportionally less. The
                  reward itself steps down 20% every 5,000,000 blocks under
                  ECIP-1017.
                </p>
                <p className="mt-2">
                  <Link
                    href="/block-reward-countdown"
                    className="text-[var(--brand-green)] underline underline-offset-4"
                  >
                    Time until the next reward reduction
                  </Link>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-5 text-xl font-semibold text-[var(--text-primary)]">
              Hashrate distribution
            </h2>
            <HashrateDistributionNote />
          </FadeIn>
        </div>
      </section>

      <SectionDivider />

      <section className="px-6 py-12 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn>
            <h2 className="mb-5 text-xl font-semibold text-[var(--text-primary)]">
              Related
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: '/mining/difficulty',
                  title: 'Network Difficulty',
                  body: 'The target hashrate is derived from, and its history.',
                },
                {
                  href: '/mining/stats',
                  title: 'Network Stats',
                  body: 'Block height, emission, daily metrics and pool share.',
                },
                {
                  href: '/mining/pools',
                  title: 'Mining Pools',
                  body: 'Pool comparison, fees, payout thresholds and share.',
                },
                {
                  href: '/mining/profitability',
                  title: 'Profitability',
                  body: 'Estimate returns for your hardware at current rates.',
                },
                {
                  href: '/mining/hardware',
                  title: 'Hardware',
                  body: 'GPUs and ASICs that mine ETChash, with efficiency.',
                },
                {
                  href: '/mining/getting-started',
                  title: 'Start Mining',
                  body: 'Hardware, software and pool setup for ETC.',
                },
              ].map((c) => (
                <Link
                  key={c.href}
                  href={c.href}
                  className="rounded-xl border border-[var(--border-default)] bg-[var(--panel)] p-5 transition-colors hover:border-[var(--brand-green)]"
                >
                  <p className="font-semibold text-[var(--text-primary)]">{c.title}</p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">{c.body}</p>
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  )
}
