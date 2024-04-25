import { useTheme } from '@theme'
import { calloutClasses } from './classes'
import type { CalloutProps } from './types'

export const Callout = (props: CalloutProps) => {
  const { variant: defaultVariant } = useTheme()
  const {
    children,
    className,
    status,
    variant = defaultVariant,
    ...rest
  } = props

  return (
    <div
      className={calloutClasses({ status, variant, className })}
      role='alert'
      {...rest}
    >
      {children}
    </div>
  )
}
