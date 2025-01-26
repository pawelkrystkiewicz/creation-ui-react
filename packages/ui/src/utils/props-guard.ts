import { merge, pickBy } from 'lodash'

export function propsGuard<T extends Record<string, any>>(propsList: string[], props: T): T {
  if (!props) return {} as T

  const keys = Object.keys(props)
  const definedProps = keys.filter(key => propsList.includes(key))

  const sanitizedProps = definedProps.reduce((acc: any, key: string) => {
    const value = props[key]
    const isFalse = typeof value === 'boolean' && value === false
    const isDefined = value != null

    if (isFalse) return acc
    if (isDefined) {
      return { ...acc, [key]: props[key] }
    }
  }, {})

  const naturalProps = pickBy(props, (_, key) => !propsList.includes(key))

  const result = merge(naturalProps, sanitizedProps) as T
  return result
}
