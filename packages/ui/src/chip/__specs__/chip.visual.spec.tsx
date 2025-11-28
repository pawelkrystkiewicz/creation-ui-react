import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { Chip } from '..'
import { ELEMENT_BASE_VARIANTS, ELEMENT_COLOR } from '../../types'
import { Icon } from '../../icon'

describe('Chip Visual Tests', () => {
  it('default chip renders correctly', async () => {
    const { getByText } = render(<Chip label="Default Chip" />)
    const element = getByText('Default Chip')
    expect(element).toBeVisible()
    await expect(element.parentElement).toMatchScreenshot()
  })

  describe('Color and Variant combinations', () => {
    for (const color of ELEMENT_COLOR) {
      for (const variant of ELEMENT_BASE_VARIANTS) {
        it(`renders [${color}] color with [${variant}] variant`, async () => {
          const { getByText } = render(
            <Chip label={`${color} ${variant}`} color={color} variant={variant} />
          )
          const element = getByText(`${color} ${variant}`)
          expect(element).toBeVisible()
          await expect(element.parentElement).toMatchScreenshot()
        })
      }
    }
  })

  describe('Uppercase', () => {
    it('renders with uppercase text', async () => {
      const { getByText } = render(<Chip label="uppercase chip" uppercase />)
      const element = getByText('uppercase chip')
      expect(element).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })
  })

  describe('Interactive states', () => {
    it('renders interactive chip with onClick', async () => {
      const onClick = vi.fn()
      const { getByText } = render(<Chip label="Clickable" onClick={onClick} />)
      const element = getByText('Clickable')
      expect(element).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })

    it('renders removable chip with onDelete', async () => {
      const onDelete = vi.fn()
      const { getByText } = render(<Chip label="Removable" onDelete={onDelete} />)
      const element = getByText('Removable')
      expect(element).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })

    it('renders chip with both onClick and onDelete', async () => {
      const onClick = vi.fn()
      const onDelete = vi.fn()
      const { getByText } = render(
        <Chip label="Interactive & Removable" onClick={onClick} onDelete={onDelete} />
      )
      const element = getByText('Interactive & Removable')
      expect(element).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })
  })

  describe('Adornments', () => {
    const startAdornment = <Icon icon="plus" data-testid="icon-start" />
    const endAdornment = <Icon icon="minus" data-testid="icon-end" />

    it('renders chip with startAdornment', async () => {
      const { getByText, getByTestId } = render(
        <Chip label="With Start Icon" startAdornment={startAdornment} />
      )
      const element = getByText('With Start Icon')
      expect(element).toBeVisible()
      expect(getByTestId('icon-start')).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })

    it('renders chip with endAdornment', async () => {
      const { getByText, getByTestId } = render(
        <Chip label="With End Icon" endAdornment={endAdornment} />
      )
      const element = getByText('With End Icon')
      expect(element).toBeVisible()
      expect(getByTestId('icon-end')).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })

    it('renders chip with both adornments', async () => {
      const { getByText, getByTestId } = render(
        <Chip
          label="Both Icons"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
        />
      )
      const element = getByText('Both Icons')
      expect(element).toBeVisible()
      expect(getByTestId('icon-start')).toBeVisible()
      expect(getByTestId('icon-end')).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })

    it('renders chip with adornments and onDelete', async () => {
      const onDelete = vi.fn()
      const { getByText, getByTestId } = render(
        <Chip
          label="Icons + Delete"
          startAdornment={startAdornment}
          endAdornment={endAdornment}
          onDelete={onDelete}
        />
      )
      const element = getByText('Icons + Delete')
      expect(element).toBeVisible()
      expect(getByTestId('icon-start')).toBeVisible()
      expect(getByTestId('icon-end')).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })
  })

  describe('Custom styles', () => {
    it('renders chip with custom style prop', async () => {
      const { getByText } = render(
        <Chip
          label="Custom Style"
          style={{ backgroundColor: '#9333ea', color: 'white' }}
        />
      )
      const element = getByText('Custom Style')
      expect(element).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })

    it('renders chip with custom cx classes', async () => {
      const { getByText } = render(
        <Chip
          label="Custom Classes"
          cx={{ container: { outer: 'shadow-lg', inner: 'font-bold' } }}
        />
      )
      const element = getByText('Custom Classes')
      expect(element).toBeVisible()
      await expect(element.parentElement).toMatchScreenshot()
    })
  })
})
