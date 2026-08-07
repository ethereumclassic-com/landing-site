import Link from 'next/link'
import { FadeIn } from '@/app/components/ui/FadeIn'
import { SectionDivider } from '@/app/components/ui'
import DifficultyChart from '@/app/components/charts/DifficultyChart'
import { fetchNetworkNow, fetchAllHashrateHistories } from '@/lib/hashrate'

// One upstream read per hour, shared by every visitor, rather than one per load.
export const revalidate = 3600

export default async function DifficultyPage() {
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
              Network Difficulty
            </h1>
            <p className="mt-4 max-w-2xl text-[var(--color-text-muted)]">
              Difficulty is the target every Ethereum Classic miner is working
              against. It rises when more hashrate joins and falls when hashrate
              leaves, holding the average block time steady in both directions.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-10 md:px-10 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <FadeIn delay={100}>
            <DifficultyChart
              data={{
                currentDifficultyPH: now.difficultyPH,
                currentTHs: now.hashrateTHs,
                blockTimeSeconds: now.blockTimeSeconds,
                histories,
              }}
            />
            <p className="mt-3 font-mono text-[10px] text-[var(--color-text-muted)]">
              {now.live
                ? `Difficulty read from Blockscout at block ${now.height.toLocaleString()}. Block time is Blockscout's own rolling average.`
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
              How difficulty works on Ethereum Classic
            </h2>

            <div className="mt-6 space-y-6 text-[var(--color-text-muted)]">
              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  It is a target, not a measurement
                </h3>
                <p className="mt-2">
                  Mining a block means finding a hash below a threshold. Difficulty
                  sets that threshold. A difficulty of {now.difficultyPH.toFixed(2)}{' '}
                  PH means the network expects roughly{' '}
                  {(now.difficultyPH * 1e15).toExponential(2)} hash attempts before
                  one succeeds. Nobody chooses this number directly — the protocol
                  adjusts it.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  It adjusts every block
                </h3>
                <p className="mt-2">
                  ETC retunes difficulty on every block rather than on a fixed
                  schedule. If blocks are arriving faster than the target, difficulty
                  rises; if slower, it falls. This is why block time stays near its
                  target while hashrate moves freely, and why a hashrate spike shows
                  up as a difficulty rise a short time later.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Hashrate is derived from it
                </h3>
                <p className="mt-2">
                  Network hashrate cannot be measured directly — no one can count
                  the hashes every miner tries. It is inferred: difficulty divided
                  by average block time. That is why the hashrate figure on this
                  site moves with difficulty, and why the two charts share a shape.
                </p>
                <p className="mt-2">
                  <Link
                    href="/mining/hashrate"
                    className="text-[var(--brand-green)] underline underline-offset-4"
                  >
                    How network hashrate is calculated
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  What it means if you mine
                </h3>
                <p className="mt-2">
                  Your share of block rewards is your hashrate divided by the
                  network&apos;s. Rising difficulty at a constant block reward means
                  the same hardware earns less ETC per day. Difficulty is therefore
                  the variable that moves mining revenue between fifthings, when the
                  block reward itself is fixed.
                </p>
                <p className="mt-2">
                  <Link
                    href="/mining/profitability"
                    className="text-[var(--brand-green)] underline underline-offset-4"
                  >
                    Estimate earnings at current difficulty
                  </Link>
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-[var(--text-primary)]">
                  Difficulty and security
                </h3>
                <p className="mt-2">
                  Difficulty is the direct cost of rewriting history. Reorganizing
                  the chain means redoing the accumulated work of every block being
                  replaced, so a higher sustained difficulty raises the price of an
                  attack in proportion.
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
              Related
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: '/mining/hashrate',
                  title: 'Network Hashrate',
                  body: 'Live hashrate charts and how the figure is derived.',
                },
                {
                  href: '/mining/stats',
                  title: 'Network Stats',
                  body: 'Block height, emission, daily metrics and pool share.',
                },
                {
                  href: '/mining/profitability',
                  title: 'Profitability',
                  body: 'Estimate returns for your hardware at current difficulty.',
                },
                {
                  href: '/mining/pools',
                  title: 'Mining Pools',
                  body: 'Pool comparison, fees, payout thresholds and share.',
                },
                {
                  href: '/block-reward-countdown',
                  title: 'Block Reward Countdown',
                  body: 'Time and blocks remaining until the next fifthing.',
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
