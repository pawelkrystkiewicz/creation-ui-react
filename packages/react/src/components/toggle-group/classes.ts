import { groupPositionClasses } from '@root/classes'
import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const toggleGroupContainer = [
  'relative',
  'inline-flex',
  'shadow-sm',
  'rounded-md',
]

export const toggleGroupButton = ({
  disabled,
  animations,
  size,
  focusable,
}: ThemePreloadedClasses) =>
  cva(
    [
      focusable,
      animations.microInteractionsAll,
      'border-border',
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
        element: groupPositionClasses,
        checked: {
          true: [
            'bg-primary',
            'hover:bg-primary/75',
            'text-white',
            'font-bold',
          ],
          false: ['hover:bg-primary/10'],
        },
        size: {
          sm: [size.sm.fontSize, size.sm.height],
          md: [size.md.fontSize, size.md.height],
          lg: [size.lg.fontSize, size.lg.height],
        },

        disabled: { true: disabled },
      },
    }
  )
