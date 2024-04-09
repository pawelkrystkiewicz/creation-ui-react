import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import React from 'react'
import { useTheme } from '../../theme'

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  variant?: 'outlined' | 'text'
}

const tableClasses = cva(['overflow-clip', 'relative', 'w-full'], {
  variants: {
    variant: {
      outlined: 'border',
      text: 'border-none',
      false: '',
    },
  },
})

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ className, ...props }, ref) => {
    const { variant: defaultVariant } = useTheme()
    const { variant = defaultVariant, ...rest } = props

    return (
      <div
        className={tableClasses({
          // @ts-expect-error
          variant,
          className,
        })}
      >
        <table
          ref={ref}
          className={clsx('w-full caption-bottom text-sm overflow-auto')}
          {...rest}
        />
      </div>
    )
  },
)
