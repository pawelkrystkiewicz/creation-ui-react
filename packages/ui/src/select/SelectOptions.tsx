import { ListboxOptions } from '@headlessui/react'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
import { useSelectContext } from './SelectContext'
import { DropdownMenu } from '../shared'
import { twMerge } from 'tailwind-merge'

interface SelectOptionsProps {
  children?: ReactNode
  className?: string
}

export const SelectOptions = forwardRef<HTMLDivElement, SelectOptionsProps>(
  ({ children, className }, ref) => {
    const { open, disabled } = useSelectContext()

    if (disabled) {
      return null
    }

    return (
      <ListboxOptions
        ref={ref}
        transition
        className={twMerge(
          'outline-transparent transition micro-interactions data-closed:opacity-0 -mx-3.5 !z-(--ui-z-dropdowns) bg-background-primary',
          className,
        )}
      >
        <DropdownMenu className='mt-2 w-full' open={open}>
          {children}
        </DropdownMenu>
      </ListboxOptions>
    )
  },
)
