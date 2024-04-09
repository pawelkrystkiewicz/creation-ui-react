import { AUTOCOMPLETE_MARGIN } from '../constants'
import {
  AutocompleteFilterOptions,
  AutocompleteFilterOptionsConfig,
} from '../types'

export const getTop = ({ placement, y = 0 }: any) => {
  switch (placement) {
    case 'top':
      console.log('top', y - AUTOCOMPLETE_MARGIN)
      return y - AUTOCOMPLETE_MARGIN
    default:
      console.log('bottom', y + AUTOCOMPLETE_MARGIN)
    case 'bottom':
      return y + AUTOCOMPLETE_MARGIN
  }
}

export const stripDiacritics = (text: string) => {
  return typeof text.normalize !== 'undefined'
    ? text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : text
}

export function createFilterOptions<T>(
  config?: AutocompleteFilterOptionsConfig<T>,
) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    stringify,
    trim = false,
  } = config ?? {}

  return (
    options: T[],
    { query = '', getOptionLabel }: AutocompleteFilterOptions<T>,
  ) => {
    let input = trim ? query.trim() : query
    if (ignoreCase) {
      input = input?.toLowerCase()
    }
    if (ignoreAccents) {
      input = stripDiacritics(input)
    }

    const filteredOptions = !input
      ? options
      : options.filter(option => {
          let candidate = (stringify || getOptionLabel)(option)
          if (ignoreCase) {
            candidate = candidate.toLowerCase()
          }
          if (ignoreAccents) {
            candidate = stripDiacritics(candidate)
          }

          return matchFrom === 'start'
            ? candidate.indexOf(input) === 0
            : candidate.indexOf(input) > -1
        })

    return typeof limit === 'number'
      ? filteredOptions.slice(0, limit)
      : filteredOptions
  }
}
