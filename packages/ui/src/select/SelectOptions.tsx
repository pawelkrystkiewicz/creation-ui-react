import { Select as BaseSelect } from '@base-ui/react/select'
import { forwardRef, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { DropdownMenu } from '../shared'
import { useSelectContext } from './SelectContext'
import { ZIndex, zIndexStyles } from '../classes'

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
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          ref={ref}
          className={twMerge(
            zIndexStyles({ zIndex }),
            '!outline-none',
            'transition',
            'micro-interactions',
            'opacity-0',
            'data-open:opacity-100',
            className,
          )}
        >
          <BaseSelect.Popup>
            <DropdownMenu className='mt-2 w-full' open={open} zIndex={'default'}>
              {children}
            </DropdownMenu>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    )
  },
)
