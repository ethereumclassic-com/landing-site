'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'

export type GridCols = 1 | 2 | 3 | 4 | 6 | 12
export type GridGap = 'none' | 'sm' | 'md' | 'lg'

export interface GridResponsive {
  sm?: GridCols
  md?: GridCols
  lg?: GridCols
  xl?: GridCols
}

export interface GridProps extends HTMLAttributes<HTMLDivElement> {
  cols?: GridCols
  gap?: GridGap
  responsive?: GridResponsive
  children: ReactNode
}

const colStyles: Record<GridCols, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12',
}

const responsiveColStyles: Record<string, Record<GridCols, string>> = {
  sm: {
    1: 'sm:grid-cols-1',
    2: 'sm:grid-cols-2',
    3: 'sm:grid-cols-3',
    4: 'sm:grid-cols-4',
    6: 'sm:grid-cols-6',
    12: 'sm:grid-cols-12',
  },
  md: {
    1: 'md:grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-4',
    6: 'md:grid-cols-6',
    12: 'md:grid-cols-12',
  },
  lg: {
    1: 'lg:grid-cols-1',
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    6: 'lg:grid-cols-6',
    12: 'lg:grid-cols-12',
  },
  xl: {
    1: 'xl:grid-cols-1',
    2: 'xl:grid-cols-2',
    3: 'xl:grid-cols-3',
    4: 'xl:grid-cols-4',
    6: 'xl:grid-cols-6',
    12: 'xl:grid-cols-12',
  },
}

const gapStyles: Record<GridGap, string> = {
  none: 'gap-0',
  sm: 'gap-4',
  md: 'gap-6',
  lg: 'gap-8',
}

export const Grid = forwardRef<HTMLDivElement, GridProps>(
  (
    { cols = 1, gap = 'md', responsive, children, className = '', ...props },
    ref
  ) => {
    const responsiveClasses = responsive
      ? (Object.entries(responsive) as [keyof GridResponsive, GridCols | undefined][])
          .filter((entry): entry is [keyof GridResponsive, GridCols] => entry[1] !== undefined)
          .map(([breakpoint, value]) => responsiveColStyles[breakpoint][value])
          .join(' ')
      : ''

    return (
      <div
        ref={ref}
        className={[
          'grid',
          colStyles[cols],
          gapStyles[gap],
          responsiveClasses,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Grid.displayName = 'Grid'

export default Grid
