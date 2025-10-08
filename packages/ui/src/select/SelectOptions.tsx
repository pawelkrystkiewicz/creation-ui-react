import { ListboxOptions } from '@headlessui/react'
import { forwardRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { DropdownMenu } from '../shared'
import { useSelectContext } from './SelectContext'
import { cva } from 'class-variance-authority'
import { ZIndex, zIndexStyles } from '../classes'

const optionsStyles = cva(
  [
    '!outline-none transition micro-interactions data-closed:opacity-0',
    'absolute left-0 right-0 top-full z-(--ui-z-dropdowns)',
    'bg-transparent',
    'border-none',
    'shadow-none',
  ],
  {
    variants: {},
  },
)

interface SelectOptionsProps {
  children?: ReactNode
  className?: string
  zIndex?: ZIndex
}

export const SelectOptions = forwardRef<HTMLDivElement, SelectOptionsProps>(
  ({ children, className, zIndex = 'dropdown' }, ref) => {
    const { open, disabled } = useSelectContext()

    if (disabled) {
      return null
    }

    return (
      <ListboxOptions
        ref={ref}
        transition
        className={twMerge(
          zIndexStyles({ zIndex }),
          optionsStyles(),
          className,
        )}
      >
        <DropdownMenu className='mt-2 w-full' open={open} zIndex={'default'}>
          {children}
        </DropdownMenu>
      </ListboxOptions>
    )
  },
)
