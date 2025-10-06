import { ListboxButton } from '@headlessui/react'
import { forwardRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { ClearButton } from '../clear-button'
import { DropdownChevron } from '../dropdown-chevron'
import { useSelectContext } from './SelectContext'

interface SelectButtonProps {
  children?: ReactNode
  className?: string
}

export const SelectButton = forwardRef<HTMLButtonElement, SelectButtonProps>(
  ({ children, className }, ref) => {
    const { open, disabled, value, onClear } = useSelectContext()

    const isClearable = Boolean(
      !disabled && typeof onClear === 'function' && !!value,
    )

    const handleClear = (e: React.MouseEvent<SVGSVGElement>) => {
      e.stopPropagation()
      e.preventDefault()
      onClear?.()
    }

    return (
      <ListboxButton
        ref={ref}
        className={twMerge(
          'flex items-center cursor-pointer justify-between w-full min-h-full',
          className,
        )}
      >
        {children}
        <div className='flex items-center gap-1'>
          {isClearable && (
            <ClearButton
              onClick={handleClear}
              role='button'
              className='z-10'
            />
          )}
          <DropdownChevron open={open} />
        </div>
      </ListboxButton>
    )
  },
)
