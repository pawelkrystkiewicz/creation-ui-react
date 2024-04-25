import clsx from 'clsx'

export const getCellWidth = (width?: number | string, className?: string) => ({
  ...(width ? { width, className } : { className: clsx(className, 'w-full') }),
})
