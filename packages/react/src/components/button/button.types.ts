import type React from 'react'
import type { ElementSize, ElementStatus, ElementVariant } from '../../types'

export type ButtonProps = React.ComponentProps<'button'> & {
  /**
   * Is button loading?
   */
  loading?: boolean
  /**
   * Is button a circle?
   */
  circle?: boolean
  /**
   * What variant should button be ?
   */
  variant?: ElementVariant
  /**
   * How large should the button be?
   */
  size?: ElementSize
  /**
   * Icon to be displayed on the left side of the button
   */
  iconLeft?: React.ReactNode
  /**
   * Icon to be displayed on the right side of the button
   */
  iconRight?: React.ReactNode
  /**
   * Status of the button
   */
  status?: ElementStatus
  /**
   * Is button text to be uppercase
   */
  uppercase?: boolean
}

export type ButtonGroupProps = {
  options: ButtonGroupOption[]
  className?: string
  size?: ElementSize
  status?: ElementStatus
}

type ButtonGroupOption = {
  label: string
  disabled?: boolean
  className?: string
  onClick: () => void
}
