import type { ThemeProps, ThemeProviderProps } from './types'
import { defaultTheme } from './'
import { createContext, useContext } from 'react'

export const ThemeCtx = createContext<Partial<ThemeProps>>(defaultTheme)

export const Theme = ({ children, theme = {} }: ThemeProviderProps) => (
  <ThemeCtx.Provider value={{ ...defaultTheme, ...theme }}>
    {children}
  </ThemeCtx.Provider>
)

export const useTheme = () => {
  const context = useContext(ThemeCtx)
  if (context === undefined) {
    throw new Error(`useTheme must be used within a ThemeProvider`)
  }
  return context
}
