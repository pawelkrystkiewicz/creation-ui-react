import type { ElementSize } from '@types'
import type { HTMLAttributes, ReactNode } from 'react'

export interface MenuProps extends HTMLAttributes<HTMLButtonElement> {
  size?: ElementSize
  renderInput?: (props: any) => ReactNode
  level?: number
  nested?: boolean
  label?: string
  cx?: {
    container?: { outer?: string; inner?: string }
    trigger?: string
  }
}

export interface MenuItemProps {
  onClick?: () => void
  level?: number
  label: ReactNode
  disabled?: boolean
  maxWidth?: number
  cx?: {
    container?: string
    label?: string
  }
}
