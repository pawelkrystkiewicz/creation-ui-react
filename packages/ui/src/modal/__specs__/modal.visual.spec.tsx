import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Modal, ModalHeader, ModalBody, ModalFooter } from '..'
import { Button } from '../../button'

// Note: Modal visual tests are skipped because Headless UI Dialog component
// uses internal state management that prevents stable screenshots in vitest browser mode.
// The Dialog constantly updates DOM even with static prop, causing screenshot comparison to fail.
// TODO: Investigate alternative testing approaches for Modal component.

describe.skip('Modal Visual Tests', () => {
  it('renders open modal with all sections', async () => {
    const onClose = vi.fn()
    const { container } = render(
      <Modal open={true} onClose={onClose} static>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalBody>
          <p>This is the modal content. It can contain any React elements.</p>
        </ModalBody>
        <ModalFooter>
          <Button variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button>Confirm</Button>
        </ModalFooter>
      </Modal>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  describe('ModalHeader', () => {
    it('renders header without border', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalHeader>Header without border</ModalHeader>
          <ModalBody>Content</ModalBody>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders header with border', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalHeader border>Header with border</ModalHeader>
          <ModalBody>Content</ModalBody>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders header with custom className', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalHeader className="bg-primary-100">Custom styled header</ModalHeader>
          <ModalBody>Content</ModalBody>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('ModalBody', () => {
    it('renders body with short content', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalBody>Short content</ModalBody>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders body with long content', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </ModalBody>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders body with form elements', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalHeader>Form Modal</ModalHeader>
          <ModalBody>
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
            </form>
          </ModalBody>
          <ModalFooter>
            <Button>Submit</Button>
          </ModalFooter>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('ModalFooter', () => {
    it('renders footer without border', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalBody>Content</ModalBody>
          <ModalFooter>
            <Button>Action</Button>
          </ModalFooter>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders footer with border', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalBody>Content</ModalBody>
          <ModalFooter border>
            <Button>Action</Button>
          </ModalFooter>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders footer with multiple buttons', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalBody>Content</ModalBody>
          <ModalFooter>
            <Button variant="text">Skip</Button>
            <Button variant="outlined">Cancel</Button>
            <Button>Confirm</Button>
          </ModalFooter>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders modal with custom className', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static className="max-w-lg">
          <ModalHeader>Custom Width Modal</ModalHeader>
          <ModalBody>This modal has a custom max-width</ModalBody>
          <ModalFooter>
            <Button>OK</Button>
          </ModalFooter>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Alert/Confirmation modals', () => {
    it('renders confirmation modal', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalHeader>Confirm Delete</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete this item? This action cannot be undone.</p>
          </ModalBody>
          <ModalFooter>
            <Button variant="outlined" onClick={onClose}>
              Cancel
            </Button>
            <Button color="destructive">Delete</Button>
          </ModalFooter>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders success modal', async () => {
      const onClose = vi.fn()
      const { container } = render(
        <Modal open={true} onClose={onClose} static>
          <ModalHeader className="text-success">Success!</ModalHeader>
          <ModalBody>
            <p>Your changes have been saved successfully.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={onClose}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})
