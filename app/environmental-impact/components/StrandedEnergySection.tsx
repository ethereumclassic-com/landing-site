import { FadeIn } from '@/app/components/ui'

const useCases = [
  {
    title: 'Remote Hydroelectric',
    description:
      'Mountain rivers and remote streams produce power with no transmission link to population centers. Mining hardware shipped to site earns revenue from day one, with no grid connection required.',
  },
  {
    title: 'Flared Gas / Wellhead Gas',
    description:
      'Associated gas at oil wells is routinely flared due to lack of pipelines. Containerized mining at the wellhead converts otherwise wasted BTUs into economic output while reducing methane emissions.',
  },
  {
    title: 'Curtailed Wind & Solar',
    description:
      'Renewables regularly produce more power than grids can absorb. Mining provides elastic demand that absorbs curtailment, improving project economics and accelerating renewable deployment.',
  },
  {
    title: 'Off-Peak Industrial Power',
    description:
      'Industrial facilities carry transmission fees for peak capacity 24/7. Mining during off-peak hours uses contracted-but-unused capacity, reducing effective energy costs.',
  },
  {
    title: 'Landfill Gas',
    description:
      'Decomposing waste produces methane continuously. Mining at landfill sites monetizes gas that would otherwise be vented or burned, turning waste infrastructure into revenue-generating assets.',
  },
  {
    title: 'Geothermal',
    description:
      'Geothermal resources in seismically active regions (Iceland, Kenya, Indonesia) often lack transmission to major markets. PoW mining is the natural first customer.',
  },
]

export function StrandedEnergySection() {
  return (
    <section className="section-alt border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Stranded Energy
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Stranded Energy: The Global Opportunity
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            Proof-of-Work mining is one of the few industries that can physically relocate to where
            energy is stranded. The traditional alternative &mdash; building transmission
            infrastructure &mdash; costs hundreds of millions of dollars per mile and takes years to
            permit. Mining hardware can be containerized, shipped, and operational in weeks. Remote
            hydro with no transmission line, gas that would be flared at the wellhead, renewables
            that overproduce at night: PoW mining converts all of it into economic output without
            laying a single cable.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">
            The thesis applies to any PoW network with three properties: deep enough liquidity to
            offer confident price discovery in local currencies, accessible enough hardware that
            small and large deployments are both viable, and a long enough operating history that
            energy project financiers can model mining revenue as a predictable cash flow. ETC has
            reached that stage &mdash; ten years of continuous operation, fiat pairs across major
            energy markets, and GPU-to-ASIC hardware coverage from pilot scale to industrial.
          </p>
        </FadeIn>

        {/* Documentary callout */}
        <FadeIn delay={60}>
          <a
            href="https://www.dirtycointhemovie.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex flex-col items-start gap-5 rounded-xl border border-[var(--brand-green)] bg-[var(--bg-elevated)] p-6 transition-colors hover:border-[var(--brand-green)] sm:flex-row"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)] text-xl">
              🎬
            </div>
            <div className="flex-1">
              <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--brand-green)]">
                Featured Documentary
              </p>
              <p className="mt-1 text-base font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--brand-green)]">
                Dirty Coin: The Bitcoin Mining Documentary
              </p>
              <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)]">
                69 minutes. Filmed over three years across four continents, from rural Texas to the
                mountains of Malawi. Director Alana Mediavilla documents how Proof-of-Work mining is
                reshaping energy economics and creating socio-economic opportunity in communities
                that the traditional grid has never reached. Winner, Best National Documentary,
                Puerto Rico Film Festival 2025.
              </p>
              <p className="mt-3 text-xs font-medium text-[var(--brand-green)]">
                dirtycointhemovie.com →
              </p>
            </div>
          </a>
        </FadeIn>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u, i) => (
            <FadeIn key={u.title} delay={i * 80}>
              <div className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-6 transition-all duration-200 hover:border-[var(--brand-green)]/40 hover:-translate-y-0.5">
                <p className="text-sm font-semibold text-[var(--text-primary)]">{u.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-[var(--text-muted)]">
                  {u.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
