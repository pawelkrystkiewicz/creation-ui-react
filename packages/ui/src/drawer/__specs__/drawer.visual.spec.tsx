import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Drawer } from '..'

const DRAWER_POSITIONS = ['left', 'right', 'top', 'bottom'] as const

describe('Drawer Visual Tests', () => {
  it('renders open drawer (right position by default)', async () => {
    const onClose = vi.fn()
    const { container } = render(
      <div className="relative h-96 w-full overflow-hidden">
        <Drawer open={true} onClose={onClose}>
          <div className="p-4">
            <h2 className="text-lg font-bold">Drawer Content</h2>
            <p>This is the drawer content.</p>
          </div>
        </Drawer>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  describe('Positions', () => {
    for (const position of DRAWER_POSITIONS) {
      it(`renders drawer with position=[${position}]`, async () => {
        const onClose = vi.fn()
        const { container } = render(
          <div className="relative h-96 w-full overflow-hidden">
            <Drawer open={true} onClose={onClose} position={position}>
              <div className="p-4">
                <h2 className="text-lg font-bold">{position} Drawer</h2>
                <p>Content for {position} drawer.</p>
              </div>
            </Drawer>
          </div>
        )
        await expect(container).toMatchScreenshot()
      })
    }
  })

  describe('Custom sizes', () => {
    it('renders drawer with custom width (horizontal)', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer open={true} onClose={onClose} position="right" cx={{ width: 'w-1/2' }}>
            <div className="p-4">
              <h2 className="text-lg font-bold">Wide Drawer</h2>
              <p>This drawer is 50% width.</p>
            </div>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders drawer with custom height (vertical)', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer open={true} onClose={onClose} position="bottom" cx={{ height: 'h-1/2' }}>
            <div className="p-4">
              <h2 className="text-lg font-bold">Half-height Drawer</h2>
              <p>This drawer is 50% height.</p>
            </div>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Content variations', () => {
    it('renders drawer with navigation menu', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer open={true} onClose={onClose} position="left">
            <nav className="p-4">
              <h2 className="text-lg font-bold mb-4">Menu</h2>
              <ul className="space-y-2">
                <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Home</li>
                <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">About</li>
                <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Services</li>
                <li className="p-2 hover:bg-gray-100 rounded cursor-pointer">Contact</li>
              </ul>
            </nav>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders drawer with form content', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer open={true} onClose={onClose}>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    placeholder="Enter name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    placeholder="Enter email"
                  />
                </div>
                <button className="w-full p-2 bg-primary text-white rounded">
                  Save
                </button>
              </form>
            </div>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders drawer with long scrollable content', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer open={true} onClose={onClose}>
            <div className="p-4 overflow-y-auto h-full">
              <h2 className="text-lg font-bold mb-4">Long Content</h2>
              {Array.from({ length: 20 }).map((_, i) => (
                <p key={i} className="mb-4">
                  Paragraph {i + 1}: Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit.
                </p>
              ))}
            </div>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('With overlay click handler', () => {
    it('renders drawer with onOverlayClick handler', async () => {
      const onClose = vi.fn()
      const onOverlayClick = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer open={true} onClose={onClose} onOverlayClick={onOverlayClick}>
            <div className="p-4">
              <h2 className="text-lg font-bold">Drawer with Overlay</h2>
              <p>Click outside to close.</p>
            </div>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom container styling', () => {
    it('renders drawer with custom outer container class', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer
            open={true}
            onClose={onClose}
            cx={{ container: { outer: 'shadow-2xl' } }}
          >
            <div className="p-4">
              <h2 className="text-lg font-bold">Styled Drawer</h2>
              <p>With custom shadow.</p>
            </div>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders drawer with custom inner container class', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <div className="relative h-96 w-full overflow-hidden">
          <Drawer
            open={true}
            onClose={onClose}
            cx={{ container: { inner: 'bg-gray-50' } }}
          >
            <div className="p-4">
              <h2 className="text-lg font-bold">Styled Inner</h2>
              <p>With custom background.</p>
            </div>
          </Drawer>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})
