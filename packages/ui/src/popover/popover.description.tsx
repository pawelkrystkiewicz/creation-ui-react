import { useId } from '@floating-ui/react'
import clsx from 'clsx'
import type { HTMLProps } from 'react'
import { forwardRef, useLayoutEffect } from 'react'
import { popoverDescriptionClasses } from './classes'
import { usePopoverContext } from './context'

export interface PopoverDescriptionProps
  extends Omit<HTMLProps<HTMLParagraphElement>, 'size'> {}

export const PopoverDescription = forwardRef<
  HTMLParagraphElement,
  HTMLProps<HTMLParagraphElement>
>(function PopoverDescription({ children, size, className, ...props }, ref) {
  const { setDescriptionId,  } = usePopoverContext()
  const id = useId()


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
      className={clsx(popoverDescriptionClasses, className)}
    >
      {children}
    </p>
  )
})
