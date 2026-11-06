'use client'

import { useEffect } from 'react'
import { NetworkStatsProvider } from './context/NetworkStatsContext'

/**
 * A retired account prototype kept its "accounts", passwords included, in plain
 * text in localStorage, under these keys. Nothing reads them now, so they are
 * cleared rather than left in the visitor's browser.
 */
function isRetiredAccountKey(key: string): boolean {
  return key === 'etc_user' || key === 'etc_users' || key.startsWith('etc_watchlist_') || key.startsWith('etc_portfolio_')
}

function clearRetiredAccountStorage() {
  try {
    for (const key of Object.keys(localStorage)) {
      if (isRetiredAccountKey(key)) localStorage.removeItem(key)
    }
  } catch {
    // Storage blocked or unavailable, as in some private windows: there is nothing to clear.
  }
}

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(clearRetiredAccountStorage, [])
  return <NetworkStatsProvider>{children}</NetworkStatsProvider>
}
