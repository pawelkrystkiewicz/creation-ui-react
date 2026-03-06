import type { FC } from 'react'
import type { ErrorProps } from './types'
import { twMerge } from 'tailwind-merge'

export const Error: FC<ErrorProps> = ({ className, ...props }) => {
  return (
    <p
      data-slot='error'
      {...props}
      className={twMerge(
        className,
        'text-base/6 text-red-600 group-data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500',
      )}
    />
  )
}
