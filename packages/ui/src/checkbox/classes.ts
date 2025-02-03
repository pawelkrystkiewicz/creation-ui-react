import { cva } from 'class-variance-authority'

export const checkboxStyles = cva(
  [
    // Basic layout
    'micro-interaction',
    'relative',
    'isolate',
    'flex',
    'size-5',
    'items-center',
    'justify-center',
    'rounded-[0.2rem]',
    'sm:size-4',
    // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
    'before:absolute',
    'before:inset-0',
    'before:-z-10',
    'before:rounded-[calc(0.2rem-1px)]',
    'before:bg-white',
    'before:shadow-sm',
    // Background color when checked
    'group-data-checked:before:bg-[var(--checkbox-checked-bg)]',
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    'dark:before:hidden',
    // Background color applied to control in dark mode
    'dark:bg-white/5',
    'dark:group-data-checked:bg-[var(--checkbox-checked-bg)]',
    // Border
    'border',
    'border-neutral-950/15',
    'group-data-checked:border-transparent',
    'group-data-hover:group-data-checked:border-transparent',
    'group-data-hover:border-neutral-950/30',
    'group-data-checked:bg-[var(--checkbox-checked-border)]',
    'dark:border-white/15',
    'dark:group-data-checked:border-white/5',
    'dark:group-data-hover:group-data-checked:border-white/5',
    'dark:group-data-hover:border-white/30',
    // Inner highlight shadow
    'after:absolute',
    'after:inset-0',
    'after:rounded-[calc(0.2rem-1px)]',
    'after:shadow-[inset_0_1px_--theme(--color-white/15%)]',
    'dark:after:-inset-px',
    'dark:after:hidden',
    'dark:after:rounded-[0.2rem]',
    'dark:group-data-checked:after:block',
    // Focus ring
    'group-data-focus:outline',
    'group-data-focus:outline-2',
    'group-data-focus:outline-offset-2',
    'group-data-focus:outline-primary',

    // 'group-data-disabled:before:bg-transparent',
    'dark:group-data-checked:group-data-disabled:after:hidden',
    // Forced colors mode
    'forced-colors:[--checkbox-check:HighlightText]',
    'forced-colors:[--checkbox-checked-bg:Highlight]',
    'forced-colors:group-data-disabled:[--checkbox-check:Highlight]',
    'dark:forced-colors:[--checkbox-check:HighlightText]',
    'dark:forced-colors:[--checkbox-checked-bg:Highlight]',
    'dark:forced-colors:group-data-disabled:[--checkbox-check:Highlight]',
    '[--checkbox-check:var(--color-white)]',
    '[--checkbox-checked-bg:var(--color-primary)]',
  ],
  {
    variants: {
      readOnly: {
        true: ['cursor-not-allowed'],
        false: [
          // Disabled state
          'group-data-disabled:opacity-50',
        ],
      },
    },
  },
)
