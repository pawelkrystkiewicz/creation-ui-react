import type { VariantProps } from 'class-variance-authority'
import { flexClasses } from './classes'

export type FlexClasses = VariantProps<typeof flexClasses>

export type FlexProps = {} & FlexClasses &
  Pick<
    React.HTMLAttributes<HTMLDivElement>,
    'title' | 'className' | 'children' | 'onClick'
  >
