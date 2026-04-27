'use client'

import { motion } from 'framer-motion'
import { usePrice } from '@/app/hooks/usePrice'

const sizeClasses = {
  sm: {
    price: 'text-lg font-semibold',
    change: 'text-xs',
    icon: 'h-4 w-4',
    label: 'text-xs',
  },
  md: {
    price: 'text-2xl font-bold',
    change: 'text-sm',
    icon: 'h-5 w-5',
    label: 'text-sm',
  },
  lg: {
    price: 'text-3xl font-bold md:text-4xl',
    change: 'text-base',
    icon: 'h-6 w-6',
    label: 'text-base',
  },
  xl: {
    price: 'text-4xl font-bold md:text-5xl lg:text-6xl',
    change: 'text-lg',
    icon: 'h-8 w-8',
    label: 'text-lg',
  },
}

const changeColors = {
  up: 'text-emerald-400',
  down: 'text-red-400',
  neutral: 'text-[var(--color-text-muted)]',
}

const changeBgColors = {
  up: 'bg-emerald-500/10',
  down: 'bg-red-500/10',
  neutral: 'bg-[var(--panel)]',
}

function ChangeIcon({ direction, iconClass }: { direction: 'up' | 'down' | 'neutral'; iconClass: string }) {
  if (direction === 'up') {
    return (
      <svg aria-hidden="true" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    )
  }
  if (direction === 'down') {
    return (
      <svg aria-hidden="true" className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    )
  }
  return null
}

interface LivePriceDisplayProps {
  currency?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showLabel?: boolean
  label?: string
  showIcon?: boolean
  animated?: boolean
  showSource?: boolean
  refreshInterval?: number
}

export default function LivePriceDisplay({
  currency = 'usd',
  size = 'md',
  showLabel = false,
  label = 'ETC/USD',
  showIcon = true,
  animated = true,
  showSource = true,
  refreshInterval = 60000,
}: LivePriceDisplayProps) {
  const { priceFormatted, changeFormatted, change24h, loading, source, lastUpdated } = usePrice(currency, {
    refreshInterval,
  })

  const changeDirection: 'up' | 'down' | 'neutral' =
    change24h === null ? 'neutral' : change24h >= 0 ? 'up' : 'down'

  const Wrapper = animated ? motion.div : 'div'
  const wrapperProps = animated
    ? {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.3 },
      }
    : {}

  return (
    <Wrapper {...wrapperProps} className="flex flex-col gap-1">
      {showLabel && (
        <span className={`${sizeClasses[size].label} text-[var(--color-text-muted)]`}>{label}</span>
      )}
      <div className="flex items-center gap-3">
        {loading && !priceFormatted ? (
          <span className={`${sizeClasses[size].price} text-[var(--color-text-muted)] animate-pulse`}>
            Loading...
          </span>
        ) : (
          <>
            <span className={`${sizeClasses[size].price} text-[var(--text-primary)]`}>{priceFormatted}</span>
            {changeFormatted && (
              <span
                className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${sizeClasses[size].change} ${changeColors[changeDirection]} ${changeBgColors[changeDirection]}`}
              >
                {showIcon && <ChangeIcon direction={changeDirection} iconClass={sizeClasses[size].icon} />}
                {changeFormatted}
              </span>
            )}
          </>
        )}
      </div>
      {showSource && source && (
        <div className="flex items-center gap-2 text-xs text-[var(--color-text-muted)]">
          <span>
            Data from{' '}
            <a
              href="https://www.coingecko.com/en/coins/ethereum-classic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-primary)] hover:underline"
            >
              CoinGecko
            </a>
          </span>
          {lastUpdated && (
            <span className="text-[var(--color-text-muted)]/70">
              • Updated {formatTimeAgo(lastUpdated)}
            </span>
          )}
        </div>
      )}
    </Wrapper>
  )
}

// Format time ago helper
function formatTimeAgo(date: Date): string {
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000)
  if (seconds < 60) return 'just now'
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes}m ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h ago`
  return `${Math.floor(hours / 24)}d ago`
}

/**
 * Compact live stats component for quick display
 */
interface LiveMarketStatsProps {
  showVolume?: boolean
  showRank?: boolean
  showSupply?: boolean
  className?: string
}

export function LiveMarketStats({
  showVolume = true,
  showRank = false,
  showSupply = true,
  className = '',
}: LiveMarketStatsProps) {
  const { marketCapFormatted, volumeFormatted, loading } = usePrice('usd')

  if (loading) {
    return (
      <div className={`flex flex-wrap justify-center gap-6 text-sm ${className}`}>
        <div className="text-center animate-pulse">
          <p className="text-[var(--color-text-muted)]">Market Cap</p>
          <p className="font-semibold text-[var(--color-text-muted)]">Loading...</p>
        </div>
        {showVolume && (
          <div className="text-center animate-pulse">
            <p className="text-[var(--color-text-muted)]">24h Volume</p>
            <p className="font-semibold text-[var(--color-text-muted)]">Loading...</p>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap justify-center gap-6 text-sm ${className}`}>
      <div className="text-center">
        <p className="text-[var(--color-text-muted)]">Market Cap</p>
        <p className="font-semibold text-[var(--text-primary)]">{marketCapFormatted}</p>
      </div>
      {showVolume && (
        <div className="text-center">
          <p className="text-[var(--color-text-muted)]">24h Volume</p>
          <p className="font-semibold text-[var(--text-primary)]">{volumeFormatted}</p>
        </div>
      )}
      {showRank && (
        <div className="text-center">
          <p className="text-[var(--color-text-muted)]">Rank</p>
          <p className="font-semibold text-[var(--text-primary)]">#28</p>
        </div>
      )}
      {showSupply && (
        <div className="text-center">
          <p className="text-[var(--color-text-muted)]">Circulating</p>
          <p className="font-semibold text-[var(--text-primary)]">148.3M ETC</p>
        </div>
      )}
    </div>
  )
}
