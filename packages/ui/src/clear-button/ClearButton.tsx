import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import { Icon } from '../icon'

const classes = cva([
  'hover:fill-error',
  'dark:hover:fill-error',
  'cursor-pointer',
  'select-none',
  'size-[var(--ui-icon-height)]',
  'flex-shrink-0',
  'border-0',
  'bg-transparent',
  'p-0',
  'flex',
  'items-center',
  'justify-center',
])

export interface ClearButtonProps {
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
  className?: string
}

export const ClearButton = forwardRef<HTMLElement, ClearButtonProps>(
  ({ onClick, className, ...props }, ref) => {
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type='button'
        aria-label='Clear selection'
        data-testid='cui-clear-button'
        onClick={onClick}
        className={twMerge(classes(), className)}
        {...props}
      >
        <Icon icon='close' aria-hidden='true' />
      </button>
    )
  },
)
