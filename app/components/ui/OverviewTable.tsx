interface Row {
  label: string
  value: string
  color?: 'green' | 'red'
}

interface OverviewTableProps {
  heading: string
  rows: Row[]
}

export function OverviewTable({ heading, rows }: OverviewTableProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-[var(--border-default)] bg-[var(--bg-elevated)]">
      <div className="border-b border-[var(--border-default)] px-6 py-4">
        <p className="text-sm font-semibold text-[var(--text-primary)]">{heading}</p>
      </div>
      <div>
        {rows.map((row, i) => {
          const valueColor =
            row.color === 'green'
              ? 'text-[var(--brand-green)]'
              : row.color === 'red'
                ? 'text-[var(--color-error)]'
                : 'text-[var(--text-primary)]'
          return (
            <div
              key={row.label}
              className={`flex items-center justify-between px-6 py-3 ${i % 2 === 0 ? 'bg-[var(--bg-surface)]' : ''}`}
            >
              <span className="text-sm text-[var(--text-muted)]">{row.label}</span>
              <span className={`font-mono text-sm font-medium ${valueColor}`}>{row.value}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
