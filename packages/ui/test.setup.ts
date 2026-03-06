import '@testing-library/jest-dom/vitest'
import '@vitest/browser/matchers'
import './test-styles.css'
import { toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)
