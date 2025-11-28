import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import { InputContainer } from '..'
import { Icon } from '../../icon'

describe('InputContainer Visual Tests', () => {
  it('default input container renders correctly', async () => {
    const { container } = render(
      <InputContainer>
        <input className="w-full outline-none" placeholder="Enter text" />
      </InputContainer>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Adornments', () => {
    const startAdornment = <Icon icon="home" data-testid="start-icon" />
    const endAdornment = <Icon icon="check" data-testid="end-icon" />

    it('renders with startAdornment', async () => {
      const { container, getByTestId } = render(
        <InputContainer startAdornment={startAdornment}>
          <input className="w-full outline-none" placeholder="Enter text" />
        </InputContainer>
      )
      expect(getByTestId('start-icon')).toBeVisible()
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with endAdornment', async () => {
      const { container, getByTestId } = render(
        <InputContainer endAdornment={endAdornment}>
          <input className="w-full outline-none" placeholder="Enter text" />
        </InputContainer>
      )
      expect(getByTestId('end-icon')).toBeVisible()
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with both adornments', async () => {
      const { container, getByTestId } = render(
        <InputContainer startAdornment={startAdornment} endAdornment={endAdornment}>
          <input className="w-full outline-none" placeholder="Enter text" />
        </InputContainer>
      )
      expect(getByTestId('start-icon')).toBeVisible()
      expect(getByTestId('end-icon')).toBeVisible()
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Clearable', () => {
    it('renders with clear button when hasValue and onClear', async () => {
      const onClear = vi.fn()
      const { container, getByTestId } = render(
        <InputContainer hasValue onClear={onClear}>
          <input className="w-full outline-none" defaultValue="Some text" />
        </InputContainer>
      )
      expect(getByTestId('input-clear-button')).toBeVisible()
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders without clear button when no value', async () => {
      const onClear = vi.fn()
      const { container, queryByTestId } = render(
        <InputContainer hasValue={false} onClear={onClear}>
          <input className="w-full outline-none" placeholder="Enter text" />
        </InputContainer>
      )
      expect(queryByTestId('input-clear-button')).not.toBeInTheDocument()
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders with clear button and endAdornment', async () => {
      const onClear = vi.fn()
      const { container } = render(
        <InputContainer
          hasValue
          onClear={onClear}
          endAdornment={<Icon icon="check" />}
        >
          <input className="w-full outline-none" defaultValue="Some text" />
        </InputContainer>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Border variants', () => {
    const borderOptions = ['full', 'bottom', 'none'] as const

    for (const border of borderOptions) {
      it(`renders with border=${border}`, async () => {
        const { container } = render(
          <InputContainer border={border}>
            <input className="w-full outline-none" placeholder="Enter text" />
          </InputContainer>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Background variants', () => {
    const backgroundOptions = ['none', 'bottom', 'full'] as const

    for (const background of backgroundOptions) {
      it(`renders with background=${background}`, async () => {
        const { container } = render(
          <InputContainer background={background}>
            <input className="w-full outline-none" placeholder="Enter text" />
          </InputContainer>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Container height', () => {
    const heightOptions = ['fixed', 'auto'] as const

    for (const containerHeight of heightOptions) {
      it(`renders with containerHeight=${containerHeight}`, async () => {
        const { container } = render(
          <InputContainer containerHeight={containerHeight}>
            <input className="w-full outline-none" placeholder="Enter text" />
          </InputContainer>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('States', () => {
    it('renders disabled state', async () => {
      const { container } = render(
        <InputContainer disabled>
          <input
            className="w-full outline-none"
            placeholder="Disabled input"
            disabled
          />
        </InputContainer>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders readOnly state', async () => {
      const { container } = render(
        <InputContainer readOnly>
          <input
            className="w-full outline-none"
            defaultValue="Read only value"
            readOnly
          />
        </InputContainer>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('does not show clear button when disabled', async () => {
      const onClear = vi.fn()
      const { container, queryByTestId } = render(
        <InputContainer disabled hasValue onClear={onClear}>
          <input
            className="w-full outline-none"
            defaultValue="Disabled"
            disabled
          />
        </InputContainer>
      )
      expect(queryByTestId('input-clear-button')).not.toBeInTheDocument()
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Date input type', () => {
    it('renders as date type', async () => {
      const { container } = render(
        <InputContainer isDateType inputType="date">
          <input type="date" className="w-full outline-none" />
        </InputContainer>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders with custom className', async () => {
      const { container } = render(
        <InputContainer className="bg-blue-50 border-blue-300">
          <input className="w-full outline-none" placeholder="Custom styled" />
        </InputContainer>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})
