import type { ThemeProps } from './types'

const theme: ThemeProps = {
  theme: 'light',
  dir: 'ltr',
  focusRing: true,
  roundness: 'rounded-md',
  variant: 'outlined',
  size: 'md',
  font: {
    leading: 'leading-normal',
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    fontFamilyMonospace: 'font-mono',
  },
  respectReducedMotion: true,
  drawers: {
    position: 'right',
    widthClassNames: 'md:w-1/2',
    heightClassNames: 'md:h-1/2',
  },
  typography: {
    h1: {
      display: 'block',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-4xl',
        md: 'text-5xl',
        lg: 'text-6xl',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
    h2: {
      display: 'block',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-3xl',
        md: 'text-4xl',
        lg: 'text-5xl',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
    h3: {
      display: 'block',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-2xl',
        md: 'text-3xl',
        lg: 'text-4xl',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
    h4: {
      display: 'block',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-xl',
        md: 'text-2xl',
        lg: 'text-3xl',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
    h5: {
      display: 'block',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-lg',
        md: 'text-xl',
        lg: 'text-2xl',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
    h6: {
      display: 'block',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
    content: {
      display: 'block',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
    description: {
      color: 'text-info-500 dark:text-info-300',
      display: 'inline',
      fontFamily: 'font-sans',
      fontSize: {
        sm: 'text-xs',
        md: 'text-sm',
        lg: 'text-sm',
      },
      fontWeight: 'font-light',
      lineHeight: 'leading-normal',
    },
  },
  texts: {
    invalidInput: 'Input invalid',
  },
  zIndex: {
    base: 'z-0',
    dropdowns: 'z-[200]',
    tooltips: 'z-[400]',
    overlays: 'z-[600]',
    modals: 'z-[800]',
    notifications: 'z-[1000]',
  },
  helpers: {
    getLimitText: more => `+${more}`,
  },
}

export default theme
