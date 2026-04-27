'use client'

import { useState, useEffect, useMemo } from 'react'
import { useNetworkStats } from './useNetworkStats'
import { calculateSupplyStats, EMISSION_CONSTANTS } from '@/app/research/data/emission'

export interface FiftheningCountdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface UseFiftheningReturn {
  status: 'pending' | 'complete'
  currentBlock: number | null
  currentEra: number | null
  nextEra: number | null
  targetBlock: number | null
  blocksRemaining: number | null
  progress: number // 0–100 (era progress)
  currentReward: number | null
  nextReward: number | null
  countdown: FiftheningCountdown | null
  loading: boolean
}

function toCountdown(totalSeconds: number): FiftheningCountdown {
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: Math.floor(totalSeconds % 60),
  }
}

export function useFifthening(): UseFiftheningReturn {
  const { stats, loading: networkLoading } = useNetworkStats({ refreshInterval: 300_000 })

  const currentBlock = stats?.totalBlocks ?? null

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

    const supplyStats = calculateSupplyStats(currentBlock)
    const currentEra = supplyStats.currentEra
    const nextEra = currentEra + 1
    // Era N ends at block N * ERA_LENGTH (not nextEra * ERA_LENGTH)
    const targetBlock = currentEra * EMISSION_CONSTANTS.ERA_LENGTH

    // Era is complete when we've passed the boundary (shouldn't happen mid-poll, but safe guard)
    if (currentBlock >= targetBlock) {
      const completedSupplyStats = calculateSupplyStats(currentBlock)
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
  }, [currentBlock])

  const initialCountdown =
    derived.status === 'pending' && derived.totalSeconds > 0
      ? toCountdown(derived.totalSeconds)
      : null

  const [countdown, setCountdown] = useState<FiftheningCountdown | null>(initialCountdown)

  useEffect(() => {
    if (derived.status !== 'pending' || derived.totalSeconds <= 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCountdown(null)
      return
    }

    let remaining = derived.totalSeconds
    setCountdown(toCountdown(remaining))

    const timer = setInterval(() => {
      remaining -= 1
      if (remaining <= 0) {
        clearInterval(timer)
        setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }
      setCountdown(toCountdown(remaining))
    }, 1000)

    return () => clearInterval(timer)
  }, [derived.status, derived.totalSeconds])

  return {
    status: derived.status,
    currentBlock,
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
