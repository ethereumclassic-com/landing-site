'use client'

import { motion } from 'framer-motion'
import type { Exchange, PaymentMethod } from '../data/exchanges'

interface ExchangeTableProps {
  exchanges: Exchange[]
  showVolume?: boolean
}

function PaymentIcon({ method }: { method: PaymentMethod }) {
  switch (method) {
    case 'Card':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      )
    case 'Bank':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    case 'Crypto':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      )
    case 'P2P':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      )
    case 'Wire':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
        </svg>
      )
    case 'Wallet':
      return (
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
        </svg>
      )
  }
}

export default function ExchangeTable({ exchanges, showVolume = true }: ExchangeTableProps) {
  return (
    <div className="overflow-x-auto">
      <motion.table
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full"
      >
        <thead>
          <tr className="border-b border-[var(--border)]">
            <th className="py-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Exchange</th>
            <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] md:table-cell">Type</th>
            {showVolume && (
              <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] sm:table-cell">Volume</th>
            )}
            <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] lg:table-cell">Trading Fee</th>
            <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] md:table-cell">Pairs</th>
            <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] xl:table-cell">Payment</th>
            <th className="hidden py-4 text-left text-sm font-medium text-[var(--color-text-muted)] lg:table-cell">KYC</th>
            <th className="py-4 text-left text-sm font-medium text-[var(--color-text-muted)]">Regions</th>
            <th className="py-4 text-right text-sm font-medium text-[var(--color-text-muted)]"></th>
          </tr>
        </thead>
        <tbody>
          {exchanges.map((exchange, index) => {
            const isDEX = exchange.type === 'DEX'
            return (
              <motion.tr
                key={exchange.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                className="group border-b border-[var(--border)]/50 transition-colors hover:bg-[var(--panel)]"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className={`flex h-8 w-8 items-center justify-center rounded-lg text-sm font-bold ${
                      isDEX
                        ? 'bg-[var(--color-primary)]/20 text-[var(--color-primary)]'
                        : 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                    }`}>
                      {exchange.name[0]}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-white">{exchange.name}</span>
                        {exchange.featured && (
                          <span className="rounded-full bg-[var(--color-primary)]/10 px-2 py-0.5 text-xs text-[var(--color-primary)]">
                            Featured
                          </span>
                        )}
                      </div>
                      {exchange.description && (
                        <p className="mt-0.5 hidden text-xs text-[var(--color-text-muted)] xl:block">
                          {exchange.description.length > 60
                            ? exchange.description.slice(0, 60) + '...'
                            : exchange.description}
                        </p>
                      )}
                    </div>
                  </div>
                </td>
                <td className="hidden py-4 md:table-cell">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-xs font-medium ${
                    isDEX
                      ? 'bg-[var(--color-primary)]/10 text-[var(--color-primary)]'
                      : 'bg-white/5 text-[var(--color-text-secondary)]'
                  }`}>
                    {exchange.type}
                  </span>
                </td>
                {showVolume && (
                  <td className="hidden py-4 sm:table-cell">
                    <span className={`text-sm ${
                      isDEX ? 'text-[var(--color-text-muted)]' : 'font-medium text-white'
                    }`}>
                      {exchange.volume24h}
                    </span>
                  </td>
                )}
                <td className="hidden py-4 lg:table-cell">
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    {exchange.tradingFee || '-'}
                  </span>
                </td>
                <td className="hidden py-4 md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {exchange.pairs.slice(0, 2).map((pair) => (
                      <span
                        key={pair}
                        className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]"
                      >
                        {pair}
                      </span>
                    ))}
                    {exchange.pairs.length > 2 && (
                      <span className="rounded bg-white/5 px-1.5 py-0.5 text-xs text-[var(--color-text-muted)]">
                        +{exchange.pairs.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="hidden py-4 xl:table-cell">
                  <div className="flex gap-1.5">
                    {exchange.paymentMethods?.slice(0, 3).map((method) => (
                      <span
                        key={method}
                        className="text-[var(--color-text-muted)]"
                        title={method}
                      >
                        <PaymentIcon method={method} />
                      </span>
                    ))}
                    {(exchange.paymentMethods?.length ?? 0) > 3 && (
                      <span className="text-xs text-[var(--color-text-muted)]">
                        +{(exchange.paymentMethods?.length ?? 0) - 3}
                      </span>
                    )}
                  </div>
                </td>
                <td className="hidden py-4 lg:table-cell">
                  {exchange.kycRequired === undefined ? (
                    <span className="text-sm text-[var(--color-text-muted)]">-</span>
                  ) : exchange.kycRequired ? (
                    <span className="text-sm text-amber-400">Required</span>
                  ) : (
                    <span className="text-sm text-green-400">Optional</span>
                  )}
                </td>
                <td className="py-4">
                  <span className="text-sm text-[var(--color-text-muted)]">
                    {exchange.regions.slice(0, 2).join(', ')}
                    {exchange.regions.length > 2 && ` +${exchange.regions.length - 2}`}
                  </span>
                </td>
                <td className="py-4 text-right">
                  <a
                    href={exchange.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all ${
                      isDEX
                        ? 'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]'
                        : 'border border-[var(--border)] bg-[var(--panel)] text-white hover:border-[var(--color-primary)]/30 hover:bg-[var(--color-primary)]/10'
                    }`}
                  >
                    <span className="hidden sm:inline">Trade</span>
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </td>
              </motion.tr>
            )
          })}
        </tbody>
      </motion.table>
    </div>
  )
}
