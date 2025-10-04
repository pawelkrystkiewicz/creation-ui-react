import { ListboxOption, ListboxOptionProps } from '@headlessui/react'
import { ForwardedRef, forwardRef } from 'react'
import { Icon } from '../icon'
import { twMerge } from 'tailwind-merge'
import { selectOptionClasses } from '../classes'
import clsx from 'clsx'

interface SelectOptionProps extends ListboxOptionProps {
  selected?: boolean
  multiple?: boolean
  truncate?: boolean
}

export const SelectOption = forwardRef(function SelectOption(
  {
    children,
    selected,
    className,
    disabled,
    multiple,
    truncate,
    ...props
  }: SelectOptionProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <ListboxOption
      ref={ref}
      {...props}
      className={twMerge(
        selectOptionClasses({
          selected,
          className,
          disabled,
          multiple,
          truncate,
        }),
      )}
    >
      {children}
    </ListboxOption>
  )
})
