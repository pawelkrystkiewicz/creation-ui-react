import { objectsToArray } from './obj-to-arr'

export function objectsToString(object) {
  return objectsToArray(object).join(' ')
}
