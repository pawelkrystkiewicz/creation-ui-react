import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const cellClasses = cva(
  ['px-1.5', 'py-1', 'rounded', 'cursor-pointer', 'micro-interactions'],
  {
    variants: {
      selected: {
        true: ['bg-primary', 'text-white'],
        false: ['text-(--text-primary)', '!border-0', 'hover:bg-primary/20'],
      },
    },
    defaultVariants: {
      selected: false,
    },
  },
)

export const columnClasses = clsx([
  'overflow-y-auto',
  'h-48',
  'hide-scrollbar',
  'flex',
  'flex-col',
  'gap-1',
])
