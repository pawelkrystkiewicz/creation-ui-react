import '@testing-library/jest-dom'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { toHaveNoViolations } from 'jest-axe'
import { toMatchImageSnapshot } from 'jest-image-snapshot'

expect.extend(toHaveNoViolations)
expect.extend({ toMatchImageSnapshot })

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
