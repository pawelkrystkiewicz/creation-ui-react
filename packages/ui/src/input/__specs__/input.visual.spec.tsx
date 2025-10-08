import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Input } from '..'
import { Icon } from '../../icon'
import { ELEMENT_COLOR, INPUT_BORDER } from '../../types'
import { page } from 'vitest/browser'

describe('Input CT', () => {
  it('default input renders correctly', async () => {
    const { getByRole } = render(<Input placeholder='Default input' />)

    const input = getByRole('textbox')
    expect(input).toBeVisible()
    expect(input).toBeEnabled()
    expect(input).toHaveAttribute('placeholder', 'Default input')

    await expect(input).toMatchScreenshot()
  })

  for (const border of INPUT_BORDER) {
    it(`matches snapshot for [${border}] border`, async () => {
      const { getByRole } = render(
        <Input border={border} placeholder={`${border} input`} />,
      )
      const input = getByRole('textbox')
      expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  }

  for (const color of ELEMENT_COLOR) {
    it(`matches snapshot for [${color}] color`, async () => {
      const { getByRole } = render(
        <Input color={color} placeholder={`${color} input`} />,
      )
      const input = getByRole('textbox')
      expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  }

  it('renders with startAdornment', async () => {
    const startAdornment = <Icon icon='plus' data-testid='icon-plus' />

    const { getByRole, getByTestId } = render(
      <Input
        startAdornment={startAdornment}
        placeholder='Input with start adornment'
      />,
    )

    const input = getByRole('textbox')
    const icon = getByTestId('icon-plus')

    expect(input).toBeVisible()
    expect(icon).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  it('renders with endAdornment', async () => {
    const endAdornment = <Icon icon='minus' data-testid='icon-minus' />

    const { getByRole, getByTestId } = render(
      <Input
        endAdornment={endAdornment}
        placeholder='Input with end adornment'
      />,
    )

    const input = getByRole('textbox')
    const icon = getByTestId('icon-minus')

    expect(input).toBeVisible()
    expect(icon).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  it('renders with both adornments', async () => {
    const startAdornment = <Icon icon='plus' data-testid='icon-plus' />
    const endAdornment = <Icon icon='minus' data-testid='icon-minus' />

    const { getByRole, getByTestId } = render(
      <Input
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        placeholder='Input with both adornments'
      />,
    )

    const input = getByRole('textbox')
    const plusIcon = getByTestId('icon-plus')
    const minusIcon = getByTestId('icon-minus')

    expect(input).toBeVisible()
    expect(plusIcon).toBeVisible()
    expect(minusIcon).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  it('renders with clearable functionality', async () => {
    const { getByRole, getByTestId } = render(
      <Input
        onClear={() => {}}
        value='Clearable value'
        onChange={() => {}}
        placeholder='Clearable input'
      />,
    )

    const input = getByRole('textbox')
    const clearButton = getByTestId('input-clear-button')

    expect(input).toBeVisible()
    expect(clearButton).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  describe('Input States', () => {
    it('should correctly render [disabled] state', async () => {
      const { getByRole } = render(
        <Input
          disabled
          placeholder='Disabled input'
          value='Disabled value'
          onChange={() => {}}
        />,
      )

      const input = getByRole('textbox')
      expect(input).toBeVisible()
      expect(input).toBeDisabled()
      await expect(input).toMatchScreenshot()
    })

    it('should correctly render [readOnly] state', async () => {
      const { getByRole } = render(
        <Input
          readOnly
          placeholder='ReadOnly input'
          value='ReadOnly value'
          onChange={() => {}}
        />,
      )

      const input = getByRole('textbox')
      expect(input).toBeVisible()
      expect(input).toHaveAttribute('readonly')
      await expect(input).toMatchScreenshot()
    })

    it('should correctly render input with value', async () => {
      const { getByRole } = render(
        <Input
          value='Input with value'
          onChange={() => {}}
          placeholder='Placeholder'
        />,
      )

      const input = getByRole('textbox')
      expect(input).toBeVisible()
      expect(input).toHaveValue('Input with value')
      await expect(input).toMatchScreenshot()
    })
  })

  describe('Input Types', () => {
    const INPUT_TYPES = [
      'email',
      'password',
      'number',
      'tel',
      'url',
      'search',
    ] as const

    for (const type of INPUT_TYPES) {
      it(`matches snapshot for [${type}] input type`, async () => {
        const { baseElement } = render(
          <Input
            type={type as any}
            placeholder={`${type} input`}
            data-testid={'input'}
          />,
        )

        const screen = page.elementLocator(baseElement)
        const input = screen.getByTestId('input').element()

        expect(input).toBeVisible()
        expect(input).toHaveAttribute('type', type)
        await expect(input).toMatchScreenshot()
      })
    }

    const dateTypes = [
      'date',
      'datetime-local',
      'month',
      'time',
      'week',
    ] as const

    for (const type of dateTypes) {
      it(`matches snapshot for [${type}] date input type`, async () => {
        const { container } = render(<Input type={type} />)

        const input = container.querySelector(
          `input[type="${type}"]`,
        ) as HTMLElement

        expect(input).toBeDefined()
        expect(input).toBeVisible()
        await expect(input).toMatchScreenshot()
      })
    }

    it('matches snapshot for [file] input type', async () => {
      const { container } = render(<Input type='file' />)

      const input = container.querySelector('input[type="file"]') as HTMLElement

      expect(input).toBeDefined()
      expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })

    it('matches snapshot for [color] input type', async () => {
      const { container } = render(<Input type='color' />)

      const input = container.querySelector(
        'input[type="color"]',
      ) as HTMLElement

      expect(input).toBeDefined()
      expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  })

  describe('Container Height Variants', () => {
    const heights = ['fixed', 'auto'] as const

    for (const height of heights) {
      it(`matches snapshot for [${height}] container height`, async () => {
        const { getByRole } = render(
          <Input
            containerHeight={height as 'fixed' | 'auto'}
            placeholder={`${height} height input`}
          />,
        )

        const input = getByRole('textbox')
        expect(input).toBeVisible()
        await expect(input).toMatchScreenshot()
      })
    }
  })

  describe('Complex Combinations', () => {
    it('matches snapshot for complex input with all features', async () => {
      const { getByRole, getByTestId } = render(
        <Input
          startAdornment={<Icon icon='plus' data-testid='start-icon' />}
          endAdornment={<Icon icon='minus' data-testid='end-icon' />}
          onClear={() => {}}
          value='Complex input value'
          onChange={() => {}}
          border='full'
          color='primary'
          containerHeight={'auto'}
          placeholder='Complex input'
        />,
      )

      const input = getByRole('textbox')
      const startIcon = getByTestId('start-icon')
      const endIcon = getByTestId('end-icon')
      const clearButton = getByTestId('input-clear-button')

      expect(input).toBeVisible()
      expect(startIcon).toBeVisible()
      expect(endIcon).toBeVisible()
      expect(clearButton).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  })
})
