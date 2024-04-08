import type { BaseComponentProps } from '../../types'

export interface CheckboxProps
  extends Omit<React.ComponentProps<'input'>, 'size'>,
    BaseComponentProps {
  /**
   * Indeterminate state of checkbox, overwrites checked
   */
  indeterminate?: boolean
  /**
   * Display loading state
   */
  loading?: boolean
}
