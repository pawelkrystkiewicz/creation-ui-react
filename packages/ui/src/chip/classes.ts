import { cva } from 'class-variance-authority'
import { triggerVariants } from '../classes'

export const chipClasses = cva(
  [
    'micro-interactions',
    'isolate',
    'inline-flex',
    'leading-5',
    'rounded-full',
    'font-medium',
    'w-fit',
    'select-none',
    'justify-center',
    'items-center',
    'flex-row',
    'gap-1',
    'py-0.5',
    'px-2',
  ],
  {
    variants: {
      ...triggerVariants,
      uppercase: { true: 'uppercase' },
      interactive: {
        true: ['pointer-events-auto', 'cursor-pointer'],
        false: ['pointer-events-none', 'cursor-default'],
      },
    },
    defaultVariants: {
      variant: 'contained',
      uppercase: false,
      interactive: false,
    },
  },
)
