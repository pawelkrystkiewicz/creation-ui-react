import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    // Basic layout
    'relative',
    'block',
    'w-full',

    'appearance-none',
    // Typography
    'text-base/6',
    'placeholder:text-neutral-500',
    'sm:text-sm/6',
    'text-text-primary',

    // Hide default focus styles
    'focus:outline-hidden',
    // Border
    'border-neutral-950/10',
    'data-hover:border-neutral-950/20',
    'dark:border-white/10',
    'dark:data-hover:border-white/20',
    // Invalid state
    'data-invalid:border-error',
    'data-invalid:data-hover:border-error',
    'dark:data-invalid:border-error',
    'dark:data-invalid:data-hover:border-error',
    // Disabled state
    'data-disabled:border-neutral-950/20',
    'dark:data-disabled:border-white/15',
    'dark:data-disabled:bg-white/[2.5%]',
    'dark:data-hover:data-disabled:border-white/15',
    'dark:[color-scheme:dark]',
  ],
  {
    variants: {
      containerHeight: {
        fixed: 'h-[var(--ui-height)]',
        auto: 'h-fit min-h-[var(--ui-height)]',
      },
      isDateType: {
        true: [
          '[&::-webkit-datetime-edit-fields-wrapper]:p-0',
          '[&::-webkit-date-and-time-value]:min-h-[1.5em]',
          '[&::-webkit-datetime-edit]:inline-flex',
          '[&::-webkit-datetime-edit]:p-0',
          '[&::-webkit-datetime-edit-year-field]:p-0',
          '[&::-webkit-datetime-edit-month-field]:p-0',
          '[&::-webkit-datetime-edit-day-field]:p-0',
          '[&::-webkit-datetime-edit-hour-field]:p-0',
          '[&::-webkit-datetime-edit-minute-field]:p-0',
          '[&::-webkit-datetime-edit-second-field]:p-0',
          '[&::-webkit-datetime-edit-millisecond-field]:p-0',
          '[&::-webkit-datetime-edit-meridiem-field]:p-0',
        ],
        false: [],
      },
      adornments: {
        start: [
          '[--input-pl:calc(--spacing(3.5)-1px+var(--ui-icon-height))]',
          '[--input-pr:calc(--spacing(3.5)-1px)]',
        ],
        end: [
          '[--input-pr:calc(--spacing(3.5)-1px+var(--ui-icon-height))]',
          '[--input-pl:calc(--spacing(3.5)-1px)]',
        ],
        both: [
          '[--input-pr:calc(--spacing(3.5)-1px+var(--ui-icon-height))]',
          '[--input-pl:calc(--spacing(3.5)-1px+var(--ui-icon-height))]',
        ],
        false: [
          '[--input-pl:calc(--spacing(3.5)-1px)]',
          '[--input-pr:calc(--spacing(3.5)-1px)]',
        ],
      },
      clearable: {
        true: ['[--input-pr-clearable:var(--ui-icon-height)]'],
        false: ['[--input-pr-clearable:0px]'],
      },
      type: {
        default: [
          'py-1',
          'pr-[calc(var(--input-pr)+var(--input-pr-clearable))]',
          'pl-[calc(var(--input-pl))]',
        ],
        file: [
          'py-1',
          'pr-[calc(var(--input-pr)+var(--input-pr-clearable))]',
          'pl-[calc(var(--input-pl))]',
        ],
        color: [
          'py-[1px]',
          '[--input-pl:calc(--spacing(1.5))]',
          '[--input-pr:calc(--spacing(1.5))]',
          '[&::-webkit-color-swatch]:rounded-sm',
          '[&::-webkit-color-swatch]:border-none',
        ],
      },
      border: {
        full: ['border', 'rounded-md'],
        bottom: ['border-b'],
        none: ['border-none'],
      },
      background: {
        true: ['bg-background-secondary/50', 'dark:bg-background-secondary/20'],
        false: ['bg-transparent'],
      },
    },
    defaultVariants: {
      adornments: false,
      isDateType: false,
      type: 'default',
      border: 'full',
      background: true,
      containerHeight: 'fixed',
    },
  },
)

export type InputStylesType = VariantProps<typeof inputStyles>
