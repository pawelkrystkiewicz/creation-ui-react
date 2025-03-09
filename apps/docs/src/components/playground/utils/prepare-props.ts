import type { PlaygroundControl, PlaygroundValueType } from '../types'

export const _getControlKeys = (controls: PlaygroundControl[]) => {
  const controlsMap = controls.reduce(
    (acc: Record<string, PlaygroundControl>, control: PlaygroundControl) => {
      const { type } = control
      acc[control.name] = {
        ...control,
        ...(type === 'string' && { noBracesInReplacement: true }),
      }
      return acc
    },
    {},
  )

  type Key = keyof typeof controlsMap
  const keys = Object.keys(controlsMap) as (Key | 'children')[]

  return { keys, controlsMap }
}

export const _formatPropValue = (
  value: any,
  type: PlaygroundValueType,
): string | number => {
  switch (type) {
    case 'boolean':
      return value ? 'true' : 'false'

    case 'number':
      return value ? Number(value) : 'undefined'

    case 'string':
      return value ? value : ''

    default:
      return JSON.stringify(value)
  }
}

export const getPropsObjectAsString = <T extends string>(
  keys: T[],
  values: Record<T, any>,
  controlsMap: Record<T, PlaygroundControl>,
) =>
  keys
    .map(key => {
      if (key === 'children') {
        return
      }

      const value = values[key]
      const type = controlsMap[key].type
      const formatted = _formatPropValue(value, type)
      if (
        typeof formatted === 'string' &&
        ['undefined', 'false'].includes(formatted)
      )
        return

      return `${key}={${formatted}}`
    })
    .filter(Boolean)

export const _extractPropsKeys = (code: string): string[] => {
  const regex = /{{(.*?)}}/g
  const matches = []
  let match

  while ((match = regex.exec(code)) !== null) {
    matches.push(match[1])
  }

  return matches
}

// TODO: add tests

export const assignPropsValues = (
  codeTemplate: string,
  values: Record<string, any>,
  controls: PlaygroundControl[] = [],
) => {
  const replaceable = _extractPropsKeys(codeTemplate)

  if (!replaceable.length) return codeTemplate

  const { controlsMap, keys } = _getControlKeys(controls)

  let code = codeTemplate

  if (replaceable.includes('props')) {
    const props = getPropsObjectAsString(keys, values, controlsMap)
    code = code.replace('{{props}}', props.join(' '))
  }

  if (replaceable.length === 1) return code

  replaceable?.forEach((key: string) => {
    const value = values?.[key]
    const { type, noBracesInReplacement } = controlsMap[key]
    const formatted = _formatPropValue(value, type)

    if (type === 'boolean' && formatted === 'false') {
      // remove the prop if the value is false
      code = code.replace(`${key}={{${key}}}`, '')
    } else {
      // handle rest normally
      code = code.replace(
        `{{${key}}}`,
        noBracesInReplacement ? (formatted as string) : `{${formatted}}`,
      )
    }
  }, codeTemplate)

  return code
}
