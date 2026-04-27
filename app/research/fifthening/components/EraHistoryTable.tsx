'use client'

import { useState } from 'react'
import { eraTableData } from '../data/fiftheningChartData'

interface EraHistoryTableProps {
  blocksRemaining: number | null
  progress: number
  currentBlock: number | null
  loading: boolean
  expectedDate: string
}

type Tab = 'history' | 'current' | 'future'

export default function EraHistoryTable({
  blocksRemaining,
  progress,
  currentBlock,
  loading,
  expectedDate,
}: EraHistoryTableProps) {
  const [activeTab, setActiveTab] = useState<Tab>('history')

  const pastEras = eraTableData.filter((e) => e.isPast)
  const currentEra = eraTableData.find((e) => e.isCurrent)
  const futureEras = eraTableData.filter((e) => !e.isPast && !e.isCurrent)

  const tabs: { id: Tab; label: string; badge?: string }[] = [
    { id: 'history', label: 'History', badge: `${pastEras.length} eras` },
    { id: 'current', label: 'Current Era', badge: 'Live' },
    { id: 'future', label: 'Future', badge: `${futureEras.length} eras` },
  ]

  return (
    <div className="rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]">
      {/* Tab bar */}
      <div className="flex border-b border-[var(--border-default)]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-5 py-3.5 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? 'border-b-2 border-[var(--brand-green)] text-[var(--brand-green)]'
                : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className={`rounded-full px-1.5 py-0.5 text-xs ${
                tab.id === 'current'
                  ? 'bg-[var(--brand-green)]/15 text-[var(--brand-green)]'
                  : 'bg-[var(--border-subtle)] text-[var(--text-muted)]'
              }`}>
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* History tab */}
      {activeTab === 'history' && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[var(--border-default)]">
                {['Era', 'Block Range', 'Date', 'Block Reward', 'Era Emission', 'Total Supply'].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pastEras.map((era) => (
                <tr key={era.number} className="border-b border-[var(--border-subtle)] last:border-0">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-[var(--text-primary)]">Era {era.number}</span>
                      <span className="rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-xs text-emerald-400">Complete</span>
                    </div>
                    {era.event && <p className="mt-0.5 text-xs text-[var(--text-muted)]">{era.event}</p>}
                  </td>
                  <td className="px-4 py-3 font-mono text-xs text-[var(--text-muted)]">
                    {(era.startBlock).toLocaleString()}–{(era.endBlock).toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-[var(--text-muted)]">{era.date}</td>
                  <td className="px-4 py-3 font-mono text-[var(--text-primary)]">{era.blockReward} ETC</td>
                  <td className="px-4 py-3 font-mono text-[var(--text-muted)]">{(era.eraSupply / 1_000_000).toFixed(2)}M ETC</td>
                  <td className="px-4 py-3 font-mono text-[var(--text-muted)]">{(era.totalSupply / 1_000_000).toFixed(2)}M ETC</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Current era tab */}
      {activeTab === 'current' && currentEra && (
        <div className="p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">Era 5</h3>
                <span className="flex items-center gap-1.5 rounded-full bg-[var(--brand-green)]/15 px-2 py-0.5 text-xs font-medium text-[var(--brand-green)]">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brand-green)] opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brand-green)]" />
                  </span>
                  Live
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Blocks {currentEra.startBlock.toLocaleString()} — {currentEra.endBlock.toLocaleString()}
              </p>
            </div>
            <div className="text-right text-sm">
              <p className="text-[var(--text-muted)]">Block reward</p>
              <p className="font-mono text-lg font-semibold text-[var(--text-primary)]">2.048 ETC</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6">
            <div className="mb-2 flex items-center justify-between text-xs text-[var(--text-muted)]">
              <span>Era 5 progress</span>
              <span className="font-mono text-[var(--text-primary)]">{progress.toFixed(2)}%</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[var(--border-subtle)]">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--brand-green)]/60 to-[var(--brand-green)] transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Stats grid */}
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              {
                label: 'Blocks Remaining',
                value: loading ? '—' : (blocksRemaining?.toLocaleString() ?? '—'),
                mono: true,
              },
              {
                label: 'Current Block',
                value: loading ? '—' : (currentBlock?.toLocaleString() ?? '—'),
                mono: true,
              },
              {
                label: 'Expected Transition',
                value: expectedDate,
                mono: false,
              },
              {
                label: 'Next Reward',
                value: '1.6384 ETC',
                mono: true,
              },
            ].map((stat) => (
              <div key={stat.label} className="rounded-lg border border-[var(--border-default)] bg-[var(--background)] p-3">
                <p className="text-xs text-[var(--text-muted)]">{stat.label}</p>
                <p className={`mt-1 text-sm font-semibold text-[var(--text-primary)] ${stat.mono ? 'font-mono' : ''}`}>
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Future tab */}
      {activeTab === 'future' && (
        <div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border-default)]">
                  {['Era', 'Block Range', 'Est. Date', 'Block Reward', 'Era Emission', 'Total Supply'].map((h) => (
                    <th key={h} className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {futureEras.map((era) => (
                  <tr key={era.number} className="border-b border-[var(--border-subtle)] last:border-0 opacity-70">
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-[var(--text-muted)]">Era {era.number}</span>
                        <span className="rounded-full bg-[var(--border-subtle)] px-1.5 py-0.5 text-xs text-[var(--text-muted)]">Projected</span>
                      </div>
                      {era.event && <p className="mt-0.5 text-xs text-[var(--text-muted)]">{era.event}</p>}
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-[var(--text-muted)]">
                      {(era.startBlock).toLocaleString()}–{(era.endBlock).toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-[var(--text-muted)]">{era.date}</td>
                    <td className="px-4 py-3 font-mono text-[var(--text-muted)]">{era.blockReward.toFixed(4).replace(/\.?0+$/, '')} ETC</td>
                    <td className="px-4 py-3 font-mono text-[var(--text-muted)]">{(era.eraSupply / 1_000_000).toFixed(2)}M ETC</td>
                    <td className="px-4 py-3 font-mono text-[var(--text-muted)]">{(era.totalSupply / 1_000_000).toFixed(2)}M ETC</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="border-t border-[var(--border-subtle)] px-4 py-3 text-xs text-[var(--text-muted)]">
            Dates estimated at 13s average block time. Actual dates will vary with network conditions.
          </p>
        </div>
      )}
    </div>
  )
}
