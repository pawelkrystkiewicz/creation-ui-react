import { cva } from 'class-variance-authority'

export const calloutClasses = cva(['p-5', 'rounded-md', 'w-full'], {
  variants: {
    status: {
      primary: ['bg-primary', 'text-primary', 'border-primary'],
      error: ['bg-error', 'text-error', 'border-error'],
      success: ['bg-success', 'text-success', 'border-success'],
      warning: ['bg-warning', 'text-warning', 'border-warning'],
      info: ['bg-info', 'text-info', 'border-info'],
      undefined: ['bg-text-primary', 'text-text-primary', 'border-text-primary'],
    },
    variant: {
      contained: ['bg-opacity-10', 'dark:bg-opacity-25'],
      outlined: ['border', 'bg-opacity-10', 'dark:bg-opacity-25'],
      text: ['bg-opacity-0'],
    },
  },
})
