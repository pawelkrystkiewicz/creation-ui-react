import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'
import type { ElementSize } from '@types'
import { popoverCloseClasses } from './classes'
import { usePopoverContext } from './context'
import clsx from 'clsx'

interface PopoverCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ElementSize
}

export const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  function PopoverClose({ size, className, ...props }, ref) {
    const { setOpen, ...ctx } = usePopoverContext()

    const finalSize = size ?? ctx.size

    return (
      <button
        type='button'
        ref={ref}
        {...props}
        className={clsx(popoverCloseClasses, finalSize, className)}
        onClick={event => {
          props.onClick?.(event)
          setOpen(false)
        }}
      />
    )
  }
)
