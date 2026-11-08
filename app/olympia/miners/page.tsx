import Link from 'next/link'
import { ecipUrl } from '@/lib/olympia-ecips'
import { CURRENT_ERA, formatBlockReward, getBlockRewardForEra } from '@/app/research/data/emission'
import { fetchNetworkFees, formatShare } from '@/lib/network-fees'

// The fee share below is read from the chain; its series are daily, so hourly is current.
export const revalidate = 3600

/** How far ahead the reward schedule is shown, in eras. */
const ERAS_AHEAD = 4

const flywheelSteps = [
  { label: 'Funded development', desc: 'Olympia DAO would fund client maintenance and ecosystem programs from the Treasury, by proposals its members vote on.' },
  { label: 'More applications', desc: 'Funded development attracts builders, and their applications bring users.' },
  { label: 'More transactions', desc: 'Active applications generate activity on-chain, and blocks start to fill.' },
  { label: 'More fee revenue', desc: 'More transactions would pay more base fee to the Treasury and more priority fees to miners.' },
  { label: 'More miners', desc: 'Higher total revenue makes mining more profitable, and hashrate grows.' },
  { label: 'More security', desc: 'Higher hashrate raises the cost of a 51% attack, and trust in the network grows.' },
  { label: 'More trust', desc: 'A secure, active network draws institutional use and more builders.' },
]

export default async function MinersPage() {
  const fees = await fetchNetworkFees()
  const reward = getBlockRewardForEra(CURRENT_ERA)
  const nextReward = getBlockRewardForEra(CURRENT_ERA + 1)
  const laterReward = getBlockRewardForEra(CURRENT_ERA + ERAS_AHEAD)

  const revenueCards = [
    {
      label: 'Block Reward',
      value: `${formatBlockReward(reward)} ETC`,
      note: `Era ${CURRENT_ERA}, unchanged by Olympia`,
      color: 'var(--brand-green)',
    },
    {
      label: 'Uncle Reward',
      value: 'Standard',
      note: 'No changes to uncle reward structure',
      color: 'var(--brand-green)',
    },
    {
      label: 'Basefee Impact',
      value: fees ? `At most ${formatShare(fees.feeShare)}` : '—',
      note: fees
        ? `All fees together were this share of miner revenue over the last ${fees.days.length} days`
        : 'Live fee data is unavailable; Network Fees shows it when it returns',
      color: 'var(--color-warning)',
    },
    {
      label: 'Priority Fee',
      value: 'Kept by miners',
      note: 'Tips go directly to the miner',
      color: 'var(--brand-green)',
    },
  ]

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="hero-gradient-light noise-overlay grid-overlay relative overflow-hidden px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-24 lg:px-12">
        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4">
            <Link
              href="/olympia"
              className="text-sm text-[var(--brand-green)] transition hover:text-[var(--brand-green)]/80"
            >
              ← Olympia Hub
            </Link>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)] md:text-4xl lg:text-5xl">
            Miners &amp; Olympia
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--color-text-secondary)]">
            Block rewards and priority fees would stay with miners. Olympia proposes adding the EIP-1559
            base fee, the portion Ethereum burns, and crediting it to the Olympia Treasury.
          </p>
        </div>
      </section>

      {/* Revenue Impact */}
      <section className="px-6 pb-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Revenue Impact</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            Olympia changes fee handling, not block rewards. Here&apos;s what miners keep.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {revenueCards.map((card) => (
              <div key={card.label} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <p className="text-sm text-[var(--color-text-muted)]">{card.label}</p>
                <p className="mt-1 text-2xl font-bold" style={{ color: card.color }}>
                  {card.value}
                </p>
                <p className="mt-2 text-xs text-[var(--color-text-muted)]">{card.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why fees matter */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Why Fees Matter to Miners</h2>
          <p>
            Miner revenue has two parts: the block reward and transaction fees. The block reward falls 20%
            every 5,000,000 blocks under ECIP-1017: {formatBlockReward(reward)} ETC in era {CURRENT_ERA},{' '}
            {formatBlockReward(nextReward)} ETC in era {CURRENT_ERA + 1}, and {formatBlockReward(laterReward)} ETC
            in era {CURRENT_ERA + ERAS_AHEAD}.
          </p>
          <p>
            In a healthy fee market, rising fee income offsets the falling block reward as the network grows.
            Bitcoin is designed to work this way: fees take over as the block subsidy falls.
          </p>
          <p>
            {fees
              ? `On Ethereum Classic, fees were ${formatShare(fees.feeShare)} of miner revenue over the last ${fees.days.length} days. `
              : 'How much of miner revenue fees make up on Ethereum Classic is read from the chain on the fees page. '}
            <Link href="/mining/fees" className="font-medium text-[var(--brand-green)] hover:underline">
              Network fees →
            </Link>
          </p>
          <p className="font-medium text-[var(--text-primary)]">
            Without fee revenue, the long-term security of a Proof-of-Work chain rests on a subsidy scheduled
            to shrink. Miners leave a network that cannot pay them, and a network without miners has no
            Proof-of-Work security.
          </p>
        </div>
      </section>

      {/* The funding problem */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">The Funding Problem</h2>
          <p>
            Fee revenue grows when the network is used, and use grows with funded development: maintained
            clients, EVM upgrades, tooling, and support for the builders who deploy on Ethereum Classic.
          </p>
          <p>
            That development has depended on organizations funded by donors and grants, with no guaranteed
            continuity. The ETC Cooperative funded client development for years and is winding down. When
            funding stops, development slows, builders go elsewhere, and blocks stay empty.
          </p>
          <p>
            Miners have kept the chain secure throughout. They are economic actors, and the current model
            pays them a block reward that shrinks on a fixed schedule, with nothing that grows fee revenue.
          </p>
        </div>
      </section>

      {/* Olympia's answer */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Olympia&apos;s Answer</h2>
          <div className="mt-4 space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
            <p>
              Olympia would add the EIP-1559 base fee to Ethereum Classic and credit it to the Olympia
              Treasury, where Ethereum burns it. Treasury income would be small while blocks are nearly empty,
              and would grow with use of the network.
            </p>
            <p>
              Olympia DAO would fund development from it by on-chain proposals: client maintenance, network
              security, infrastructure and ecosystem growth, paid for by the network&apos;s own use rather than
              by donations.
            </p>
          </div>

          <div className="mt-8 rounded-xl border border-[var(--brand-green)]/20 bg-[var(--brand-green)]/5 p-6">
            <h3 className="text-sm font-semibold text-[var(--brand-green)]">Fee Flow After Olympia</h3>
            <div className="mt-4 space-y-3 text-sm text-[var(--color-text-muted)]">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--brand-green)]" />
                <span>Block reward ({formatBlockReward(reward)} ETC) → Miner, unchanged</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--brand-green)]" />
                <span>Priority fee (tip) → Miner, unchanged</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-warning)]" />
                <span>Base fee → Olympia Treasury (burned on Ethereum)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The flywheel */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">The Flywheel</h2>
          <p className="mt-2 text-[var(--color-text-muted)]">
            A funded protocol creates a self-reinforcing loop. Each step enables the next.
          </p>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flywheelSteps.map((step, i) => (
              <li key={step.label} className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand-green)]/10 font-mono text-xs font-bold text-[var(--brand-green)]">
                  {i + 1}
                </span>
                <p className="mt-3 font-semibold text-[var(--text-primary)]">{step.label}</p>
                <p className="mt-1 text-sm text-[var(--color-text-muted)]">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* The miner's stake */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">The Miner&apos;s Stake</h2>
          <p>
            Block rewards would be unchanged, and priority fees would go to miners. The base fee, which
            Ethereum burns, would pay for the development that brings use, and with it fee revenue, to
            Ethereum Classic.
          </p>
          <p>
            Under Olympia, every transaction would pay a base fee to the Treasury and a priority fee to the
            miner who includes it.
            A network whose transaction volume does not grow while its block reward keeps falling is not a
            long-term security model. It is a slow exit.
          </p>
          <p className="font-medium text-[var(--text-primary)]">
            Olympia would tie the funding of Ethereum Classic&apos;s development to the interests of the miners
            who secure it.
          </p>
        </div>
      </section>

      {/* Paying miners from base-fee revenue */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto max-w-3xl space-y-4 text-sm leading-relaxed text-[var(--color-text-muted)]">
          <h2 className="text-2xl font-bold text-[var(--text-primary)]">Paying Miners From Base-Fee Revenue</h2>
          <p>
            Two further ECIPs concern paying miners from that revenue, and neither changes the Olympia fork.{' '}
            <a href={ecipUrl(1115)} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--brand-green)] hover:underline">
              ECIP-1115
            </a>{' '}
            would do it through ordinary funding proposals, spreading what blocks&apos; base fees raised across a
            window. No base fee is redirected by it, and nothing is owed to anyone until a proposal passes.
          </p>
          <p>
            <a href={ecipUrl(1116)} target="_blank" rel="noopener noreferrer" className="font-medium text-[var(--brand-green)] hover:underline">
              ECIP-1116
            </a>{' '}
            would pay a smoothed share at the consensus layer instead. It is a separate hard fork after Olympia,
            scheduled only once ECIP-1115 has demonstrated a curve.
          </p>
        </div>
      </section>

      {/* CTAs */}
      <section className="border-t border-[var(--border)] px-6 py-16 md:px-10 lg:px-12">
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-4">
          <Link
            href="/olympia/clients"
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--brand-green)] px-6 py-3 font-medium text-[var(--brand-green-foreground)] transition-all hover:bg-[var(--brand-green)]/90"
          >
            View Clients
          </Link>
          <Link
            href="/mining/fees"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5"
          >
            Network Fees
          </Link>
          <Link
            href="/block-reward-countdown"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5"
          >
            Fifthing Countdown
          </Link>
          <Link
            href="/mining"
            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--panel)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:border-[var(--border-brand)] hover:bg-[var(--brand-green)]/5"
          >
            Mining Hub
          </Link>
        </div>
      </section>
    </main>
  )
}
