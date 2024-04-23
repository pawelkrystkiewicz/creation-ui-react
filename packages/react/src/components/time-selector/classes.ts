import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const cellClasses = ({
  selected,
  triggers,
  animations,
}: ThemePreloadedClasses) =>
  cva(
    [
      'bg-primary',
      'px-1.5',
      'py-1',
      'rounded',
      'cursor-pointer',
      animations?.microInteractionsAll,
    ],
    {
      variants: {
        selected: {
          true: [selected],
          false: [triggers?.outlined, '!border-0'],
        },
      },
      defaultVariants: {
        selected: false,
      },
    }
  )

export const columnClasses = clsx([
  'overflow-y-auto',
  'h-48',
  'hide-scrollbar',
  'flex',
  'flex-col',
  'gap-1',
])
