import React, { type FC } from 'react'
import type { ErrorProps } from './types'
import * as Headless from '@headlessui/react'
import { twMerge } from 'tailwind-merge'

export const Error: FC<ErrorProps> = ({ className, ...props }) => {
  return (
    <Headless.Description
      data-slot='error'
      {...props}
      className={twMerge(
        className,
        'text-base/6 text-red-600 data-disabled:opacity-50 sm:text-sm/6 dark:text-red-500',
      )}
    />
  )
}
