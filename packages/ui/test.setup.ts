import 'vitest-browser-react'
import { expect, afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

// Cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup()
})
