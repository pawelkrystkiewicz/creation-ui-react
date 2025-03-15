import type { PlaygroundControl } from '../types'

export const prepareInitialState = (controls: PlaygroundControl[]) =>
  controls?.reduce(
    (
      acc: Record<string, unknown>,
      { type, name, defaultValue, values, controls: c },
    ) => {
      if (c) {
        acc[name] = prepareInitialState(c)
        return acc
      }

      const [first] = values ?? []
      const fallback =
        type === 'boolean'
          ? false
          : type === 'string'
            ? ''
            : type === 'array'
              ? first.value
              : null

      return { ...acc, [name]: defaultValue ?? fallback }
    },
    {},
  )
