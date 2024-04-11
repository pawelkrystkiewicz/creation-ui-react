import { forwardRef } from 'react'
import { twix } from '@utils'

const classes = twix('flex items-center p-6 pt-0')

export const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={classes(className)} {...props} />
))
