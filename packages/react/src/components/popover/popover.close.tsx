import clsx from 'clsx'
import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import { usePopoverContext } from './context'

interface PopoverCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  function PopoverClose({ className, ...props }, ref) {
    const { setOpen } = usePopoverContext()

    return (
      <button
        type='button'
        ref={ref}
        {...props}
        className={clsx(className)}
        onClick={event => {
          props.onClick?.(event)
          setOpen(false)
        }}
      />
    )
  }
)
