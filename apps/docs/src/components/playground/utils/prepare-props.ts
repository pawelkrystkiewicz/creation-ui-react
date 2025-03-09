import type { PlaygroundControl, PlaygroundValueType } from '../types'
import { getPropType } from './get-prop-type'

// always filter out "children"
const BATCH_PROPS_KEYS = ['props', 'rest']

const getPropAsStringAndType = (
  value: any,
): { type: string; formatted: string | number } => {
  const type = getPropType(value)
  let formatted = value

  switch (type) {
    case 'boolean':
      formatted = value ? 'true' : 'false'
      break

    case 'number':
      formatted = value ? Number(value) : 'undefined'
      break

    case 'string':
      formatted = value ? value : ''
      break

    case 'array':
    case 'object':
    default:
      formatted = JSON.stringify(value)
      break
  }

  return { type, formatted }
}

const _extractPropsKeys = (code: string): string[] => {
  const regex = /{{(.*?)}}/g
  const matches = []
  let match

  while ((match = regex.exec(code)) !== null) {
    matches.push(match[1])
  }

  return matches
}

export const assignPropsValues = (
  codeTemplate: string,
  values: Record<string, any>,
) => {
  const replaceable = _extractPropsKeys(codeTemplate)

  if (!replaceable.length) return codeTemplate

  const _values = buildValuesObject(replaceable, values)
  let code = codeTemplate

  replaceable?.forEach((key: string) => {
    const value = _values?.[key]
    const { formatted, type } = getPropAsStringAndType(value)

    switch (true) {
      case BATCH_PROPS_KEYS.includes(key):
        code = code.replace(`{{${key}}}`, objectToProps(_values[key]))
        break
      case formatted === 'false':
        code = code.replace(`${key}={{${key}}}`, '')
        break
      default:
        code = code.replace(
          `{{${key}}}`,
          type === 'string' ? (formatted as string) : `{${formatted}}`,
        )
        code = code.replace(`${key}={{${key}}}`, '')
    }
  }, codeTemplate)

  return code
}

const buildValuesObject = (keys: string[], values: Record<string, any>) => {
  const tagPassableProps = Object.keys(values)
    .filter(key => ![...BATCH_PROPS_KEYS, 'children'].includes(key))
    .reduce((acc: Record<string, any>, key: string) => {
      acc[key] = values[key]
      return acc
    }, {})

  return keys.reduce((acc: Record<string, any>, key: string) => {
    if (BATCH_PROPS_KEYS.includes(key)) {
      acc[key] = tagPassableProps
      return acc
    }

    acc[key] = values[key]
    return acc
  }, {})
}

const objectToProps = (obj: Record<string, any>) => {
  return Object.keys(obj)
    .map(key => formatProp(key, obj[key]))
    .filter(Boolean)
    .join(' ')
}

export const formatProp = (key: string, value: any) => {
  const { formatted, type } = getPropAsStringAndType(value)

  switch (true) {
    case formatted === 'false':
      return null
    case formatted === 'true':
      return key
    case type === 'string':
      return `${key}='${formatted}'`
    default:
      return `${key}={${formatted}}`
  }
}
