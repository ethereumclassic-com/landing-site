'use client'

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react'
import type { NetworkStats, RecentBlock } from '@/app/hooks/useNetworkStats'
import { networkStatsFromPayload } from '@/lib/network-stats'

interface NetworkStatsContextValue {
  stats: NetworkStats | null
  blocks: RecentBlock[]
  loading: boolean
  error: string | null
  lastUpdated: Date | null
  refresh: () => Promise<void>
}

const NetworkStatsContext = createContext<NetworkStatsContextValue | null>(null)

const REFRESH_INTERVAL_MS = 600_000

export function NetworkStatsProvider({ children }: { children: React.ReactNode }) {
  const [stats, setStats] = useState<NetworkStats | null>(null)
  const [blocks, setBlocks] = useState<RecentBlock[]>([])
  // True from the first render: this provider fetches on mount, so `false`
  // was never an accurate initial value — it forced a second render to correct
  // itself. With it true, fetchStats's own setLoading(true) is a no-op React
  // bails out of, so the mount path now costs one render instead of two.
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)
  const mountedRef = useRef(true)

  const fetchStats = useCallback(async () => {
    if (!mountedRef.current) return
    setLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/network')
      if (!response.ok) throw new Error(`${response.status}`)
      const data = await response.json()
      if (!mountedRef.current) return
      const mapped: NetworkStats = networkStatsFromPayload(data)
      setStats(mapped)
      setBlocks(data.blocks ?? [])
      setLastUpdated(new Date())
    } catch (err) {
      if (mountedRef.current) {
        setError(err instanceof Error ? err.message : 'Failed to fetch')
      }
    } finally {
      if (mountedRef.current) setLoading(false)
    }
  }, [])

  useEffect(() => {
    mountedRef.current = true
    // Scheduled rather than called inline. fetchStats sets state before its
    // first await, and running it in the effect body would land that update
    // inside the same commit — the cascading render the lint rule guards
    // against. A microtask keeps one shared fetch for the mount, interval and
    // manual-refresh paths instead of forking it three ways.
    queueMicrotask(fetchStats)
    const timer = setInterval(fetchStats, REFRESH_INTERVAL_MS)
    return () => {
      mountedRef.current = false
      clearInterval(timer)
    }
  }, [fetchStats])

  return (
    <NetworkStatsContext.Provider value={{ stats, blocks, loading, error, lastUpdated, refresh: fetchStats }}>
      {children}
    </NetworkStatsContext.Provider>
  )
}

export function useNetworkStatsContext(): NetworkStatsContextValue {
  const ctx = useContext(NetworkStatsContext)
  if (!ctx) throw new Error('useNetworkStatsContext must be used within NetworkStatsProvider')
  return ctx
}
