import { forwardRef } from 'react'

import { twix } from '@utils'

const classes = twix('leading-none tracking-tight text-sm font-medium')

export const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={classes(className)} {...props} />
))
