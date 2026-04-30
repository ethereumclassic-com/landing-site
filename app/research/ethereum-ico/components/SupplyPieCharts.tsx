'use client'

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { ETH_ICO_GENESIS_SUPPLY, ETH_ICO_ALLOCATION } from '@/app/research/data/ethereumIco'
import type { AssetSupply } from '@/lib/exchange-rates'

const ETC_MAX_SUPPLY = 210_700_000

function fmt(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}K`
  return n.toLocaleString()
}

type Slice = { name: string; value: number; color: string; pct: number }

function buildEtcSlices(supply: AssetSupply): Slice[] {
  const { crowdsale, foundation } = ETH_ICO_ALLOCATION
  const max = supply.max ?? ETC_MAX_SUPPLY
  const circulating = supply.circulating
  const emissions = Math.max(0, circulating - ETH_ICO_GENESIS_SUPPLY)
  const unmined   = Math.max(0, max - circulating)
  return [
    { name: 'ETH Foundation Crowdsale',  value: crowdsale,  color: 'var(--color-violet-border)',  pct: (crowdsale  / max) * 100 },
    { name: 'ETH Foundation / Contributors', value: foundation, color: 'var(--color-violet)',          pct: (foundation / max) * 100 },
    { name: 'Post-genesis Emissions (PoW)', value: emissions, color: 'var(--color-info-border)',    pct: (emissions  / max) * 100 },
    { name: 'Unmined Supply (210.7M Cap)', value: unmined,   color: 'var(--color-green-border)', pct: (unmined / max) * 100 },
  ]
}

function buildEthSlices(supply: AssetSupply): Slice[] {
  const { crowdsale, foundation } = ETH_ICO_ALLOCATION
  const total = supply.circulating
  const emissions = Math.max(0, total - ETH_ICO_GENESIS_SUPPLY)
  return [
    { name: 'ETH Foundation Crowdsale',       value: crowdsale,  color: 'var(--color-violet-border)',  pct: (crowdsale  / total) * 100 },
    { name: 'ETH Foundation / Contributors',      value: foundation, color: 'var(--color-violet)',          pct: (foundation / total) * 100 },
    { name: 'Post-genesis Emissions (PoW+PoS)', value: emissions, color: 'var(--color-info-border)',           pct: (emissions  / total) * 100 },
  ]
}

interface CustomTooltipProps {
  active?: boolean
  payload?: Array<{ name: string; value: number; payload: { color: string; pct: number } }>
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload?.length) return null
  const { name, value, payload: p } = payload[0]
  return (
    <div className="rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] px-3 py-2 text-xs shadow-lg">
      <p className="font-semibold text-[var(--text-primary)]">{name}</p>
      <p className="mt-0.5 text-[var(--text-muted)]">{fmt(value)} tokens ({p.pct.toFixed(1)}%)</p>
    </div>
  )
}

interface ChartProps {
  label: string
  sublabel: string | string[]
  slices: Slice[]
  ticker: string
  tickerColor: string
  uncapped?: boolean
}

function SinglePie({ label, sublabel, slices, ticker, tickerColor, uncapped = false }: ChartProps) {
  const sublabels = Array.isArray(sublabel) ? sublabel : [sublabel]
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="text-center">
        <p className="text-sm font-semibold text-[var(--text-primary)]">{label}</p>
        {sublabels.map((line, i) => (
          <p key={i} className="mt-0.5 font-mono text-xs text-[var(--text-muted)]">{line}</p>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={slices}
            cx="50%"
            cy="50%"
            innerRadius={55}
            outerRadius={85}
            paddingAngle={2}
            dataKey="value"
            strokeWidth={0}
          >
            {slices.map((s) => (
              <Cell key={s.name} fill={s.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fill={tickerColor} fontSize={16} fontWeight={700} fontFamily="monospace">
            {ticker}
          </text>
        </PieChart>
      </ResponsiveContainer>

      <div className="w-full space-y-1.5">
        {slices.map((s) => (
          <div key={s.name} className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-sm" style={{ backgroundColor: s.color }} />
              <span className="text-[var(--text-muted)]">{s.name}</span>
            </div>
            <span className="font-mono font-medium text-[var(--text-primary)]">
              {fmt(s.value)} <span className="text-[var(--text-muted)]">({s.pct.toFixed(1)}%)</span>
            </span>
          </div>
        ))}
        {uncapped && (
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <div className="h-2.5 w-2.5 rounded-sm border border-[var(--border-default)]" />
              <span className="text-[var(--text-muted)]">Uncapped Supply</span>
            </div>
            <span className="font-mono font-medium text-[var(--text-muted)]">∞ no cap</span>
          </div>
        )}
      </div>
    </div>
  )
}

interface Props {
  ethSupply: AssetSupply
  etcSupply: AssetSupply
}

export default function SupplyPieCharts({ ethSupply, etcSupply }: Props) {
  const etcMax = etcSupply.max ?? ETC_MAX_SUPPLY
  const etcSlices = buildEtcSlices(etcSupply)
  const ethSlices = buildEthSlices(ethSupply)

  return (
    <div className="mt-8">
      <h3 className="mb-1 text-sm font-semibold text-[var(--text-primary)]">Today&apos;s Circulating Supply</h3>
      <p className="mb-5 text-xs text-[var(--text-muted)]">
        Both chains share the same ICO genesis allocation. Post-genesis emissions diverge because they follow different monetary policies. ETH removed its supply cap after The Merge; ETC follows ECIP-1017&apos;s declining block reward schedule toward a ~210.7M cap.
      </p>
      <div className="grid gap-8 sm:grid-cols-2">
        <SinglePie
          label="Ethereum Classic — ETC Token Supply Composition"
          sublabel={[
            'Original chain · Created Jul 30, 2015',
            `${fmt(etcSupply.circulating)} ETC circulating / ${fmt(etcMax)} ETC cap`,
          ]}
          slices={etcSlices}
          ticker="ETC"
          tickerColor="var(--brand-green)"
        />
        <SinglePie
          label="Ethereum — ETH Token Supply Composition"
          sublabel={[
            'Fork chain · Created Jul 20, 2016',
            `${fmt(ethSupply.circulating)} ETH circulating · uncapped`,
          ]}
          slices={ethSlices}
          ticker="ETH"
          tickerColor="var(--color-violet)"
          uncapped
        />
      </div>
    </div>
  )
}
