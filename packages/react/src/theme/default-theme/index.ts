import type { ThemeProps } from '../types'
import { styles } from './styles'

export const defaultTheme: ThemeProps = {
  variant: 'outlined',
  size: 'md',
  texts: {
    invalidInput: 'Input invalid',
  },
  zIndex: {
    base: 'z-0',
    dropdowns: 'z-[200]',
    tooltips: 'z-[400]',
    overlays: 'z-[600]',
    modals: 'z-[800]',
    notifications: 'z-[1000]',
  },
  helpers: {
    getLimitText: more => `+${more}`,
  },
  styles,
}
