import type { ThemeStyles } from '../types'
import { themeTypography } from './typography'

const base = ['duration-300', 'ease-in-out']

export const styles: ThemeStyles = {
  animations: {
    microInteractionsAll: [...base, 'transition-all'],
    microInteractionsColor: [...base, 'transition-color'],
  },
  focusable: ['focus-visible:outline-2', 'focus-visible:outline-primary'],
  selected: ['bg-primary', 'text-white', 'hover:bg-primary/75'],
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
    base: ['bg-background-input', 'border', 'border-border'],
    checkable: [
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
      unstyled: [],
      contained: ['bg-background-input', 'border-transparent'],
      outlined: [],
      text: ['border-0', 'border-b', 'rounded-b-none'],
    },
  },
  size: {
    sm: {
      minHeight: 'min-h-7',
      height: 'h-7',
      width: 'w-7',
      square: 'size-4',
      padding: 'px-2',
      fontSize: 'text-xs',
    },
    md: {
      minHeight: 'min-h-9',
      height: 'h-9',
      width: 'w-9',
      square: 'size-5',
      padding: 'px-3',
      fontSize: 'text-sm',
    },
    lg: {
      minHeight: 'min-h-12',
      height: 'h-12',
      width: 'w-12',
      square: 'size-6',
      padding: 'px-4',
      fontSize: 'text-base',
    },
  },
  drawers: {
    position: 'right',
    width: 'md:w-1/2',
    height: 'md:h-1/2',
  },
  typography: themeTypography,
}
