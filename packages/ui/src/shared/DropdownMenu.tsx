import { cva, VariantProps } from 'class-variance-authority'
import React from 'react'
import { ZIndex, zIndexStyles } from '../classes'
import { twMerge } from 'tailwind-merge'

export const dropdownMenuClasses = cva(
  [
    'bg-popover',
    'text-popover-foreground',
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

export const DropdownMenu = ({
  ref,
  children,
  open,
  className,
  placement,
  zIndex = 'dropdown',
  ...props
}: DropdownMenuProps & { ref?: React.Ref<HTMLUListElement> }) => {
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
  }
