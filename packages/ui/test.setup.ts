import { cleanup } from '@testing-library/react'
import { toHaveNoViolations } from 'jest-axe'
import { afterEach, expect } from 'vitest'
import 'vitest-browser-react'

expect.extend(toHaveNoViolations)

afterEach(() => {
  cleanup()
})
