import { BaseComponentProps } from '@types'

export type SwitchProps = Partial<BaseComponentProps> & {
  /**
   * Is switch checked?
   */
  checked?: boolean
  /**
   * Is switch loading?
   */
  loading?: boolean
  /**
   * Is switch checked by default?
   */
  defaultChecked?: boolean
  /**
   * Callback when switch is clicked
   */
  onChange?: (value: boolean) => void
}
