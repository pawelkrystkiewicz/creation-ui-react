import type React from 'react'
import type { BaseComponentProps, ElementVariant } from '@creation-ui/react'

export type TextAreaProps = Omit<
  React.ComponentProps<'textarea'>,
  'size' | 'ref'
> &
  BaseComponentProps & {
    /**
     * Is loading?
     */
    loading?: boolean
    /**
     * Variant of element
     */
    variant?: ElementVariant
  }
