import { useMergeRefs } from '@floating-ui/react'
import clsx from 'clsx'
import type { HTMLProps, ReactNode } from 'react'
import React, { forwardRef } from 'react'
import { ElementSize } from '../../types'
import { popoverTriggerClasses } from './classes'
import { usePopoverContext } from './context'
import { usePopover } from './use-popover'

interface PopoverTriggerProps extends Omit<HTMLProps<HTMLElement>, 'size'> {
  children: ReactNode
  asChild?: boolean
  size?: ElementSize
}

export const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>(
  function PopoverTrigger(
    { children, asChild = false, size, className, ...props },
    propRef
  ) {
    const ctx = usePopoverContext()
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([ctx.refs.setReference, propRef, childrenRef])
    const finalSize = size ?? ctx.size

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        ctx.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          'data-state': ctx.open ? 'open' : 'closed',
        })
      )
    }

    return (
      <div
        ref={ref}
        data-state={ctx.open ? 'open' : 'closed'}
        {...ctx.getReferenceProps(props)}
        className={clsx(popoverTriggerClasses({ className, size: finalSize }))}
      >
        {children}
      </div>
    )
  }
)
