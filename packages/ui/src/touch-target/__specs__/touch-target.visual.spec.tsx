import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TouchTarget } from '..'
import { ReactNode } from 'react'

interface TestCase {
  name: string
  content: ReactNode
  screenshotTarget?: 'container' | 'firstChild'
}

const testCases: TestCase[] = [
  {
    name: 'default touch target renders correctly',
    content: (
      <div className="relative inline-block">
        <TouchTarget>
          <button className="p-2 border rounded">Click me</button>
        </TouchTarget>
      </div>
    ),
  },
  {
    name: 'renders touch target with disabled state',
    content: (
      <div className="relative inline-block">
        <TouchTarget disabled>
          <button className="p-2 border rounded" disabled>
            Disabled
          </button>
        </TouchTarget>
      </div>
    ),
  },
  {
    name: 'renders touch target with icon button',
    content: (
      <div className="relative inline-block">
        <TouchTarget>
          <button className="p-1 border rounded">
            <svg
              className="size-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M6 12H18" strokeWidth="2" />
            </svg>
          </button>
        </TouchTarget>
      </div>
    ),
  },
  {
    name: 'renders touch target with small element',
    content: (
      <div className="relative inline-block">
        <TouchTarget>
          <span className="inline-block size-4 bg-primary rounded-full" />
        </TouchTarget>
      </div>
    ),
  },
  {
    name: 'renders touch target in context of list',
    content: (
      <ul className="space-y-2">
        {['Item 1', 'Item 2', 'Item 3'].map(item => (
          <li key={item} className="relative">
            <TouchTarget>
              <button className="p-2 w-full text-left border rounded hover:bg-gray-100">
                {item}
              </button>
            </TouchTarget>
          </li>
        ))}
      </ul>
    ),
    screenshotTarget: 'container',
  },
]

describe('TouchTarget Visual Tests', () => {
  testCases.forEach(({ name, content, screenshotTarget = 'firstChild' }) => {
    it(name, async () => {
      const { container } = render(content)
      expect(container).toBeVisible()
      const target =
        screenshotTarget === 'container' ? container : container.firstChild
      await expect(target).toMatchScreenshot()
    })
  })
})
