import { cva } from 'class-variance-authority'
import React from 'react'
import { useTheme } from '../../theme'

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  variant?: 'outlined' | 'text'
}

const rowClasses = cva(
  [
    //
    'transition-colors',
    'hover:bg-info-950/50',
    'data-[state=selected]:bg-info-800/50',
  ],
  {
    variants: {
      variant: {
        outlined: ['border-b'],
        text: '',
        false: '',
      },
    },
  },
)

export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => {
    const { variant: defaultVariant } = useTheme()
    const { variant = defaultVariant, ...rest } = props
    return (
      <tr
        ref={ref}
        className={rowClasses({
          className,
          // @ts-expect-error
          variant,
        })}
        {...props}
      />
    )
  },
)
