import { ListboxOption, ListboxOptionProps } from '@headlessui/react'
import { ForwardedRef, forwardRef, ReactNode } from 'react'
import { Icon } from '../icon'
import { twMerge } from 'tailwind-merge'
import { selectOptionClasses } from '../classes'
import { useSelectContext } from './SelectContext'

interface SelectOptionProps extends Omit<ListboxOptionProps, 'selected'> {
  children?: ReactNode
  className?: string
  multiple?: boolean
  truncate?: boolean
  showCheckIcon?: boolean
}

export const SelectOption = forwardRef<HTMLDivElement, SelectOptionProps>(
  (
    {
      children,
      className,
      disabled,
      multiple,
      truncate,
      showCheckIcon = true,
      value,
      ...props
    },
    ref,
  ) => {
    const { value: selectedValue } = useSelectContext()
    const isSelected = value === selectedValue

    return (
      <ListboxOption
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
            className={twMerge(
              'text-primary micro-interactions',
              isSelected ? 'opacity-100' : 'opacity-0',
            )}
          />
        )}
      </ListboxOption>
    )
  },
)
