import type { ThemeProps } from '../types'
import { themeDrawers } from './modal'
import { themeTypography } from './typography'

const animations = {
  microInteractions: ['duration-300', 'transition-all', 'ease-in-out'],
}

export const defaultTheme: ThemeProps = {
  variant: 'outlined',
  theme: 'light',
  dir: 'ltr',
  size: 'md',
  respectReducedMotion: true,
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
  styles: {
    animations,
    selected: [
      ...animations.microInteractions,
      'bg-primary',
      'text-white',
      'hover:bg-primary/75',
    ],
    disabled: ['cursor-not-allowed', 'pointer-events-none', 'opacity-50'],
    readOnly: ['cursor-not-allowed', 'pointer-events-none'],
    invalid: {
      border: ['!invalid:border-error', '!focus:invalid:border-error'],
      text: ['invalid:text-error'],
    },
    error: {
      border: ['!border-error', '!focus:border-error'],
      text: ['!text-error'],
    },
    triggers: {
      contained: [
        'hover:opacity-80',
        'text-white',
        'opacity-100',
        'active:opacity-65',
        'border',
      ],
      outlined: [
        'hover:bg-opacity-10',
        'bg-opacity-0',
        'dark:hover:bg-opacity-25',
        'border',
      ],
      text: ['hover:text-opacity-65', 'bg-opacity-0', 'border-transparent'],
    },
    inputs: {
      base: [
        ...animations.microInteractions,
        'bg-background-input',
        'border',
        'border-border',
        'rounded',
      ],
      checkable: [
        ...animations.microInteractions,
        'text-primary',
        'checked:border-none',
        'checked:bg-primary',
        'indeterminate:bg-primary',
        'cursor-pointer',
        'peer',
        'hover:bg-white/25',
        'bg-opacity-100',
      ],
      variants: {
        contained: ['bg-background-input', 'border-transparent'],
        outlined: [],
        text: ['border-0', 'border-b', 'rounded-b-none'],
        unstyled: [],
      },
    },
    size: {
      sm: {
        height: 'h-8',
        square: 'size-4',
        padding: 'px-2',
        fontSize: 'text-sm',
      },
      md: {
        height: 'h-10',
        square: 'size-5',
        padding: 'px-3',
        fontSize: 'text-base',
      },
      lg: {
        height: 'h-12',
        square: 'size-6',
        padding: 'px-4',
        fontSize: 'text-lg',
      },
    },
    drawers: themeDrawers,
    typography: themeTypography,
  },
}
