import { label } from './classes'
import { useTheme } from '@root/theme'
import { ElementSize } from '@root/types'
import type { FC } from 'react'

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean
  size?: ElementSize
}

export const Label: FC<LabelProps> = ({
  children,
  className,
  required,
  ...props
}) => {
  const { size: defaultSize } = useTheme()
  const { size = defaultSize, ...rest } = props
  return (
    <label {...rest} className={label({ size, required, className })}>
      {children}
    </label>
  )
}
