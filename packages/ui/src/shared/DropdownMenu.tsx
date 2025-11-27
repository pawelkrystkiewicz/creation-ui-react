import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef } from 'react'
import { ZIndex, zIndexStyles } from '../classes'
import { twMerge } from 'tailwind-merge'

export const dropdownMenuClasses = cva(
  [
    'bg-background',
    'border-border',
    'border',
    'shadow-md',
    'w-fit',
    'rounded-md',
    'flex',
    'flex-col',
    'items-start',
    'text-left',
    'gap-1',
    'p-1',

    'outline-transparent',
  ],
  {
    variants: {
      open: { true: 'block', false: 'hidden' },
      placement: {
        top: ['!mb-1'],
        bottom: ['!mt-0'],
      },
    },
  },
)

type DropdownMenudStyles = VariantProps<typeof dropdownMenuClasses>

export interface DropdownMenuProps extends React.HTMLProps<HTMLUListElement> {
  open?: boolean
  placement?: DropdownMenudStyles['placement']
  zIndex?: ZIndex
}

export const DropdownMenu = forwardRef<HTMLUListElement, DropdownMenuProps>(
  (
    { children, open, className, placement, zIndex = 'dropdown', ...props },
    ref,
  ) => {
    return (
      <ul
        ref={ref}
        {...props}
        className={twMerge(
          zIndexStyles({ zIndex }),
          dropdownMenuClasses({ open, className, placement }),
        )}
      >
        {children}
      </ul>
    )
  },
)
