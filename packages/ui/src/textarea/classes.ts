import { cva } from 'class-variance-authority'

export const TextareaStyles = cva([], { variants: {} })

export const containerClasses = [
  // Basic layout
  'relative',
  'block',
  'w-full',
  // Background color + shadow applied to inset pseudo element, so shadow blends with border in light mode
  'before:absolute',
  'before:inset-px before:rounded-[calc(var(--radius-lg)-1px)]',
  'before:bg-white before:shadow-sm',
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
  'has-data-disabled:before:bg-zinc-950/5',
  'has-data-disabled:before:shadow-none',
]
