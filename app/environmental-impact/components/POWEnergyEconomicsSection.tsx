import { Zap, Anchor, Wind, Globe } from 'lucide-react'
import { FadeIn } from '@/app/components/ui'

const items = [
  {
    icon: Zap,
    title: 'Grid Stabilization',
    description:
      'Miners are unusually flexible electricity consumers: they can ramp up or curtail in seconds. Grid operators increasingly contract with miners as demand-response resources, which helps balance intermittent renewable output.',
  },
  {
    icon: Anchor,
    title: 'Buyer of Last Resort',
    description:
      'Remote hydro installations, stranded wind farms, and off-peak power plants often produce electricity with no buyer. PoW mining creates a mobile, shippable, always-on buyer that can co-locate with any power source, anywhere in the world.',
  },
  {
    icon: Wind,
    title: 'Methane Conversion',
    description:
      'Oil fields and landfills vent or flare methane, a greenhouse gas 80× more potent than CO₂ over 20 years. Mining operations deployed at wellheads convert methane to CO₂ via combustion, reducing overall climate impact while generating economic returns from what was previously waste.',
  },
  {
    icon: Globe,
    title: 'Bootstrapping Remote Grids',
    description:
      'In regions lacking transmission infrastructure, PoW mining provides the initial anchor customer that makes grid construction economically viable. Energy production scales with mining revenue until local demand develops.',
  },
]

export function POWEnergyEconomicsSection() {
  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Energy Economics
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            How PoW Transforms Energy Markets
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Proof-of-Work mining takes part in energy markets as well as drawing on them. Traditional
            industrial consumers sign long-term offtake agreements, build fixed infrastructure and require
            stable, predictable delivery. Miners are different: hardware is modular, operations can
            relocate, and curtailment is nearly instantaneous, so they can respond to real-time price
            signals as few other industrial consumers can.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            This flexibility creates value beyond the miner. Renewable projects that struggle to secure
            financing, because curtailment makes their unit economics unpredictable, gain a buyer for the
            output the grid cannot absorb. Because miners are indifferent to the energy source,
            Proof-of-Work demand is available wherever power is generated, not only where it is convenient
            to deliver.
          </p>
        </FadeIn>

        <div className="mt-12 space-y-8">
          {items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 80}>
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
                  <item.icon size={20} className="text-[var(--brand-green)]" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[var(--text-primary)]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
