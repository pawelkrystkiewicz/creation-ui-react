import { forwardRef } from 'react'
import { twix } from '@creation-ui/react'

const classes = twix(
  'text-2xl',
  'sm:text-xl',
  'md:text-2xl',
  'lg:text-3xl',
  'xl:text-4xl',
  'font-bold',
  'my-1.5'
)

export const CardStats = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={classes(className)} {...props} />
))
