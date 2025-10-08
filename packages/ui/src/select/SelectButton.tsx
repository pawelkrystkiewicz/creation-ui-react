import { ListboxButton } from '@headlessui/react'
import { forwardRef, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'
import { ClearButton } from '../clear-button'
import { DropdownChevron } from '../dropdown-chevron'
import { isNonNulish } from '../utils'
import { useSelectContext } from './SelectContext'

const buttonClasses = cva(
  ['flex items-center cursor-pointer justify-between w-full min-h-full'],
  {
    variants: {
      disabled: {
        true: ['opacity-50', 'pointer-events-none'],
      },
    },
  },
)

interface SelectButtonProps {
  children?: ReactNode
  className?: string
}

export const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ children, className }, ref) => {
    const { open, disabled, value, onClear } = useSelectContext()

    const isClearable = Boolean(
      !disabled && typeof onClear === 'function' && isNonNulish(value),
    )

    const handleClear = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      e.preventDefault()
      onClear?.()
    }

    return (
      <ListboxButton
        ref={ref}
        className={twMerge(buttonClasses({ disabled }), className)}
      >
        {children}
        <div className='flex items-center gap-1'>
          {isClearable && <ClearButton onClick={handleClear} asDiv />}
          <DropdownChevron open={open} disabled={disabled} />
        </div>
      </ListboxButton>
    )
  },
)
