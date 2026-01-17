'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: ContainerSize
  padding?: boolean
  children: ReactNode
}

const sizeStyles: Record<ContainerSize, string> = {
  sm: 'max-w-[640px]',
  md: 'max-w-[768px]',
  lg: 'max-w-[1024px]',
  xl: 'max-w-[1280px]',
  full: 'max-w-full',
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = 'xl', padding = true, children, className = '', ...props }, ref) => (
    <div
      ref={ref}
      className={[
        'mx-auto w-full',
        sizeStyles[size],
        padding && 'px-4 sm:px-6 lg:px-8',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </div>
  )
)

Container.displayName = 'Container'

export default Container
