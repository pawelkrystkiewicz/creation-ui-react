import { ElementTheme } from '../../types'

export const isDarkThemeSet = () =>
  document.documentElement.classList.contains('dark') ||
  window.matchMedia('(prefers-color-scheme: dark)').matches

export const updateDocumentClasses = (theme: ElementTheme) =>
  theme === 'dark'
    ? document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')
