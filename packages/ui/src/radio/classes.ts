import { cva } from 'class-variance-authority'

export const radioGroupStyles = cva(
  [
    // Basic groups
    'space-y-3',
    '**:data-[slot=label]:font-normal',
    // With descriptions
    'has-data-[slot=description]:space-y-6',
    'has-data-[slot=description]:**:data-[slot=label]:font-medium',
  ],
  {
    variants: {},
  },
)

export const radioStyles = cva(
  [
    // Basic layout
    'relative',
    'isolate',
    'flex',
    'size-[1.1875rem]',
    'shrink-0',
    'rounded-full',
    'sm:size-[1.0625rem]',
    // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
    'before:absolute',
    'before:inset-0',
    'before:-z-10',
    'before:rounded-full',
    'before:bg-white',
    'before:shadow-sm',
    // Background color when checked
    'group-data-checked:before:bg-(--radio-checked-bg)',
    // Background color is moved to control and shadow is removed in dark mode so hide `before` pseudo
    'dark:before:hidden',
    // Background color applied to control in dark mode
    'dark:bg-white/5',
    'dark:group-data-checked:bg-(--radio-checked-bg)',
    // Border
    'border',
    'border-neutral-950/15',
    'group-data-checked:border-transparent',
    'group-data-hover:group-data-checked:border-transparent',
    'group-data-hover:border-neutral-950/30',
    'group-data-checked:bg-(--radio-checked-border)',
    'dark:border-white/15 dark:group-data-checked:border-white/5 dark:group-data-hover:group-data-checked:border-white/5 dark:group-data-hover:border-white/30',
    // Inner highlight shadow
    'after:absolute',
    'after:inset-0',
    'after:rounded-full',
    'after:shadow-[inset_0_1px_--theme(--color-white/15%)]',
    'dark:after:-inset-px',
    'dark:after:hidden',
    'dark:after:rounded-full',
    'dark:group-data-checked:after:block',
    // Indicator color (light mode)
    '[--radio-indicator:transparent]',
    'group-data-checked:[--radio-indicator:var(--radio-checked-indicator)]',
    'group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)]',
    'group-data-hover:[--radio-indicator:var(--color-neutral-900)]/10',
    // Indicator color (dark mode)
    'dark:group-data-hover:group-data-checked:[--radio-indicator:var(--radio-checked-indicator)]',
    'dark:group-data-hover:[--radio-indicator:var(--color-neutral-700)]',
    // Focus ring
    'group-data-focus:outline',
    'group-data-focus:outline-2',
    'group-data-focus:outline-offset-2',
    'group-data-focus:outline-blue-500',
    // Disabled state
    'group-data-disabled:opacity-50',
    'group-data-disabled:border-neutral-950/25',
    'group-data-disabled:bg-neutral-950/5',
    'group-data-disabled:[--radio-checked-indicator:var(--color-neutral-950)]/50',
    'group-data-disabled:before:bg-transparent',
    'dark:group-data-disabled:border-white/20',
    'dark:group-data-disabled:bg-white/[2.5%]',
    'dark:group-data-disabled:[--radio-checked-indicator:var(--color-white)]/50',
    'dark:group-data-checked:group-data-disabled:after:hidden',
    // Color
    '[--radio-checked-bg:var(--color-neutral-900)]',
    '[--radio-checked-border:var(--color-neutral-950)]/90',
    '[--radio-checked-indicator:var(--color-white)]',
    'dark:[--radio-checked-bg:var(--color-neutral-600)]',
  ],
  {
    variants: {},
  },
)
