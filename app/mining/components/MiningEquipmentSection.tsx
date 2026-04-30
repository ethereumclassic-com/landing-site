import { Cpu, Monitor } from 'lucide-react'
import { FadeIn } from '@/app/components/ui'

interface Equipment {
  name: string
  detail: string
  href: string
}

const asicMiners: Equipment[] = [
  { name: 'Bitmain',   detail: 'Antminer E11 (9 GH/s)',    href: 'https://www.bitmain.com' },
  { name: 'iPollo',    detail: 'V2 (10 GH/s)',             href: 'https://www.ipollo.com' },
  { name: 'Jasminer',  detail: 'X16-P (5.8 GH/s)',         href: 'https://www.jasminer.com' },
  { name: 'Bombax',    detail: 'EZ100 Pro (15.5 GH/s)',    href: 'https://bombaxminer.com' },
  { name: 'Anexminer', detail: 'ET7 (6 GH/s)',             href: 'https://anexminer.org' },
]

const gpuManufacturers: Equipment[] = [
  { name: 'NVIDIA', detail: 'GeForce RTX series, high-performance ETChash mining with CUDA cores',  href: 'https://www.nvidia.com' },
  { name: 'AMD',    detail: 'Radeon RX series, competitive ETChash performance and efficiency',       href: 'https://www.amd.com' },
  { name: 'Intel',  detail: 'Arc series GPUs, with emerging ETChash support',                        href: 'https://www.intel.com' },
]

function EquipmentCard({ item, icon: Icon }: { item: Equipment; icon: typeof Cpu }) {
  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)] p-5">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--brand-green-subtle)]">
            <Icon size={16} className="text-[var(--brand-green)]" />
          </div>
          <p className="text-sm font-semibold text-[var(--text-primary)]">{item.name}</p>
        </div>
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 font-mono text-[10px] text-[var(--text-subtle)] transition-colors hover:text-[var(--brand-green)]"
        >
          Website →
        </a>
      </div>
      <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted)]">{item.detail}</p>
    </div>
  )
}

export function MiningEquipmentSection() {
  return (
    <section className="border-y border-[var(--border-default)] py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--brand-green)]">
            Hardware
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[var(--text-primary)] md:text-3xl">
            Mining Equipment
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
            ETChash supports dedicated ASIC hardware and consumer GPU rigs, distributing hashrate
            across a broad base of independent operators. ASIC efficiency enables
            commercial-scale operations; GPU accessibility brings in global retail miners,
            together diversifying the security budget and reducing single-vendor supply chain risk.
          </p>
        </FadeIn>

        <div className="mt-8 space-y-8">
          <FadeIn delay={80}>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              ASIC Miners
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {asicMiners.map((item) => (
                <EquipmentCard key={item.name} item={item} icon={Cpu} />
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--brand-green)]">
              GPU Mining
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {gpuManufacturers.map((item) => (
                <EquipmentCard key={item.name} item={item} icon={Monitor} />
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
