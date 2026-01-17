'use client'

import { motion } from 'framer-motion'

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

// Change icon component moved outside to avoid recreation during render
function ChangeIcon({ direction, iconClass }: { direction: 'up' | 'down' | 'neutral'; iconClass: string }) {
  if (direction === 'up') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
      </svg>
    )
  }
  if (direction === 'down') {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    )
  }
  return null
}

interface PriceDisplayProps {
  price: string
  change?: string
  changePercent?: string
  changeDirection?: 'up' | 'down' | 'neutral'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showLabel?: boolean
  label?: string
  showIcon?: boolean
  animated?: boolean
}

export default function PriceDisplay({
  price,
  change,
  changePercent,
  changeDirection = 'neutral',
  size = 'md',
  showLabel = false,
  label = 'ETC Price',
  showIcon = true,
  animated = true,
}: PriceDisplayProps) {
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
        <span className={`${sizeClasses[size].price} text-white`}>{price}</span>
        {(change || changePercent) && (
          <span
            className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${sizeClasses[size].change} ${changeColors[changeDirection]} ${changeBgColors[changeDirection]}`}
          >
            {showIcon && <ChangeIcon direction={changeDirection} iconClass={sizeClasses[size].icon} />}
            {changePercent || change}
          </span>
        )}
      </div>
    </Wrapper>
  )
}

// Compact variant for use in tables or cards
interface PriceCompactProps {
  price: string
  changePercent?: string
  changeDirection?: 'up' | 'down' | 'neutral'
}

export function PriceCompact({ price, changePercent, changeDirection = 'neutral' }: PriceCompactProps) {
  const changeColors = {
    up: 'text-emerald-400',
    down: 'text-red-400',
    neutral: 'text-[var(--color-text-muted)]',
  }

  return (
    <div className="flex items-baseline gap-2">
      <span className="font-semibold text-white">{price}</span>
      {changePercent && (
        <span className={`text-xs ${changeColors[changeDirection]}`}>
          {changeDirection === 'up' && '+'}
          {changePercent}
        </span>
      )}
    </div>
  )
}

// Stats card variant
interface PriceStatProps {
  label: string
  value: string
  change?: string
  changeDirection?: 'up' | 'down' | 'neutral'
  tooltip?: string
}

export function PriceStat({ label, value, change, changeDirection = 'neutral', tooltip }: PriceStatProps) {
  const changeColors = {
    up: 'text-emerald-400',
    down: 'text-red-400',
    neutral: 'text-[var(--color-text-muted)]',
  }

  return (
    <div className="group relative">
      <div className="rounded-xl border border-[var(--border)] bg-[var(--panel)] p-4 transition-colors hover:border-[var(--color-primary)]/30">
        <p className="text-sm text-[var(--color-text-muted)]">{label}</p>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="text-xl font-bold text-white">{value}</span>
          {change && (
            <span className={`text-xs ${changeColors[changeDirection]}`}>
              {changeDirection === 'up' && '+'}
              {change}
            </span>
          )}
        </div>
      </div>
      {tooltip && (
        <div className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[var(--panel)] px-2 py-1 text-xs text-[var(--color-text-muted)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
          {tooltip}
        </div>
      )}
    </div>
  )
}
