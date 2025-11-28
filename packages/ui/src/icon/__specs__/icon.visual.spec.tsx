import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Icon } from '..'
import type { IconType } from '..'

const ICON_TYPES: IconType[] = [
  'chevron_right',
  'chevron_left',
  'chevron_down',
  'close',
  'check',
  'slash',
  'home',
  'plus',
  'minus',
]

describe('Icon Visual Tests', () => {
  describe('Icon types', () => {
    for (const iconType of ICON_TYPES) {
      it(`renders [${iconType}] icon correctly`, async () => {
        const { container } = render(<Icon icon={iconType} data-testid={iconType} />)
        const element = container.querySelector('svg')
        expect(element).toBeVisible()
        await expect(element).toMatchScreenshot()
      })
    }
  })

  describe('Icon with title', () => {
    it('renders icon with title', async () => {
      const { container, getByTitle } = render(
        <Icon icon="home" title="Home icon" />
      )
      const element = container.querySelector('svg')
      expect(element).toBeVisible()
      expect(getByTitle('Home icon')).toBeInTheDocument()
      await expect(element).toMatchScreenshot()
    })
  })

  describe('Interactive icon', () => {
    it('renders interactive icon with onClick', async () => {
      const onClick = vi.fn()
      const { container } = render(<Icon icon="close" onClick={onClick} />)
      const element = container.querySelector('svg')
      expect(element).toBeVisible()
      await expect(element).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders icon with custom className', async () => {
      const { container } = render(
        <Icon icon="plus" className="text-primary size-8" />
      )
      const element = container.querySelector('svg')
      expect(element).toBeVisible()
      await expect(element).toMatchScreenshot()
    })

    it('renders icon with custom size class', async () => {
      const { container } = render(<Icon icon="check" className="size-12" />)
      const element = container.querySelector('svg')
      expect(element).toBeVisible()
      await expect(element).toMatchScreenshot()
    })

    it('renders icon with custom color class', async () => {
      const { container } = render(
        <Icon icon="minus" className="text-destructive" />
      )
      const element = container.querySelector('svg')
      expect(element).toBeVisible()
      await expect(element).toMatchScreenshot()
    })
  })
})
