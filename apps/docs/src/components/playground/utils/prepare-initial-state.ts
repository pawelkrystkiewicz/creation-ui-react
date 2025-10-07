import type { PlaygroundControl, PlaygroundState } from '../types'

export const prepareInitialState = (controls: PlaygroundControl[]): PlaygroundState => {
  if (!controls) return {}
  
  return controls.reduce(
    (
      acc: any,
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
              ? typeof first === 'object' && first !== null ? first.value : first
              : null

      return { ...acc, [name]: defaultValue ?? fallback }
    },
    {} as PlaygroundState,
  ) as PlaygroundState
}
