import { forwardRef, ReactNode } from 'react'
import { useSelectContext } from './SelectContext'

interface SelectedProps {
  placeholder?: string
  formatter?: (value: any) => string
  children?: ReactNode
}

export const Selected = forwardRef<HTMLSpanElement, SelectedProps>(
  ({ placeholder = 'Select an option', formatter, children }, ref) => {
    const { value } = useSelectContext()

    switch (true) {
      case !!children:
        return <span ref={ref}>{children}</span>
      case !value:
        return (
          <span className='text-text-secondary' ref={ref}>
            {placeholder}
          </span>
        )
      default:
        return (
          <span ref={ref} className=''>
            {formatter?.(value) ?? String(value)}
          </span>
        )
    }
  },
)
