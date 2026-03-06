import { Select as BaseSelect } from '@base-ui/react/select'
import { forwardRef, ReactNode } from 'react'
import { Icon } from '../icon'
import { twMerge } from 'tailwind-merge'
import { selectOptionClasses } from '../classes'
import { useSelectContext } from './SelectContext'

interface SelectOptionProps {
  children?: ReactNode
  className?: string
  disabled?: boolean
  multiple?: boolean
  truncate?: boolean
  showCheckIcon?: boolean
  value?: unknown
}

export const SelectOption = (
    { ref, children, className, disabled, multiple, truncate, showCheckIcon = true, value, ...props }: SelectOptionProps & { ref?: React.RefObject<HTMLElement | null> },
  ) => {
    const { value: selectedValue } = useSelectContext()
    const isSelected = value === selectedValue

    return (
      <BaseSelect.Item
        ref={ref}
        value={value}
        disabled={disabled}
        {...props}
        className={twMerge(
          selectOptionClasses({
            selected: isSelected,
            className,
            disabled,
            multiple,
            truncate,
          }),
        )}
      >
        {children}
        {showCheckIcon && (
          <Icon
            icon='check'
            aria-hidden='true'
            className={twMerge(
              'text-primary micro-interactions',
              isSelected ? 'opacity-100' : 'opacity-0',
            )}
          />
        )}
      </BaseSelect.Item>
    )
  }
