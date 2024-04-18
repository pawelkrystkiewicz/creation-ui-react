import clsx from 'clsx'
import get from 'lodash.get'
import { ThemeStyles } from './types'

export const getBaseFromTheme = <T = any>(
  props: Partial<T>,
  styles: ThemeStyles,
  keys: string[]
) => {
  let base = []
  for (const key of keys) {
    const [path, prop] = key.split(':')

    if (prop) {
      base.push(get(styles, path.replace('$', props[prop])))
    } else {
      base.push(get(styles, path))
    }
  }
  return clsx(base)
}
