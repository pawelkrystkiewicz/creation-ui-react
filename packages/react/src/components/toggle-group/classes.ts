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
      'size',
      'text-size',
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
      'px-3',
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
        disabled: { true:'cui-disabled' },
      },
    }
  ),
}
