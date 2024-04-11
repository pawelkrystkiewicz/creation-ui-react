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
      'border-info',
      'border-y',
      'dark:bg-info',
      'dark:border-info',
      'dark:hover:bg-info',
      'dark:text-info',
      'focus:border-primary',
      'focus:dark:border-primary',
      'focus:dark:ring-primary',
      'focus:invalid:border-error',
      'focus:invalid:ring-error',
      'focus:ring-offset-0',
      'focus:ring-opacity-50',
      'focus:ring-primary',
      'focus:ring',
      'focus:z-10',
      'font-medium',
      'hover:bg-info',
      'inline-flex',
      'items-center',
      'relative',
      'text-info',
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
          true: ['!bg-primary', 'text-white', 'font-bold'],
          false: ['bg-info-50', 'text-info', 'hover:bg-info'],
        },
        disabled: sharedDisabledCVA,
        size: sharedSizeClassesCVA,
      },
    }
  ),
}
