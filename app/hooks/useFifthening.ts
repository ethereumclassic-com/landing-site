'use client'

import { useState, useEffect, useMemo } from 'react'
import { useNetworkStats } from './useNetworkStats'
import { calculateSupplyStats, EMISSION_CONSTANTS } from '@/app/research/data/emission'

const TARGET_BLOCK = 5 * EMISSION_CONSTANTS.ERA_LENGTH // 25,000,000

export interface FiftheningCountdown {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export interface UseFiftheningReturn {
  status: 'pending' | 'complete'
  currentBlock: number | null
  targetBlock: number
  blocksRemaining: number | null
  progress: number // 0–100 (era progress)
  currentReward: number
  nextReward: number
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
  const { stats, loading: networkLoading } = useNetworkStats({ refreshInterval: 30000 })

  const currentBlock = stats?.totalBlocks ?? null

  const derived = useMemo(() => {
    if (currentBlock === null) {
      return {
        status: 'pending' as const,
        blocksRemaining: null,
        progress: 0,
        currentReward: 2.048,
        nextReward: 1.6384,
        totalSeconds: 0,
      }
    }

    if (currentBlock >= TARGET_BLOCK) {
      return {
        status: 'complete' as const,
        blocksRemaining: 0,
        progress: 100,
        currentReward: 1.6384,
        nextReward: 1.6384 * 0.8,
        totalSeconds: 0,
      }
    }

    const supplyStats = calculateSupplyStats(currentBlock)

    return {
      status: 'pending' as const,
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
    targetBlock: TARGET_BLOCK,
    blocksRemaining: derived.blocksRemaining,
    progress: derived.progress,
    currentReward: derived.currentReward,
    nextReward: derived.nextReward,
    countdown,
    loading: networkLoading,
  }
}
