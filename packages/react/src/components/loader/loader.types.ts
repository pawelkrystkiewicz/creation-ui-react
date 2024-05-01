import type { BaseComponentProps } from '@types'

export type LoaderColor =
  | 'primary'
  | 'error'
  | 'warning'
  | 'success'
  | 'info'
  | 'white'
  | 'black'
export interface LoaderProps
  extends Pick<BaseComponentProps, 'size' | 'className'> {
  color?: LoaderColor
  /**
   * Inner class name applied to SVG element
   */
  innerClassName?: string
}
