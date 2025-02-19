import {
  FloatingFocusManager,
  FloatingPortal,
  useMergeRefs,
} from '@floating-ui/react'
import clsx from 'clsx'
import type { HTMLProps } from 'react'
import { forwardRef } from 'react'
import { popoverContentClasses } from './classes'
import { usePopoverContext } from './context'

interface PopoverContentProps extends Omit<HTMLProps<HTMLDivElement>, 'size'> {
  zIndex?: number
}

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent({ className, zIndex, ...props }, propRef) {
    const { context: floatingContext, ...ctx } = usePopoverContext()
    const ref = useMergeRefs([ctx.refs.setFloating, propRef])

    if (!floatingContext.open) return null

    const style = {
      // @ts-ignore
      ...ctx.floatingStyles,
      ...props.style,
      zIndex,
    }

    return (
      <FloatingPortal>
        <FloatingFocusManager context={floatingContext} modal={ctx.modal}>
          <div
            ref={ref}
            style={style}
            className={clsx(popoverContentClasses, className)}
            aria-labelledby={ctx.labelId}
            aria-describedby={ctx.descriptionId}
            {...ctx.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingPortal>
    )
  },
)
