'use client'

import { forwardRef, type ReactNode, type HTMLAttributes } from 'react'

export interface TableColumn<T> {
  key: keyof T | string
  header: string
  width?: string
  align?: 'left' | 'center' | 'right'
  sortable?: boolean
  render?: (value: unknown, row: T, index: number) => ReactNode
}

export interface TableProps<T> extends Omit<HTMLAttributes<HTMLTableElement>, 'children'> {
  columns: TableColumn<T>[]
  data: T[]
  sortKey?: keyof T | string
  sortDirection?: 'asc' | 'desc'
  onSort?: (key: keyof T | string) => void
  loading?: boolean
  emptyMessage?: string
  rowKey?: keyof T | ((row: T, index: number) => string)
  onRowClick?: (row: T, index: number) => void
  stickyHeader?: boolean
}

// Sort icon component
const SortIcon = ({ direction }: { direction?: 'asc' | 'desc' | null }) => (
  <svg
    className="w-4 h-4 inline-block ml-1"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    {direction === 'asc' ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    ) : direction === 'desc' ? (
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 9l4-4 4 4m0 6l-4 4-4-4"
      />
    )}
  </svg>
)

// Loading skeleton row
const SkeletonRow = <T,>({ columns }: { columns: TableColumn<T>[] }) => (
  <tr>
    {columns.map((col, index) => (
      <td key={index} className="px-4 py-3">
        <div className="h-4 bg-[var(--panel-strong)] rounded animate-pulse" />
      </td>
    ))}
  </tr>
)

function TableInner<T>(
  {
    columns,
    data,
    sortKey,
    sortDirection,
    onSort,
    loading = false,
    emptyMessage = 'No data available',
    rowKey,
    onRowClick,
    stickyHeader = false,
    className = '',
    ...props
  }: TableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>
) {
  const getRowKey = (row: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(row, index)
    }
    if (rowKey && row[rowKey as keyof T] !== undefined) {
      return String(row[rowKey as keyof T])
    }
    return String(index)
  }

  const getValue = (row: T, key: keyof T | string): unknown => {
    const keys = String(key).split('.')
    let value: unknown = row
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        return undefined
      }
    }
    return value
  }

  const alignClass: Record<'left' | 'center' | 'right', string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <div className="w-full overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--border)]">
      <table
        ref={ref}
        className={`w-full border-collapse ${className}`}
        {...props}
      >
        <thead
          className={`bg-[var(--panel-strong)] ${
            stickyHeader ? 'sticky top-0 z-10' : ''
          }`}
        >
          <tr>
            {columns.map((col) => {
              const isSorted = sortKey === col.key
              const canSort = col.sortable && onSort

              return (
                <th
                  key={String(col.key)}
                  className={`px-4 py-3 text-[var(--text-sm)] font-medium text-[var(--color-text-secondary)] ${
                    alignClass[col.align || 'left']
                  } ${canSort ? 'cursor-pointer hover:text-[var(--color-text-primary)]' : ''}`}
                  style={col.width ? { width: col.width } : undefined}
                  onClick={() => canSort && onSort(col.key)}
                  aria-sort={
                    isSorted
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : 'descending'
                      : undefined
                  }
                >
                  <span className="inline-flex items-center">
                    {col.header}
                    {canSort && (
                      <SortIcon
                        direction={isSorted ? sortDirection : null}
                      />
                    )}
                  </span>
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {loading ? (
            // Show skeleton rows while loading
            Array.from({ length: 5 }).map((_, index) => (
              <SkeletonRow key={index} columns={columns} />
            ))
          ) : data.length === 0 ? (
            // Show empty state
            <tr>
              <td
                colSpan={columns.length}
                className="px-4 py-12 text-center text-[var(--color-text-muted)]"
              >
                {emptyMessage}
              </td>
            </tr>
          ) : (
            // Show data rows
            data.map((row, rowIndex) => (
              <tr
                key={getRowKey(row, rowIndex)}
                className={`bg-[var(--panel)] hover:bg-[var(--panel-hover)] transition-colors duration-[var(--transition-fast)] ${
                  onRowClick ? 'cursor-pointer' : ''
                }`}
                onClick={() => onRowClick?.(row, rowIndex)}
              >
                {columns.map((col) => {
                  const value = getValue(row, col.key)
                  const content = col.render
                    ? col.render(value, row, rowIndex)
                    : value !== undefined && value !== null
                    ? String(value)
                    : '-'

                  return (
                    <td
                      key={String(col.key)}
                      className={`px-4 py-3 text-[var(--text-sm)] text-[var(--color-text-primary)] ${
                        alignClass[col.align || 'left']
                      }`}
                    >
                      {content}
                    </td>
                  )
                })}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

// Use type assertion to preserve generics with forwardRef
export const Table = forwardRef(TableInner) as <T>(
  props: TableProps<T> & { ref?: React.Ref<HTMLTableElement> }
) => React.ReactElement

export default Table
