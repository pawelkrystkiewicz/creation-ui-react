import clsx from 'clsx'
import React from 'react'

interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td
      ref={ref}
      className={clsx(
        'px-4 py-2 align-middle [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    />
  ),
)
