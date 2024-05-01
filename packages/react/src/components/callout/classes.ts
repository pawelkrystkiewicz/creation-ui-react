import { cva } from 'class-variance-authority'

export const calloutClasses = cva(['p-5', 'rounded-md', 'w-full'], {
  variants: {
    status: {
      primary: ['bg-primary', 'text-primary', 'border-primary'],
      error: ['bg-error', 'text-error', 'border-error'],
      success: ['bg-success', 'text-success', 'border-success'],
      warning: ['bg-warning', 'text-warning', 'border-warning'],
      info: ['bg-info', 'text-info', 'border-info'],
      mono: ['border-black', 'dark:border-white'],
    },
    variant: {
      contained: ['bg-opacity-10'],
      outlined: ['border', 'bg-opacity-10'],
      text: ['bg-opacity-0'],
    },
  },
  compoundVariants: [
    {
      status: 'mono',
      variant: 'contained',
      class: [
        'bg-black',
        'text-white',
        'dark:bg-white',
        'dark:text-black',
        '!bg-opacity-100',
      ],
    },
    {
      status: 'mono',
      variant: 'outlined',
      class: ['dark:text-white', 'text-black', 'border', '!bg-opacity-10'],
    },
    {
      status: 'mono',
      variant: 'text',
      class: ['dark:text-white', 'text-black', 'bg-opacity-0'],
    },
  ],
})
