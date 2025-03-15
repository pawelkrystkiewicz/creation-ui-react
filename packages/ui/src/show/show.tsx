import type { ShowProps } from './types'

export const Show = ({ when, children, fallback = null }: ShowProps) =>
  when ? <>{children}</> : <>{fallback}</>
