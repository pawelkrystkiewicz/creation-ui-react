import { sharedDisabledCVA, sharedSizeClassesCVA } from '../../classes'
import { cva } from 'class-variance-authority'

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
      'border-y',
      'cursor-pointer',
      'focus:z-10',
      'font-medium',
      'hover:bg-primary/10',
      'inline-flex',
      'items-center',
      'relative',
      'text-sm',
      'text-text-primary',
      'z-0',
    ],
    {
      variants: {
        element: {
          first: ['rounded-l-md', 'border-x', 'z-10'],
          middle: ['-ml-px', 'border-r'],
          last: ['rounded-r-md', 'border-r'],
        },
        checked: {
          true: [
            'bg-primary',
            'hover:bg-primary/75',
            'text-white',
            'font-bold',
          ],
          false: ['hover:bg-primary/10'],
        },
        disabled: sharedDisabledCVA,
        size: sharedSizeClassesCVA,
      },
    },
  ),
}
