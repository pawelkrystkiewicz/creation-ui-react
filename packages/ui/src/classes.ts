import { cva } from 'class-variance-authority'

export const inputContainer = ({ size, animations, disabled, error }: any) =>
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
  },
)

export const selectOptionClasses = cva(
  [
    // focusable,
    'focus-visible:outline-2',
    'focus-visible:outline-primary',
    // focusable
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
        true: [
          // ...selected,
          'micro-interactions',
        ],
        false: [
          // ...triggers.outlined,
          'bg-primary',
          'border-0',
        ],
      },
      // size: {
      //   sm: [size.sm.fontSize, size.sm.height],
      //   md: [size.md.fontSize, size.md.height],
      //   lg: [size.lg.fontSize, size.lg.height],
      // },
      disabled: { true: 'opacity-75 pointer-events-none' },
      multiple: { true: ['flex', 'gap-2'] },
      truncate: {
        true: ['truncate', 'whitespace-nowrap'],
      },
    },
  },
)

export const groupPositionClasses = {
  first: ['rounded-l-md', 'border-0', '!border-x', 'z-10'],
  middle: ['-ml-px', 'border-0', '!border-r'],
  last: ['rounded-r-md', 'border-0', '!border-r'],
}

export const focusable = [
  'focus-visible:outline-2',
  'focus-visible:outline-primary',
]
export const disabled = [
  'cursor-not-allowed',
  'pointer-events-none',
  'opacity-50',
]
export const readOnly = ['cursor-not-allowed', 'pointer-events-none']

// color and style
// use with "isolate"
export const triggerVariants = {
  variant: {
    contained: [
      // Optical border, implemented as the button background to avoid corner artifacts
      'text-[var(--trigger-color-contrast)]',
      'bg-[var(--trigger-color)]',
      'data-active:bg-[var(--trigger-color)]/[85%]',
      'data-hover:bg-[var(--trigger-color)]/90',
    ],
    outlined: [
      // Base
      'border',
      '!border-[var(--trigger-color)]',
      'text-[var(--trigger-color)]',
      'bg-transparent',
      'data-active:bg-[var(--trigger-color)]/20',
      'data-hover:bg-[var(--trigger-color)]/10',
      // Dark mode
      'dark:data-active:bg-[var(--trigger-color)]/30',
      'dark:data-hover:bg-[var(--trigger-color)]/25',
    ],
    text: [
      // Base
      'border-transparent',
      'text-[var(--trigger-color)]',
      'bg-transparent',
      'data-active:bg-[var(--trigger-color)]/20',
      'data-hover:bg-[var(--trigger-color)]/10',
      // Dark mode
      'dark:data-active:bg-[var(--trigger-color)]/30',
      'dark:data-hover:bg-[var(--trigger-color)]/25',
    ],
  },
  color: {
    primary: [
      '[--trigger-color:theme(colors.primary)]',
      '[--trigger-color-contrast:theme(colors.white)]',
    ],
    success: [
      '[--trigger-color:theme(colors.success)]',
      '[--trigger-color-contrast:theme(colors.white)]',
    ],
    warning: [
      '[--trigger-color:theme(colors.warning)]',
      '[--trigger-color-contrast:theme(colors.black)]',
    ],
    error: [
      '[--trigger-color:theme(colors.error)]',
      '[--trigger-color-contrast:theme(colors.white)]',
    ],
    mono: [
      //
      '[--trigger-color:theme(colors.black)]',
      '[--trigger-color-contrast:theme(colors.white)]',
      'dark:[--trigger-color:theme(colors.white)]',
      'dark:[--trigger-color-contrast:theme(colors.black)]',
    ],
    unstyled: [],
  },
}
