import { forwardRef } from 'react'
import { twix } from '../../utils'

const classes = twix(
  'w-full',
  'gap-3',
  'flex',
  'items-center',
  'justify-between',
  'pb-2'
)

export const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={classes(className)} {...props} />
))
