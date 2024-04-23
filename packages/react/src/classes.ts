import { cva } from 'class-variance-authority'
import { ThemePreloadedClasses } from './theme/types'

export const inputContainer = ({
  size,
  animations,
  disabled,
  error,
}: ThemePreloadedClasses) =>
  cva(['border-border', animations.microInteractionsAll, 'flex'], {
    variants: {
      layout: {
        column: ['flex-col', 'gap-1', 'items-start'],
        row: ['flex-row', 'gap-2', 'items-center'],
      },
      size: {
        sm: [size.sm.fontSize],
        md: [size.sm.fontSize],
        lg: [size.sm.fontSize],
      },
      disabled: { true: disabled },
      error: { true: error.text },
    },
    defaultVariants: {
      layout: 'column',
    },
  })

export const optionListClasses = cva(
  [
    'bg-background-secondary',
    'shadow-md',
    'w-fit',
    'border',
    'rounded-md',
    'flex',
    'flex-col',
    'gap-1',
    'p-1',
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
      placement: {
        top: ['!mb-1'],
        bottom: ['mt-1'],
      },
    },
  }
)

export const selectOptionClasses = ({
  disabled,
  selected,
  triggers,
  size,
  focusable,
  animations,
}: ThemePreloadedClasses) =>
  cva(
    [
      focusable,
      'transition-colors',
      'font-normal',
      'relative',
      'cursor-pointer',
      'select-none',
      'rounded',
      'group',
      'w-full',
      'flex',
      'items-center',
      'px-2',
    ],
    {
      variants: {
        selected: {
          true: [...selected, animations.microInteractionsColor],
          false: [...triggers.outlined, 'bg-primary', 'border-0'],
        },
        size: {
          sm: [size.sm.fontSize, size.sm.height],
          md: [size.md.fontSize, size.md.height],
          lg: [size.lg.fontSize, size.lg.height],
        },
        disabled: { true: disabled },
        multiple: { true: ['flex', 'gap-2'] },
        truncate: {
          true: ['truncate', 'whitespace-nowrap'],
        },
      },
    }
  )

export const groupPositionClasses = {
  first: ['rounded-l-md', 'border-0', '!border-x', 'z-10'],
  middle: ['-ml-px', 'border-0', '!border-r'],
  last: ['rounded-r-md', 'border-0', '!border-r'],
}
