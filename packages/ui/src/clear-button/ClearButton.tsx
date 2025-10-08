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
  asDiv?: boolean
}

export const ClearButton = forwardRef<HTMLElement, ClearButtonProps>(
  ({ onClick, className, asDiv = false, ...props }, ref) => {
    const commonProps = {
      onClick,
      className: twMerge(classes(), className),
      ...props,
    }

    if (asDiv) {
      return (
        <div
          ref={ref as React.Ref<HTMLDivElement>}
          role="button"
          tabIndex={0}
          aria-label="Clear selection"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              onClick?.(e as any)
            }
          }}
          {...commonProps}
        >
          <Icon icon='close' />
        </div>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type="button"
        aria-label="Clear selection"
        {...commonProps}
      >
        <Icon icon='close' />
      </button>
    )
  },
)
