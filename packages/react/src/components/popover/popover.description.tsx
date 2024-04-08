import { useId } from '@floating-ui/react'
import clsx from 'clsx'
import type { HTMLProps } from 'react'
import { forwardRef, useLayoutEffect } from 'react'
import { ElementSize } from '../../types'
import { popoverDescriptionClasses } from './classes'
import { usePopoverContext } from './context'
import { usePopover } from './use-popover'

export interface PopoverDescriptionProps
  extends Omit<HTMLProps<HTMLParagraphElement>, 'size'> {
  size?: ElementSize
}

export const PopoverDescription = forwardRef<
  HTMLParagraphElement,
  HTMLProps<HTMLParagraphElement>
>(function PopoverDescription({ children, size, className, ...props }, ref) {
  const { setDescriptionId, ...ctx } = usePopoverContext()
  const id = useId()

  const finalSize: ElementSize =
    !size || typeof size === 'number' ? 'md' : size ?? ctx.size

  // Only sets `aria-describedby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setDescriptionId(id)
    return () => setDescriptionId(undefined)
  }, [id, setDescriptionId])

  return (
    <p
      {...props}
      ref={ref}
      id={id}
      className={clsx(
        popoverDescriptionClasses({ size: finalSize, className })
      )}
    >
      {children}
    </p>
  )
})
