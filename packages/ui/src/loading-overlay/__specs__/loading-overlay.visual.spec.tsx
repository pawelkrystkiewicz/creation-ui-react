import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { LoadingOverlay } from '..'

const LOADER_COLORS = [
  'primary',
  'destructive',
  'success',
  'warning',
  'white',
  'black',
] as const

describe('LoadingOverlay Visual Tests', () => {
  it('renders active loading overlay', async () => {
    const { container } = render(
      <div className="relative h-32 w-64">
        <div className="p-4">
          <h3 className="font-bold">Content</h3>
          <p>Some content that is loading</p>
        </div>
        <LoadingOverlay active />
      </div>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  it('renders inactive loading overlay (should not be visible)', async () => {
    const { container } = render(
      <div className="relative h-32 w-64">
        <div className="p-4">
          <h3 className="font-bold">Content</h3>
          <p>Content is loaded</p>
        </div>
        <LoadingOverlay active={false} />
      </div>
    )
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Loader colors', () => {
    for (const color of LOADER_COLORS) {
      it(`renders with loaderColor=[${color}]`, async () => {
        const { container } = render(
          <div className="relative h-32 w-64">
            <div className="p-4">Background content</div>
            <LoadingOverlay active loaderColor={color} />
          </div>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Custom styling', () => {
    it('renders with custom overlay class', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <LoadingOverlay active cx={{ overlay: 'bg-blue-500/75' }} />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with custom loader class', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <LoadingOverlay
            active
            cx={{ loader: { outer: 'p-4 bg-white rounded-lg' } }}
          />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with dark overlay', async () => {
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <LoadingOverlay
            active
            loaderColor="white"
            cx={{ overlay: 'bg-black/80' }}
          />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Click handler', () => {
    it('renders with onClick handler', async () => {
      const onClick = vi.fn()
      const { container } = render(
        <div className="relative h-32 w-64">
          <div className="p-4">Background content</div>
          <LoadingOverlay active onClick={onClick} />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('In context', () => {
    it('renders loading overlay over card', async () => {
      const { container } = render(
        <div className="relative p-4 border rounded-lg shadow">
          <h3 className="font-bold">Card Title</h3>
          <p className="text-gray-600">Card content that is loading</p>
          <LoadingOverlay active cx={{ overlay: 'rounded-lg' }} />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders loading overlay over form', async () => {
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
          <LoadingOverlay active cx={{ overlay: 'rounded-lg' }} />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders loading overlay over table', async () => {
      const { container } = render(
        <div className="relative border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border-t">John Doe</td>
                <td className="p-2 border-t">john@example.com</td>
              </tr>
              <tr>
                <td className="p-2 border-t">Jane Smith</td>
                <td className="p-2 border-t">jane@example.com</td>
              </tr>
            </tbody>
          </table>
          <LoadingOverlay active />
        </div>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})
