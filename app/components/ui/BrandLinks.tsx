const linkClass = 'text-[var(--brand-green)] transition-colors hover:underline'

export function ETCswapLink({ children = 'ETCswap', className }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href="https://etcswap.org"
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? linkClass}
    >
      {children}
    </a>
  )
}

export function ClassicUSDLink({ children = 'Classic USD', className }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href="https://classicusd.com"
      target="_blank"
      rel="noopener noreferrer"
      className={className ?? linkClass}
    >
      {children}
    </a>
  )
}
