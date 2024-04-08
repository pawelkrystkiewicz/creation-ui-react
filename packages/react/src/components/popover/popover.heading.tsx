import { useId } from '@floating-ui/react'
import type { HTMLProps } from 'react'
import { forwardRef, useLayoutEffect } from 'react'
import { ElementSize } from '../../types'
import { popoverHeadingClasses } from './classes'
import { usePopoverContext } from './context'
interface PopoverHeadingProps
  extends Omit<HTMLProps<HTMLHeadingElement>, 'size'> {
  size?: ElementSize
}

export const PopoverHeading = forwardRef<
  HTMLHeadingElement,
  PopoverHeadingProps
>(function PopoverHeading({ size, children, className, ...props }, ref) {
  const { setLabelId, ...ctx } = usePopoverContext()
  const id = useId()

  const finalSize = size ?? ctx.size

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
      className={popoverHeadingClasses({ size: finalSize, className })}
    >
      {children}
    </h2>
  )
})
