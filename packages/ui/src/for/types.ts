import type { ReactNode } from 'react'

export interface ForProps<T = any[]> {
  each?: T[]
  children?: (item: T, index: number) => ReactNode
}
