'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  preferences: {
    currency: string
    theme: 'light' | 'dark' | 'system'
    notifications: boolean
  }
}

export interface WatchlistItem {
  symbol: string
  name: string
  addedAt: string
}

export interface PortfolioItem {
  symbol: string
  name: string
  amount: number
  purchasePrice: number
  purchaseDate: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  updateProfile: (updates: Partial<User>) => void
  updatePreferences: (preferences: Partial<User['preferences']>) => void
  // Watchlist
  watchlist: WatchlistItem[]
  addToWatchlist: (item: Omit<WatchlistItem, 'addedAt'>) => void
  removeFromWatchlist: (symbol: string) => void
  isInWatchlist: (symbol: string) => boolean
  // Portfolio
  portfolio: PortfolioItem[]
  addToPortfolio: (item: Omit<PortfolioItem, 'purchaseDate'> & { purchaseDate?: string }) => void
  removeFromPortfolio: (symbol: string, purchaseDate: string) => void
  updatePortfolioItem: (symbol: string, purchaseDate: string, updates: Partial<PortfolioItem>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [watchlist, setWatchlist] = useState<WatchlistItem[]>([])
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  // Load user data from localStorage on mount
  useEffect(() => {
    const loadUserData = () => {
      try {
        const storedUser = localStorage.getItem(STORAGE_KEYS.user)
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser)
          setUser(parsedUser)

          // Load user-specific watchlist and portfolio
          const storedWatchlist = localStorage.getItem(`${STORAGE_KEYS.watchlist}_${parsedUser.id}`)
          const storedPortfolio = localStorage.getItem(`${STORAGE_KEYS.portfolio}_${parsedUser.id}`)

          if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist))
          if (storedPortfolio) setPortfolio(JSON.parse(storedPortfolio))
        }
      } catch (error) {
        console.error('Error loading user data:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserData()
  }, [])

  // Save watchlist to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`${STORAGE_KEYS.watchlist}_${user.id}`, JSON.stringify(watchlist))
    }
  }, [watchlist, user])

  // Save portfolio to localStorage when it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem(`${STORAGE_KEYS.portfolio}_${user.id}`, JSON.stringify(portfolio))
    }
  }, [portfolio, user])

  const login = useCallback(async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      // Get registered users from localStorage
      const storedUsers = localStorage.getItem(STORAGE_KEYS.users)
      const users: Record<string, { password: string; user: User }> = storedUsers ? JSON.parse(storedUsers) : {}

      const userRecord = users[email.toLowerCase()]

      if (!userRecord) {
        return { success: false, error: 'No account found with this email address' }
      }

      // Simple password check (in production, use proper hashing)
      if (userRecord.password !== password) {
        return { success: false, error: 'Incorrect password' }
      }

      // Set user and save to localStorage
      setUser(userRecord.user)
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(userRecord.user))

      // Load user-specific data
      const storedWatchlist = localStorage.getItem(`${STORAGE_KEYS.watchlist}_${userRecord.user.id}`)
      const storedPortfolio = localStorage.getItem(`${STORAGE_KEYS.portfolio}_${userRecord.user.id}`)

      if (storedWatchlist) setWatchlist(JSON.parse(storedWatchlist))
      if (storedPortfolio) setPortfolio(JSON.parse(storedPortfolio))

      return { success: true }
    } catch (error) {
      console.error('Login error:', error)
      return { success: false, error: 'An error occurred during login' }
    }
  }, [])

  const register = useCallback(async (email: string, password: string, name: string): Promise<{ success: boolean; error?: string }> => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500))

      // Get existing users
      const storedUsers = localStorage.getItem(STORAGE_KEYS.users)
      const users: Record<string, { password: string; user: User }> = storedUsers ? JSON.parse(storedUsers) : {}

      // Check if email already exists
      if (users[email.toLowerCase()]) {
        return { success: false, error: 'An account with this email already exists' }
      }

      // Create new user
      const newUser: User = {
        id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        email: email.toLowerCase(),
        name,
        createdAt: new Date().toISOString(),
        preferences: {
          currency: 'USD',
          theme: 'dark',
          notifications: true,
        },
      }

      // Save user to users storage
      users[email.toLowerCase()] = { password, user: newUser }
      localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users))

      // Log in the new user
      setUser(newUser)
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(newUser))
      setWatchlist([])
      setPortfolio([])

      return { success: true }
    } catch (error) {
      console.error('Registration error:', error)
      return { success: false, error: 'An error occurred during registration' }
    }
  }, [])

  const logout = useCallback(() => {
    setUser(null)
    setWatchlist([])
    setPortfolio([])
    localStorage.removeItem(STORAGE_KEYS.user)
  }, [])

  const updateProfile = useCallback((updates: Partial<User>) => {
    if (!user) return

    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(updatedUser))

    // Also update in users storage
    const storedUsers = localStorage.getItem(STORAGE_KEYS.users)
    if (storedUsers) {
      const users = JSON.parse(storedUsers)
      if (users[user.email]) {
        users[user.email].user = updatedUser
        localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users))
      }
    }
  }, [user])

  const updatePreferences = useCallback((preferences: Partial<User['preferences']>) => {
    if (!user) return

    const updatedUser = {
      ...user,
      preferences: { ...user.preferences, ...preferences },
    }
    setUser(updatedUser)
    localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(updatedUser))

    // Also update in users storage
    const storedUsers = localStorage.getItem(STORAGE_KEYS.users)
    if (storedUsers) {
      const users = JSON.parse(storedUsers)
      if (users[user.email]) {
        users[user.email].user = updatedUser
        localStorage.setItem(STORAGE_KEYS.users, JSON.stringify(users))
      }
    }
  }, [user])

  // Watchlist functions
  const addToWatchlist = useCallback((item: Omit<WatchlistItem, 'addedAt'>) => {
    setWatchlist(prev => {
      if (prev.some(w => w.symbol === item.symbol)) return prev
      return [...prev, { ...item, addedAt: new Date().toISOString() }]
    })
  }, [])

  const removeFromWatchlist = useCallback((symbol: string) => {
    setWatchlist(prev => prev.filter(w => w.symbol !== symbol))
  }, [])

  const isInWatchlist = useCallback((symbol: string) => {
    return watchlist.some(w => w.symbol === symbol)
  }, [watchlist])

  // Portfolio functions
  const addToPortfolio = useCallback((item: Omit<PortfolioItem, 'purchaseDate'> & { purchaseDate?: string }) => {
    setPortfolio(prev => [
      ...prev,
      { ...item, purchaseDate: item.purchaseDate || new Date().toISOString() },
    ])
  }, [])

  const removeFromPortfolio = useCallback((symbol: string, purchaseDate: string) => {
    setPortfolio(prev => prev.filter(p => !(p.symbol === symbol && p.purchaseDate === purchaseDate)))
  }, [])

  const updatePortfolioItem = useCallback((symbol: string, purchaseDate: string, updates: Partial<PortfolioItem>) => {
    setPortfolio(prev => prev.map(p => {
      if (p.symbol === symbol && p.purchaseDate === purchaseDate) {
        return { ...p, ...updates }
      }
      return p
    }))
  }, [])

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateProfile,
    updatePreferences,
    watchlist,
    addToWatchlist,
    removeFromWatchlist,
    isInWatchlist,
    portfolio,
    addToPortfolio,
    removeFromPortfolio,
    updatePortfolioItem,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
