import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Popover } from '../popover.provider'
import { PopoverTrigger } from '../popover.trigger'
import { PopoverContent } from '../popover.content'
import { PopoverHeading } from '../popover.heading'
import { PopoverDescription } from '../popover.description'
import { PopoverClose } from '../popover.close'
import { Button } from '../../button'

describe('Popover Visual Tests', () => {
  it('renders closed popover (only trigger visible)', async () => {
    const { container } = render(
      <div className="p-8">
        <Popover>
          <PopoverTrigger>
            <Button>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p>Popover content</p>
          </PopoverContent>
        </Popover>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  it('renders open popover', async () => {
    const { container } = render(
      <div className="p-16">
        <Popover open>
          <PopoverTrigger>
            <Button>Open Popover</Button>
          </PopoverTrigger>
          <PopoverContent>
            <p>Popover content</p>
          </PopoverContent>
        </Popover>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  describe('With heading and description', () => {
    it('renders popover with heading', async () => {
      const { container } = render(
        <div className="p-16">
          <Popover open>
            <PopoverTrigger>
              <Button>Open</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeading>Popover Title</PopoverHeading>
              <p>Some content here</p>
            </PopoverContent>
          </Popover>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders popover with heading and description', async () => {
      const { container } = render(
        <div className="p-16">
          <Popover open>
            <PopoverTrigger>
              <Button>Open</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeading>Title</PopoverHeading>
              <PopoverDescription>
                This is a description explaining what this popover is about.
              </PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('With close button', () => {
    it('renders popover with close button', async () => {
      const { container } = render(
        <div className="p-16">
          <Popover open>
            <PopoverTrigger>
              <Button>Open</Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex justify-between items-start">
                <PopoverHeading>Title</PopoverHeading>
                <PopoverClose />
              </div>
              <PopoverDescription>Content with close button</PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Content variations', () => {
    it('renders popover with form content', async () => {
      const { container } = render(
        <div className="p-16">
          <Popover open>
            <PopoverTrigger>
              <Button>Edit</Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <PopoverHeading>Edit Name</PopoverHeading>
              <div className="mt-2 space-y-2">
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  placeholder="Enter name"
                />
                <div className="flex gap-2">
                  <Button variant="outlined" className="flex-1">
                    Cancel
                  </Button>
                  <Button className="flex-1">Save</Button>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders popover with list content', async () => {
      const { container } = render(
        <div className="p-16">
          <Popover open>
            <PopoverTrigger>
              <Button>Options</Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
              <ul className="py-1">
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Edit</li>
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">
                  Duplicate
                </li>
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer">Share</li>
                <li className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-destructive">
                  Delete
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Placements', () => {
    const placements = ['top', 'bottom', 'left', 'right'] as const

    for (const placement of placements) {
      it(`renders popover with placement=[${placement}]`, async () => {
        const { container } = render(
          <div className="p-24 flex items-center justify-center">
            <Popover open placement={placement}>
              <PopoverTrigger>
                <Button>{placement}</Button>
              </PopoverTrigger>
              <PopoverContent>
                <p>Popover on {placement}</p>
              </PopoverContent>
            </Popover>
          </div>
        )
        await expect(container).toMatchScreenshot()
      })
    }
  })

  describe('Modal mode', () => {
    it('renders popover in modal mode', async () => {
      const { container } = render(
        <div className="p-16">
          <Popover open modal>
            <PopoverTrigger>
              <Button>Modal Popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverHeading>Modal Popover</PopoverHeading>
              <PopoverDescription>
                This popover traps focus when open.
              </PopoverDescription>
            </PopoverContent>
          </Popover>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders popover with custom className', async () => {
      const { container } = render(
        <div className="p-16">
          <Popover open className="shadow-xl">
            <PopoverTrigger>
              <Button>Styled</Button>
            </PopoverTrigger>
            <PopoverContent className="bg-primary-50 border-primary">
              <p>Custom styled popover</p>
            </PopoverContent>
          </Popover>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})
