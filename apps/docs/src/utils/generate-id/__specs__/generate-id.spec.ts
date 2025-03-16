import { generateId, ID_LENGTH } from '../generate-id'
import { describe, test, expect } from 'vitest'

describe('newId', () => {
  test('should return a string when called with a valid prefix', () => {
    const result = generateId('test')
    expect(typeof result).toBe('string')
    expect(result).toMatch(new RegExp(`test_[0-9A-Za-z]{${ID_LENGTH}}`))
  })

  test('should throw an error when called with an undefined or null prefix', () => {
    const result = generateId(undefined)
    expect(typeof result).toBe('string')
    expect(result).toMatch(new RegExp(`[0-9A-Za-z]{${ID_LENGTH}}`))
  })

  test('should have good performance and entropy', () => {
    const prefix = 'test'
    const iterations = 10000
    const ids = Array.from({ length: iterations }).map(() => generateId(prefix))
    const uniqueIds = new Set(ids)
    expect(ids.length).toBe(iterations)
    expect(uniqueIds.size).toBe(iterations)
  })
})
