import { ElementColor, ElementVariant } from '@types'
import { CONTRASTING_VARIANT } from './constants'
import { LoaderColor } from '../loader'

export const getLoaderColor = (
  buttonVariant: ElementVariant,
  buttonColor: ElementColor,
  inherit: boolean,
  isDarkMode: boolean = false
): LoaderColor => {
  const shouldContrast = CONTRASTING_VARIANT.includes(buttonVariant)

  switch (true) {
    case buttonColor === 'mono' && shouldContrast:
      return isDarkMode ? 'black' : 'white'

    case shouldContrast:
      return 'white'

    case buttonColor === 'mono':
      return inherit ? (isDarkMode ? 'white' : 'black') : 'primary'

    case inherit:
      return buttonColor

    default:
      return 'primary'
  }
}
