'use client'

import { useState, useEffect, useMemo } from 'react'
import { useNetworkStats } from '@/app/hooks/useNetworkStats'
import { OLYMPIA_ACTIVATION_BLOCK, OLYMPIA_AVG_BLOCK_TIME_SECONDS } from '../data/olympia'

export type CountdownStatus = 'tbd' | 'pending' | 'activated'

export interface CountdownTime {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface UseOlympiaBlockReturn {
  status: CountdownStatus
  activationBlock: number | null
  currentBlock: number | null
  blocksRemaining: number | null
  progress: number // 0-100
  countdown: CountdownTime | null
  loading: boolean
}

export function useOlympiaBlock(): UseOlympiaBlockReturn {
  const { stats, loading: networkLoading } = useNetworkStats({ refreshInterval: 30000 })

  const currentBlock = stats?.totalBlocks ?? null

  const initialState = useMemo(() => {
    if (OLYMPIA_ACTIVATION_BLOCK === null) {
      return { status: 'tbd' as const, blocksRemaining: null, progress: 0, totalSeconds: 0 }
    }

    if (currentBlock === null) {
      return { status: 'pending' as const, blocksRemaining: null, progress: 0, totalSeconds: 0 }
    }

    const remaining = OLYMPIA_ACTIVATION_BLOCK - currentBlock
    if (remaining <= 0) {
      return { status: 'activated' as const, blocksRemaining: 0, progress: 100, totalSeconds: 0 }
    }

    // Estimate progress — use a reasonable window (e.g., 500k blocks before activation)
    const window = 500_000
    const elapsed = Math.max(0, window - remaining)
    const progress = Math.min(100, (elapsed / window) * 100)

    return {
      status: 'pending' as const,
      blocksRemaining: remaining,
      progress,
      totalSeconds: remaining * OLYMPIA_AVG_BLOCK_TIME_SECONDS,
    }
  }, [currentBlock])

  const toTime = (s: number): CountdownTime => ({
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: Math.floor(s % 60),
  })

  const initialCountdown =
    initialState.status === 'pending' && initialState.totalSeconds > 0
      ? toTime(initialState.totalSeconds)
      : null

  const [countdown, setCountdown] = useState<CountdownTime | null>(initialCountdown)

  // Tick countdown every second when pending
  useEffect(() => {
    if (initialState.status !== 'pending' || initialState.totalSeconds <= 0) {
      return
    }

    let totalSeconds = initialState.totalSeconds

    const timer = setInterval(() => {
      totalSeconds -= 1
      if (totalSeconds <= 0) {
        clearInterval(timer)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setCountdown(toTime(totalSeconds))
    }, 1000)

    return () => clearInterval(timer)
  }, [initialState.status, initialState.totalSeconds])

  return {
    status: initialState.status,
    activationBlock: OLYMPIA_ACTIVATION_BLOCK,
    currentBlock,
    blocksRemaining: initialState.blocksRemaining,
    progress: initialState.progress,
    countdown,
    loading: networkLoading,
  }
}
