import { useMergeRefs } from '@floating-ui/react'
import clsx from 'clsx'
import type { HTMLProps, ReactNode } from 'react'
import React, { forwardRef } from 'react'
import { popoverTriggerClasses } from './classes'
import { usePopoverContext } from './context'

interface PopoverTriggerProps extends Omit<HTMLProps<HTMLElement>, 'size'> {
  children: ReactNode
  asChild?: boolean
}

export const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>(
  function PopoverTrigger(
    { children, asChild = false, className, ...props },
    propRef,
  ) {
    const ctx = usePopoverContext()
    const childrenRef = (children as any).ref
    const ref = useMergeRefs([ctx.refs.setReference, propRef, childrenRef])

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        ctx.getReferenceProps({
          ref,
          ...props,
          ...(children.props as any),
          'data-state': ctx.open ? 'open' : 'closed',
        }),
      )
    }

    return (
      <div
        ref={ref}
        data-state={ctx.open ? 'open' : 'closed'}
        {...ctx.getReferenceProps(props)}
        className={clsx(className, popoverTriggerClasses)}
      >
        {children}
      </div>
    )
  },
)
