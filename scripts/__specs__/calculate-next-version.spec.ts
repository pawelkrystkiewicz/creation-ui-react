import { calculateNextVersion } from '../calculate-next-version'

describe('calculateNextVersion', () => {
  it('should bump patch version correctly', () => {
    expect(calculateNextVersion('1.2.3', 'patch')).toBe('1.2.4')
    expect(calculateNextVersion('0.0.1', 'patch')).toBe('0.0.2')
    expect(calculateNextVersion('15.2.9', 'patch')).toBe('15.2.10')
  })

  it('should bump minor version correctly', () => {
    expect(calculateNextVersion('1.2.3', 'minor')).toBe('1.3.0')
    expect(calculateNextVersion('0.0.1', 'minor')).toBe('0.1.0')
    expect(calculateNextVersion('15.2.9', 'minor')).toBe('15.3.0')
  })

  it('should bump major version correctly', () => {
    expect(calculateNextVersion('1.2.3', 'major')).toBe('2.0.0')
    expect(calculateNextVersion('0.0.1', 'major')).toBe('1.0.0')
    expect(calculateNextVersion('15.2.9', 'major')).toBe('16.0.0')
  })

  it('should handle version with double digit patch numbers', () => {
    expect(calculateNextVersion('1.2.10', 'patch')).toBe('1.2.11')
    expect(calculateNextVersion('1.10.9', 'minor')).toBe('1.11.0')
    expect(calculateNextVersion('10.2.3', 'major')).toBe('11.0.0')
  })
})
