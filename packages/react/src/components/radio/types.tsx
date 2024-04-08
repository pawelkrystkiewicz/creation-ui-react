import type { ElementSize } from '../../types'
import type React from 'react'

export type RadioGroupProps = Omit<
  React.ComponentProps<'div'>,
  'size' | 'ref'
> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Label
   */
  label?: string
  /**
   * Text to be displayed when input is invalid
   */
  error?: string
  /**
   * Is disabled?
   */
  disabled?: boolean
  /**
   * Is required?
   */
  required?: boolean
  /**
   * Is read only?
   */
  readOnly?: boolean
  /**
   * Helper text
   */
  helperText?: React.ReactNode
}

export type RadioProps = Omit<React.ComponentProps<'input'>, 'size'> & {
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Label
   */
  label?: string
  /**
   * Is invalid?
   */
  error?: boolean
}
