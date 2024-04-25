import type { ThemeProps } from '../types'

export const themeTypography: ThemeProps['styles']['typography'] = {
  h1: {
    display: 'block',
    fontFamily: 'font-sans',
    fontSize: {
      sm: 'text-4xl',
      md: 'text-5xl',
      lg: 'text-6xl',
    },
    fontWeight: 'font-bold',
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
    fontWeight: 'font-bold',
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
    fontWeight: 'font-bold',
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
    fontWeight: 'font-bold',
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
    fontWeight: 'font-bold',
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
    fontWeight: 'font-bold',
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
    fontWeight: '',
    lineHeight: 'leading-normal',
  },
  description: {
    display: 'inline',
    fontFamily: 'font-sans',
    fontSize: {
      sm: 'text-xs',
      md: 'text-sm',
      lg: 'text-sm',
    },
    fontWeight: '',
    lineHeight: 'leading-normal',
  },
}
