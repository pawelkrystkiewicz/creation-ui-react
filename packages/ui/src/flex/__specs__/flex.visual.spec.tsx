import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Flex } from '..'

describe('Flex Visual Tests', () => {
  it('default flex renders correctly', async () => {
    const { container } = render(
      <Flex>
        <span>Item 1</span>
        <span>Item 2</span>
        <span>Item 3</span>
      </Flex>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Direction', () => {
    it('renders flex-row (column=false)', async () => {
      const { container } = render(
        <Flex column={false}>
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders flex-column (column=true)', async () => {
      const { container } = render(
        <Flex column>
          <span>Item 1</span>
          <span>Item 2</span>
          <span>Item 3</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Justify content', () => {
    const justifyOptions = ['start', 'end', 'center', 'between', 'around', 'evenly'] as const

    for (const justify of justifyOptions) {
      it(`renders with justify=${justify}`, async () => {
        const { container } = render(
          <Flex justify={justify} className="w-96 border p-2">
            <span className="p-2 bg-gray-200">1</span>
            <span className="p-2 bg-gray-200">2</span>
            <span className="p-2 bg-gray-200">3</span>
          </Flex>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Align items', () => {
    const itemsOptions = ['start', 'end', 'center', 'baseline', 'stretch'] as const

    for (const items of itemsOptions) {
      it(`renders with items=${items}`, async () => {
        const { container } = render(
          <Flex items={items} className="h-24 border p-2">
            <span className="p-2 bg-gray-200">Short</span>
            <span className="p-4 bg-gray-200">Medium</span>
            <span className="p-6 bg-gray-200">Tall</span>
          </Flex>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Wrap', () => {
    const wrapOptions = ['none', 'wrap', 'reverse'] as const

    for (const wrap of wrapOptions) {
      it(`renders with wrap=${wrap}`, async () => {
        const { container } = render(
          <Flex wrap={wrap} className="w-48 border p-2">
            <span className="p-2 bg-gray-200">Item 1</span>
            <span className="p-2 bg-gray-200">Item 2</span>
            <span className="p-2 bg-gray-200">Item 3</span>
            <span className="p-2 bg-gray-200">Item 4</span>
            <span className="p-2 bg-gray-200">Item 5</span>
          </Flex>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Gap', () => {
    it('renders with gapX=4', async () => {
      const { container } = render(
        <Flex gapX={4}>
          <span className="p-2 bg-gray-200">1</span>
          <span className="p-2 bg-gray-200">2</span>
          <span className="p-2 bg-gray-200">3</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with gapY=4 (column)', async () => {
      const { container } = render(
        <Flex column gapY={4}>
          <span className="p-2 bg-gray-200">1</span>
          <span className="p-2 bg-gray-200">2</span>
          <span className="p-2 bg-gray-200">3</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with both gapX and gapY', async () => {
      const { container } = render(
        <Flex gapX={4} gapY={2} wrap="wrap" className="w-48">
          <span className="p-2 bg-gray-200">1</span>
          <span className="p-2 bg-gray-200">2</span>
          <span className="p-2 bg-gray-200">3</span>
          <span className="p-2 bg-gray-200">4</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Grow and Shrink', () => {
    it('renders with grow=true', async () => {
      const { container } = render(
        <Flex className="w-96">
          <span className="p-2 bg-gray-200">Fixed</span>
          <Flex grow className="p-2 bg-blue-200">
            Growing
          </Flex>
          <span className="p-2 bg-gray-200">Fixed</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with shrink=false', async () => {
      const { container } = render(
        <Flex className="w-24">
          <Flex shrink={false} className="p-2 bg-gray-200 w-32">
            No shrink
          </Flex>
          <span className="p-2 bg-blue-200">Shrinks</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Complex layouts', () => {
    it('renders centered content', async () => {
      const { container } = render(
        <Flex items="center" justify="center" className="h-32 w-32 border">
          <span>Centered</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders space-between layout', async () => {
      const { container } = render(
        <Flex items="center" justify="between" className="w-96 p-4 border">
          <span>Left</span>
          <span>Center</span>
          <span>Right</span>
        </Flex>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})
