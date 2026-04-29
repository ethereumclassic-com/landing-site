'use client'

import { AuthProvider } from './account/context/AuthContext'
import { NetworkStatsProvider } from './context/NetworkStatsContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NetworkStatsProvider>
      <AuthProvider>{children}</AuthProvider>
    </NetworkStatsProvider>
  )
}
