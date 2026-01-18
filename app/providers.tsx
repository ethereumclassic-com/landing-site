'use client'

import { AuthProvider } from './account/context/AuthContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>
}
