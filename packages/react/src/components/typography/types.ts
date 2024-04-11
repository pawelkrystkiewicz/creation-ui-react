import { ElementType } from 'react'
import { ClassName, ElementSize } from '@types'
import {TypographyConfig} from '@theme'

export interface TypographyProps extends React.ComponentProps<any> {
  as?: ElementType
  children?: React.ReactNode
  config?: Partial<TypographyConfig>
  className?: ClassName
  size?: ElementSize
}
