import { ThemePreloadedClasses } from '@root/theme'
import { cva } from 'class-variance-authority'

export const inputClasses = ({
  inputs,
  error,
  size,
  animations,
  focusable,
}: ThemePreloadedClasses) =>
  cva(
    [
      'rounded',
      'peer',
      'block',
      'w-full',
      inputs.base,
      focusable,
      animations.microInteractionsAll,
    ],
    {
      variants: {
        clearable: { true: 'pl-10' },
        interactionsDisabled: { true: ['pointer-events-none'] },
        variant: inputs.variants,
        size: {
          sm: [size.sm.fontSize, size.sm.height],
          md: [size.md.fontSize, size.md.height],
          lg: [size.lg.fontSize, size.lg.height],
        },
        startAdornment: { true: 'pl-10', false: 'pl-3' },
        endAdornment: { true: 'pr-10', false: 'pr-3' },
        error: {
          true: [error.text, error.border],
        },
        type: {
          select: [],
          file: ['!h-8', '!p-0'],
          color: ['!p-0'],
          checkbox: [inputs.checkable, '!px-0'],
          textarea: ['duration-0', 'px-3', 'py-1.5', 'h-fit', 'h-0'],
        },
        resize: {
          none: ['!resize-none'],
          vertical: ['!resize-y'],
          horizontal: ['!resize-x'],
          both: ['!resize'],
        },
      },
      defaultVariants: {
        size: 'md',
        variant: 'outlined',
        resize: 'none',
      },
      compoundVariants: [
        {
          clearable: true,
          endAdornment: true,
          className: ['pr-16'],
        },
        // COLOR
        {
          type: 'color',
          size: 'sm',
          className: [size.sm.height, size.sm.width, size.sm.fontSize],
        },
        {
          type: 'color',
          size: 'md',
          className: [size.md.height, size.md.width, size.md.fontSize],
        },
        {
          type: 'color',
          size: 'lg',
          className: [size.lg.height, size.lg.width, size.lg.fontSize],
        },
        // TEXTAREA
        {
          type: 'textarea',
          size: 'sm',
          className: [size.sm.minHeight, size.sm.fontSize],
        },
        {
          type: 'textarea',
          size: 'md',
          className: [size.md.minHeight, size.md.fontSize],
        },
        {
          type: 'textarea',
          size: 'lg',
          className: [size.lg.minHeight, size.lg.fontSize],
        },
      ],
    }
  )

export const inputIcon = cva(
  [
    'absolute',
    'bottom-1/2',
    'transform',
    'translate-y-1/2',
    'inline-flex',
    'items-center',
    'w-fit',
  ],
  {
    variants: {
      position: {
        left: ['left-3'],
        right: ['right-3'],
      },
      type: {
        select: [],
      },
    },
    compoundVariants: [
      {
        type: 'select',
        position: 'right',
        className: ['right-5'],
      },
    ],
  }
)
