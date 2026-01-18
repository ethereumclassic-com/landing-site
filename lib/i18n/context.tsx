'use client'

import { createContext, useContext, useState, useCallback, ReactNode, useSyncExternalStore } from 'react'
import { Locale, defaultLocale, TranslationKey } from './types'

// Import translations
import en from '@/locales/en.json'
import es from '@/locales/es.json'
import zh from '@/locales/zh.json'

const translations: Record<Locale, Record<string, string>> = {
  en,
  es,
  zh,
}

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey, params?: Record<string, string | number>) => string
}

const I18nContext = createContext<I18nContextType | null>(null)

const LOCALE_STORAGE_KEY = 'etc-locale'

// Helper to get initial locale from localStorage
function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY)
  if (stored && ['en', 'es', 'zh'].includes(stored)) {
    return stored as Locale
  }

  // Try to detect browser language
  const browserLang = navigator.language.split('-')[0]
  if (['en', 'es', 'zh'].includes(browserLang)) {
    return browserLang as Locale
  }

  return defaultLocale
}

// Use useSyncExternalStore for hydration-safe localStorage access
function subscribeToStorage(callback: () => void) {
  window.addEventListener('storage', callback)
  return () => window.removeEventListener('storage', callback)
}

function getSnapshot(): Locale {
  return getStoredLocale()
}

function getServerSnapshot(): Locale {
  return defaultLocale
}

export function I18nProvider({ children }: { children: ReactNode }) {
  // Use useSyncExternalStore for hydration-safe initial value
  const storedLocale = useSyncExternalStore(subscribeToStorage, getSnapshot, getServerSnapshot)
  const [locale, setLocaleState] = useState<Locale>(storedLocale)

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem(LOCALE_STORAGE_KEY, newLocale)
    // Update html lang attribute
    document.documentElement.lang = newLocale
  }, [])

  const t = useCallback(
    (key: TranslationKey, params?: Record<string, string | number>): string => {
      let text = translations[locale][key] || translations[defaultLocale][key] || key

      // Replace parameters {{param}}
      if (params) {
        Object.entries(params).forEach(([paramKey, value]) => {
          text = text.replace(new RegExp(`{{${paramKey}}}`, 'g'), String(value))
        })
      }

      return text
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export function useTranslation() {
  const { t } = useI18n()
  return { t }
}
