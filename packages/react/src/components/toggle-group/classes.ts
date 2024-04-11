import { cva } from 'class-variance-authority'
import { sharedDisabledCVA, sharedSizeClassesCVA } from '@root/classes'

export const toggleGroup = {
  container: [
    'micro-interactions',
    'relative',
    'inline-flex',
    'shadow-sm',
    'rounded-md',
  ],
  button: cva(
    [
      'micro-interactions',
      'z-0',
      'bg-white',
      'border-info-400',
      'border-y',
      'dark:bg-info-900',
      'dark:border-info-700',
      'dark:hover:bg-info-800',
      'dark:text-info-200',
      'focus:border-primary-300',
      'focus:dark:border-primary-400',
      'focus:dark:ring-primary-300',
      'focus:invalid:border-error-500',
      'focus:invalid:ring-error-200',
      'focus:ring-offset-0',
      'focus:ring-opacity-50',
      'focus:ring-primary-200',
      'focus:ring',
      'focus:z-10',
      'font-medium',
      'hover:bg-info-100',
      'inline-flex',
      'items-center',
      'relative',
      'text-info-700',
      'text-sm',
      'cursor-pointer',
    ],
    {
      variants: {
        element: {
          first: ['rounded-l-md', 'border-x', 'z-10'],
          middle: ['-ml-px', 'border-r'],
          last: ['rounded-r-md', 'border-r'],
        },
        checked: {
          true: ['!bg-primary-500', 'text-white', 'font-bold'],
          false: ['bg-info-50', 'text-info-900', 'hover:bg-info-100'],
        },
        disabled: sharedDisabledCVA,
        size: sharedSizeClassesCVA,
      },
    }
  ),
}
