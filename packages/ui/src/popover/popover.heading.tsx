import { useId } from '@floating-ui/react'
import clsx from 'clsx'
import type { HTMLProps } from 'react'
import { forwardRef, useLayoutEffect } from 'react'
import { popoverHeadingClasses } from './classes'
import { usePopoverContext } from './context'

interface PopoverHeadingProps
  extends Omit<HTMLProps<HTMLHeadingElement>, 'size'> {}

export const PopoverHeading = forwardRef<
  HTMLHeadingElement,
  PopoverHeadingProps
>(function PopoverHeading({ children, className, ...props }, ref) {
  const { setLabelId } = usePopoverContext()
  const id = useId()

  // Only sets `aria-labelledby` on the Popover root element
  // if this component is mounted inside it.
  useLayoutEffect(() => {
    setLabelId(id)
    return () => setLabelId(undefined)
  }, [id, setLabelId])

  return (
    <h2
      {...props}
      ref={ref}
      id={id}
      className={clsx(className, popoverHeadingClasses)}
    >
      {children}
    </h2>
  )
})
