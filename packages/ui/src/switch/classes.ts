import { cva } from 'class-variance-authority'
import clsx from 'clsx'

export const switchDot = clsx(
  // Basic layout
  'pointer-events-none',
  'relative',
  'inline-block',
  'size-[1.125rem]',
  'rounded-full',
  'sm:size-3.5',
  // Transition
  'translate-x-0',
  'micro-interactions',
  // Invisible border so the switch is still visible in forced-colors mode
  'border border-transparent',
  // Unchecked
  'bg-white',
  'ring-1',
  'shadow-sm',
  'ring-black/5',
  // Checked
  'group-data-checked:bg-(--switch)',
  'group-data-checked:shadow-(--switch-shadow)',
  'group-data-checked:ring-(--switch-ring)',
  'group-data-checked:translate-x-4 sm:group-data-checked:translate-x-3',
  // Disabled
  'group-data-checked:group-data-disabled:bg-white',
  'group-data-checked:group-data-disabled:shadow-sm',
  'group-data-checked:group-data-disabled:ring-black/5',
)

export const switchClasses = cva(
  [
    'group',
    'relative',
    'isolate',
    'inline-flex',
    'h-6',
    'w-10',
    'cursor-default',
    'rounded-full',
    'p-[3px]',
    'sm:h-5 sm:w-8',
    'forced-colors:outline',
    'forced-colors:[--switch-bg:Highlight]',
    'dark:forced-colors:[--switch-bg:Highlight]',
    // Unchecked
    'bg-neutral-200',
    'ring-1',
    'ring-black/5',
    'ring-inset',
    'dark:bg-white/5',
    'dark:ring-white/15',
    // Checked
    'data-checked:bg-(--switch-bg)',
    'data-checked:ring-(--switch-bg-ring)',
    // Focus
    'focus:outline-hidden',
    'data-focus:outline',
    'data-focus:outline-2',
    'data-focus:outline-offset-2',
    'data-focus:outline-blue-500',
    // Hover
    'data-hover:ring-black/15',
    'data-hover:data-checked:ring-(--switch-bg-ring)',
    'dark:data-hover:ring-white/25',
    'dark:data-hover:data-checked:ring-(--switch-bg-ring)',
    // Disabled
    'data-disabled:bg-neutral-200',
    'data-disabled:opacity-50',
    'data-disabled:data-checked:bg-neutral-200',
    'data-disabled:data-checked:ring-black/5',
    'dark:data-disabled:bg-white/15',
    'dark:data-disabled:data-checked:bg-white/15',
    'dark:data-disabled:data-checked:ring-white/15',
    // Color specific styles
    '[--switch-bg-ring:var(--color-primary)]/90',
    '[--switch-bg:var(--color-primary)]',
    'dark:[--switch-bg-ring:transparent]',
    '[--switch:white]',
    '[--switch-ring:var(--color-primary)]/90',
    '[--switch-shadow:var(--color-primary)]/20',
  ],
  {
    variants: {},
  },
)
