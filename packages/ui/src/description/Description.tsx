import type { FC } from 'react'
import type { DescriptionProps } from './types'
import { twMerge } from 'tailwind-merge'

export const Description: FC<DescriptionProps> = ({ className, ...props }) => {
  return (
    <p
      data-slot='description'
      {...props}
      className={twMerge(
        className,
        'text-base/6 text-zinc-500 group-data-disabled:opacity-50 sm:text-sm/6 dark:text-zinc-400',
      )}
    />
  )
}
