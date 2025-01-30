import { cva } from 'class-variance-authority'

export const inputStyles = cva(
  [
    // Basic layout
    'relative',
    'block',
    'w-full',
    'h-[var(--ui-height)]',
    'appearance-none',
    'rounded-md',
    // Typography
    'text-base/6',
    'text-zinc-950',
    'placeholder:text-zinc-500',
    'sm:text-sm/6',
    'dark:text-white',
    // Border
    'border',
    'border-zinc-950/10',
    'data-hover:border-zinc-950/20',
    'dark:border-white/10',
    'dark:data-hover:border-white/20',
    // Background color
    'bg-transparent',
    'dark:bg-white/5',
    // Hide default focus styles
    'focus:outline-hidden',
    // Invalid state
    'data-invalid:border-error',
    'data-invalid:data-hover:border-error',
    'dark:data-invalid:border-error',
    'dark:data-invalid:data-hover:border-error',
    // Disabled state
    'data-disabled:border-zinc-950/20',
    'dark:data-disabled:border-white/15',
    'dark:data-disabled:bg-white/[2.5%]',
    'dark:data-hover:data-disabled:border-white/15',
    // System icons
    'dark:[color-scheme:dark]',
    // Padding
    'py-[calc(--spacing(2.5)-1px)]',
    'pr-[calc(var(--input-pr)+var(--input-pr-clearable))]',
    'pl-[calc(var(--input-pl))]',
  ],
  {
    variants: {
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
    },
    defaultVariants: {
      adornments: false,
      isDateType: false,
    },
  },
)

export const inputBorderStyles = [
  // Basic layout
  'relative',
  'block',
  'w-full',
  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  'before:absolute',
  'before:inset-px',
  'before:rounded-[calc(var(--radius-lg)-1px)]',
  'before:bg-white',
  // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
  'dark:before:hidden',
  // Focus ring
  'after:pointer-events-none',
  'after:absolute',
  'after:inset-0',
  'after:rounded-lg',
  'after:ring-transparent',
  'after:ring-inset',
  'sm:focus-within:after:ring-2',
  'sm:focus-within:after:ring-primary',
  // Disabled state
  'has-data-disabled:opacity-50',
  'has-data-disabled:before:bg-neutral-950/5',
  // Invalid state
  'has-data-invalid:before:border-error',
]
