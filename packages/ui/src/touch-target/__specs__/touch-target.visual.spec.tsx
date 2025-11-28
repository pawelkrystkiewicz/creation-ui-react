import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { TouchTarget } from '..'

describe('TouchTarget Visual Tests', () => {
  it('default touch target renders correctly', async () => {
    const { container } = render(
      <div className="relative inline-block">
        <TouchTarget>
          <button className="p-2 border rounded">Click me</button>
        </TouchTarget>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  it('renders touch target with disabled state', async () => {
    const { container } = render(
      <div className="relative inline-block">
        <TouchTarget disabled>
          <button className="p-2 border rounded" disabled>
            Disabled
          </button>
        </TouchTarget>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  it('renders touch target with icon button', async () => {
    const { container } = render(
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
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  it('renders touch target with small element', async () => {
    const { container } = render(
      <div className="relative inline-block">
        <TouchTarget>
          <span className="inline-block size-4 bg-primary rounded-full" />
        </TouchTarget>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  it('renders touch target in context of list', async () => {
    const { container } = render(
      <ul className="space-y-2">
        {['Item 1', 'Item 2', 'Item 3'].map((item) => (
          <li key={item} className="relative">
            <TouchTarget>
              <button className="p-2 w-full text-left border rounded hover:bg-gray-100">
                {item}
              </button>
            </TouchTarget>
          </li>
        ))}
      </ul>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })
})
