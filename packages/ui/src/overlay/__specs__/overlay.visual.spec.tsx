import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Overlay } from '..'

describe('Overlay Visual Tests', () => {
  it('renders active overlay', async () => {
    const { container } = render(
      <div className="relative h-32 w-64">
        <div className="p-4">Background content</div>
        <Overlay active />
      </div>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  it('renders inactive overlay (should not be visible)', async () => {
    const { container } = render(
      <div className="relative h-32 w-64">
        <div className="p-4">Background content</div>
        <Overlay active={false} />
      </div>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Cursor wait', () => {
    it('renders overlay with cursor wait', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <Overlay active cursorWait />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Click handler', () => {
    it('renders overlay with onClick handler', async () => {
      const onClick = vi.fn()
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <Overlay active onClick={onClick} />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders overlay with custom className', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <Overlay active className="bg-blue-500/50" />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders overlay with dark background', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <Overlay active className="bg-black/75" />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('With children', () => {
    it('renders overlay with centered content', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <Overlay active className="flex items-center justify-center">
            <span className="text-white">Loading...</span>
          </Overlay>
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders overlay with loader', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <Overlay active className="flex items-center justify-center">
            <div className="animate-spin h-8 w-8 border-4 border-white border-t-transparent rounded-full" />
          </Overlay>
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('In context', () => {
    it('renders overlay over card', async () => {
      const { container } = render(
        <div className="relative p-4 border rounded-lg shadow">
          <h3 className="font-bold">Card Title</h3>
          <p className="text-gray-600">Card content goes here</p>
          <Overlay active className="rounded-lg" />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders overlay over form', async () => {
      const { container } = render(
        <div className="relative p-4 border rounded-lg">
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-2 border rounded"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded"
            />
            <button className="w-full p-2 bg-primary text-white rounded">
              Submit
            </button>
          </form>
          <Overlay active cursorWait className="rounded-lg" />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})
