'use client'

import { useState, useEffect, useMemo } from 'react'
import { useNetworkStats } from './useNetworkStats'
import { calculateSupplyStats, getEraEndBlock } from '@/app/research/data/emission'

export interface FifthingCountdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface UseFifthingReturn {
  status: 'pending' | 'complete'
  currentBlock: number | null
  currentEra: number | null
  nextEra: number | null
  targetBlock: number | null
  blocksRemaining: number | null
  progress: number // 0–100 (era progress)
  currentReward: number | null
  nextReward: number | null
  countdown: FifthingCountdown | null
  /** Live seconds-per-block from Blockscout, or null before it loads. */
  avgBlockTime: number | null
  loading: boolean
}

function toCountdown(totalSeconds: number): FifthingCountdown {
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: Math.floor(totalSeconds % 60),
  }
}

export function useFifthing(): UseFifthingReturn {
  const { stats, loading: networkLoading } = useNetworkStats({ refreshInterval: 300_000 })

  const currentBlock = stats?.totalBlocks ?? null
  const avgBlockTime = stats?.avgBlockTime ?? undefined

  const derived = useMemo(() => {
    if (currentBlock === null) {
      return {
        status: 'pending' as const,
        currentEra: null,
        nextEra: null,
        targetBlock: null,
        blocksRemaining: null,
        progress: 0,
        currentReward: null,
        nextReward: null,
        totalSeconds: 0,
      }
    }

    const supplyStats = calculateSupplyStats(currentBlock, avgBlockTime)
    const currentEra = supplyStats.currentEra
    const nextEra = currentEra + 1
    const targetBlock = getEraEndBlock(currentEra)

    // Era is complete when we've passed the boundary (shouldn't happen mid-poll, but safe guard)
    if (currentBlock >= targetBlock) {
      const completedSupplyStats = calculateSupplyStats(currentBlock, avgBlockTime)
      return {
        status: 'complete' as const,
        currentEra,
        nextEra,
        targetBlock,
        blocksRemaining: 0,
        progress: 100,
        currentReward: completedSupplyStats.currentBlockReward,
        nextReward: completedSupplyStats.nextEraReward,
        totalSeconds: 0,
      }
    }

    return {
      status: 'pending' as const,
      currentEra,
      nextEra,
      targetBlock,
      blocksRemaining: supplyStats.blocksUntilNextEra,
      progress: supplyStats.percentThroughEra,
      currentReward: supplyStats.currentBlockReward,
      nextReward: supplyStats.nextEraReward,
      totalSeconds: supplyStats.timeUntilNextEra.totalSeconds,
    }
  }, [currentBlock, avgBlockTime])

  const initialCountdown =
    derived.status === 'pending' && derived.totalSeconds > 0
      ? toCountdown(derived.totalSeconds)
      : null

  const [tick, setTick] = useState<FifthingCountdown | null>(initialCountdown)

  // Derived, not stored. Whether a countdown exists is a pure function of the
  // era state, so an effect writing null was storing something already known at
  // render — and paying a second render to do it.
  const isCounting = derived.status === 'pending' && derived.totalSeconds > 0
  const countdown = isCounting ? tick : null

  useEffect(() => {
    if (derived.status !== 'pending' || derived.totalSeconds <= 0) return

    let remaining = derived.totalSeconds

    const timer = setInterval(() => {
      remaining -= 1
      if (remaining <= 0) {
        clearInterval(timer)
        setTick({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setTick(toCountdown(remaining))
    }, 1000)

    return () => clearInterval(timer)
  }, [derived.status, derived.totalSeconds])

  return {
    status: derived.status,
    currentBlock,
    avgBlockTime: avgBlockTime ?? null,
    currentEra: derived.currentEra,
    nextEra: derived.nextEra,
    targetBlock: derived.targetBlock,
    blocksRemaining: derived.blocksRemaining,
    progress: derived.progress,
    currentReward: derived.currentReward,
    nextReward: derived.nextReward,
    countdown,
    loading: networkLoading,
  }
}
