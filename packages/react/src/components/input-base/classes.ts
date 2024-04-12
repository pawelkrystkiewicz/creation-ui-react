import { classes, formClassesMap, sharedErrorClasses } from '@root/classes'
import { cva } from 'class-variance-authority'

export const inputClassesCVA = cva(
  [
    'rounded',
    'peer',
    'block',
    'w-full',
    'disabled:pointer-events-none',
    'text-size',
    'size',
  ],
  {
    variants: {
      clearable: { true: 'pl-10', false: [] },
      interactionsDisabled: {
        true: ['pointer-events-none'],
        false: null,
      },
      variant: {
        contained: [classes.input, 'bg-background-input', 'border-transparent'],
        outlined: [classes.input],
        text: [classes.input, 'border-0', 'border-b', 'rounded-b-none'],
        unstyled: [],
      },
      size: { sm: [], md: [], lg: [] },
      startAdornment: { true: 'pl-10', false: 'pl-3' },
      endAdornment: { true: 'pr-10', false: 'pr-3' },
      error: {
        true: sharedErrorClasses,
        false: null,
      },
      type: {
        ...formClassesMap,
        select: [formClassesMap.select],
        file: ['!h-8', '!p-0'],
        color: [formClassesMap.color, '!p-0'],
        checkbox: [formClassesMap.checkbox, '!px-0'],
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'outlined',
    },
    compoundVariants: [
      {
        clearable: true,
        endAdornment: true,
        className: ['pr-16'],
      },
      {
        type: 'color',
        size: 'sm',
        className: ['!size-7'],
      },
      {
        type: 'color',
        size: 'md',
        className: ['!size-8'],
      },
      {
        type: 'color',
        size: 'lg',
        className: ['!size-10'],
      },
    ],
  }
)
