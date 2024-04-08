import { ElementType } from 'react'
import { ClassName, ElementSize, TypographyConfig } from '@creation-ui/react'

export interface TypographyProps extends React.ComponentProps<any> {
  as?: ElementType
  children?: React.ReactNode
  config?: Partial<TypographyConfig>
  className?: ClassName
  size?: ElementSize
}
