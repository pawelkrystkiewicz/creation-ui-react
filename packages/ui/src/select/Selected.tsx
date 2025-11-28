import { forwardRef, ReactNode, useMemo } from 'react'
import { useSelectContext } from './SelectContext'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const classes = cva([], {
  variants: {
    disabled: {
      true: ['opacity-50', 'pointer-events-none'],
      false: [],
    },
    text: {
      placeholder: ['text-muted-foreground'],
      value: ['text-foreground'],
    },
  },
})

interface SelectedProps {
  placeholder?: string
  formatter?: (value: any) => string
  children?: ReactNode
  className?: string
}

export const Selected = forwardRef<HTMLSpanElement, SelectedProps>(
  (
    { placeholder = 'Select an option', formatter, children, ...props },
    ref,
  ) => {
    const { value, disabled } = useSelectContext()

    const type = !!children ? 'value' : !value ? 'placeholder' : 'value'
    const className = useMemo(
      () =>
        twMerge(
          classes({
            disabled,
            text: type,
          }),
          props.className,
        ),
      [disabled, type, props.className],
    )

    switch (true) {
      case !!children:
        return (
          <span ref={ref} className={className}>
            {children}
          </span>
        )
      case !value:
        return (
          <span className={className} ref={ref}>
            {placeholder}
          </span>
        )
      default:
        return (
          <span ref={ref} className={className}>
            {formatter?.(value) ?? String(value)}
          </span>
        )
    }
  },
)
