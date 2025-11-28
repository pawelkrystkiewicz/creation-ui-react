import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Tooltip } from '..'
import { ELEMENT_POSITION } from '../../types'

describe('Tooltip Visual Tests', () => {
  it('renders tooltip with content (default position)', async () => {
    const { container } = render(
      <div className="p-16">
        <Tooltip content="Tooltip text">
          <button className="p-2 border rounded">Hover me</button>
        </Tooltip>
      </div>
    )
    expect(container).toBeVisible()
    await expect(container).toMatchScreenshot()
  })

  it('renders without tooltip when no content', async () => {
    const { container } = render(
      <div className="p-4">
        <Tooltip content={undefined}>
          <button className="p-2 border rounded">No tooltip</button>
        </Tooltip>
      </div>
    )
    await expect(container).toMatchScreenshot()
  })

  describe('Positions', () => {
    for (const position of ELEMENT_POSITION) {
      it(`renders tooltip with position=[${position}]`, async () => {
        const { container } = render(
          <div className="p-20 flex items-center justify-center">
            <div className="group relative">
              <Tooltip content={`Tooltip ${position}`} position={position}>
                <button className="p-2 border rounded">{position}</button>
              </Tooltip>
            </div>
          </div>
        )
        await expect(container).toMatchScreenshot()
      })
    }
  })

  describe('Content variations', () => {
    it('renders tooltip with short content', async () => {
      const { container } = render(
        <div className="p-16">
          <Tooltip content="Hi">
            <button className="p-2 border rounded">Short</button>
          </Tooltip>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders tooltip with long content', async () => {
      const { container } = render(
        <div className="p-16">
          <Tooltip content="This is a very long tooltip text that explains something in detail">
            <button className="p-2 border rounded">Long text</button>
          </Tooltip>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders tooltip with React node content', async () => {
      const { container } = render(
        <div className="p-16">
          <Tooltip
            content={
              <div>
                <strong>Bold title</strong>
                <p>Description text</p>
              </div>
            }
          >
            <button className="p-2 border rounded">Complex tooltip</button>
          </Tooltip>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders tooltip with custom className', async () => {
      const { container } = render(
        <div className="p-16">
          <Tooltip content="Styled tooltip" className="text-primary">
            <button className="p-2 border rounded">Styled</button>
          </Tooltip>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })

  describe('In context', () => {
    it('renders tooltip on icon button', async () => {
      const { container } = render(
        <div className="p-16">
          <Tooltip content="Add new item" position="bottom">
            <button className="p-2 border rounded-full">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 5v14M5 12h14" strokeWidth="2" />
              </svg>
            </button>
          </Tooltip>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })

    it('renders multiple tooltips in row', async () => {
      const { container } = render(
        <div className="p-16 flex gap-4">
          <Tooltip content="Edit" position="bottom">
            <button className="p-2 border rounded">Edit</button>
          </Tooltip>
          <Tooltip content="Delete" position="bottom">
            <button className="p-2 border rounded">Delete</button>
          </Tooltip>
          <Tooltip content="Share" position="bottom">
            <button className="p-2 border rounded">Share</button>
          </Tooltip>
        </div>
      )
      await expect(container).toMatchScreenshot()
    })
  })
})
