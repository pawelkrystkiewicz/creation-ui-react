import { cva, type VariantProps } from 'class-variance-authority'

export const cuiInputContainer = cva(
  [
    // Basic layout
    'relative',
    'group',
    'block',
    'w-fit',
    // Border
    'border-border',
    'group-hover:border-primary',
    'group-active:border-primary',
    'group-focus:border-primary',
    'group-focus-within:border-primary',
    // Invalid state
    'invalid:border-error',
    'invalid:hover:border-error/80',
    // Disabled state
    'disabled:border-border/20',
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
      inputType: {
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
      inputType: 'default',
      border: 'full',
      background: true,
      containerHeight: 'fixed',
    },
    compoundVariants: [
      {
        clearable: true,
        adornments: 'end',
        class: '[--input-pr:calc(--spacing(3.5)-1px+var(--ui-icon-height)*2)]',
      },
    ],
  },
)

export type InputContainerStyles = VariantProps<typeof cuiInputContainer>
