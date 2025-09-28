import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Input } from '..'
import { Icon } from '../../icon'
import { ELEMENT_COLOR, INPUT_VARIANTS } from '../../types'

describe('Input CT', () => {
  it('default input renders correctly', async () => {
    const screen = render(<Input placeholder="Default input" />)

    const input = screen.getByRole('textbox').element()
    await expect(input).toBeVisible()
    await expect(input).toBeEnabled()
    await expect(input).toHaveAttribute('placeholder', 'Default input')

    await expect(input).toMatchScreenshot()
  })

  for (const variant of INPUT_VARIANTS) {
    it(`matches snapshot for [${variant}] variant`, async () => {
      const screen = render(
        <Input
          border={variant}
          placeholder={`${variant} input`}
        />
      )
      const input = screen.getByRole('textbox').element()
      await expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  }

  for (const color of ELEMENT_COLOR) {
    it(`matches snapshot for [${color}] color`, async () => {
      const screen = render(
        <Input
          background={color}
          placeholder={`${color} input`}
        />
      )
      const input = screen.getByRole('textbox').element()
      await expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  }

  it('renders with startAdornment', async () => {
    const startAdornment = <Icon icon="plus" data-testid="icon-plus" />

    const screen = render(
      <Input
        startAdornment={startAdornment}
        placeholder="Input with start adornment"
      />
    )

    const input = screen.getByRole('textbox').element()
    const icon = screen.getByTestId('icon-plus').element()

    await expect(input).toBeVisible()
    await expect(icon).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  it('renders with endAdornment', async () => {
    const endAdornment = <Icon icon="minus" data-testid="icon-minus" />

    const screen = render(
      <Input
        endAdornment={endAdornment}
        placeholder="Input with end adornment"
      />
    )

    const input = screen.getByRole('textbox').element()
    const icon = screen.getByTestId('icon-minus').element()

    await expect(input).toBeVisible()
    await expect(icon).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  it('renders with both adornments', async () => {
    const startAdornment = <Icon icon="plus" data-testid="icon-plus" />
    const endAdornment = <Icon icon="minus" data-testid="icon-minus" />

    const screen = render(
      <Input
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        placeholder="Input with both adornments"
      />
    )

    const input = screen.getByRole('textbox').element()
    const plusIcon = screen.getByTestId('icon-plus').element()
    const minusIcon = screen.getByTestId('icon-minus').element()

    await expect(input).toBeVisible()
    await expect(plusIcon).toBeVisible()
    await expect(minusIcon).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  it('renders with clearable functionality', async () => {
    const screen = render(
      <Input
        onClear={() => {}}
        value="Clearable value"
        onChange={() => {}}
        placeholder="Clearable input"
      />
    )

    const input = screen.getByRole('textbox').element()
    const clearButton = screen.getByTestId('input-clear-button').element()

    await expect(input).toBeVisible()
    await expect(clearButton).toBeVisible()
    await expect(input).toMatchScreenshot()
  })

  describe('Input States', () => {
    it('should correctly render [disabled] state', async () => {
      const screen = render(
        <Input
          disabled
          placeholder="Disabled input"
          value="Disabled value"
          onChange={() => {}}
        />
      )

      const input = screen.getByRole('textbox').element()
      await expect(input).toBeVisible()
      await expect(input).toBeDisabled()
      await expect(input).toMatchScreenshot()
    })

    it('should correctly render [readOnly] state', async () => {
      const screen = render(
        <Input
          readOnly
          placeholder="ReadOnly input"
          value="ReadOnly value"
          onChange={() => {}}
        />
      )

      const input = screen.getByRole('textbox').element()
      await expect(input).toBeVisible()
      await expect(input).toHaveAttribute('readonly')
      await expect(input).toMatchScreenshot()
    })

    it('should correctly render input with value', async () => {
      const screen = render(
        <Input
          value="Input with value"
          onChange={() => {}}
          placeholder="Placeholder"
        />
      )

      const input = screen.getByRole('textbox').element()
      await expect(input).toBeVisible()
      await expect(input).toHaveValue('Input with value')
      await expect(input).toMatchScreenshot()
    })
  })

  describe('Input Types', () => {
    const inputTypes = [
      'email',
      'password',
      'number',
      'tel',
      'url',
      'search'
    ] as const

    for (const type of inputTypes) {
      it(`matches snapshot for [${type}] input type`, async () => {
        const screen = render(
          <Input
            type={type}
            placeholder={`${type} input`}
          />
        )

        let input
        if (type === 'number') {
          input = screen.getByRole('spinbutton').element()
        } else if (type === 'search') {
          input = screen.getByRole('searchbox').element()
        } else {
          input = screen.getByRole('textbox').element()
        }

        await expect(input).toBeVisible()
        await expect(input).toHaveAttribute('type', type)
        await expect(input).toMatchScreenshot()
      })
    }

    const dateTypes = [
      'date',
      'datetime-local',
      'month',
      'time',
      'week'
    ] as const

    for (const type of dateTypes) {
      it(`matches snapshot for [${type}] date input type`, async () => {
        const screen = render(<Input type={type} />)

        const container = screen.container
        const input = container.querySelector(`input[type="${type}"]`) as HTMLElement

        expect(input).toBeDefined()
        await expect(input).toBeVisible()
        await expect(input).toMatchScreenshot()
      })
    }

    it('matches snapshot for [file] input type', async () => {
      const screen = render(<Input type="file" />)

      const container = screen.container
      const input = container.querySelector('input[type="file"]') as HTMLElement

      expect(input).toBeDefined()
      await expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })

    it('matches snapshot for [color] input type', async () => {
      const screen = render(<Input type="color" />)

      const container = screen.container
      const input = container.querySelector('input[type="color"]') as HTMLElement

      expect(input).toBeDefined()
      await expect(input).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  })

  describe('Container Height Variants', () => {
    const heights = ['sm', 'md', 'lg'] as const

    for (const height of heights) {
      it(`matches snapshot for [${height}] container height`, async () => {
        const screen = render(
          <Input
            containerHeight={height}
            placeholder={`${height} height input`}
          />
        )

        const input = screen.getByRole('textbox').element()
        await expect(input).toBeVisible()
        await expect(input).toMatchScreenshot()
      })
    }
  })

  describe('Complex Combinations', () => {
    it('matches snapshot for complex input with all features', async () => {
      const screen = render(
        <Input
          startAdornment={<Icon icon="plus" data-testid="start-icon" />}
          endAdornment={<Icon icon="minus" data-testid="end-icon" />}
          onClear={() => {}}
          value="Complex input value"
          onChange={() => {}}
          border="outlined"
          background="primary"
          containerHeight="lg"
          placeholder="Complex input"
        />
      )

      const input = screen.getByRole('textbox').element()
      const startIcon = screen.getByTestId('start-icon').element()
      const endIcon = screen.getByTestId('end-icon').element()
      const clearButton = screen.getByTestId('input-clear-button').element()

      await expect(input).toBeVisible()
      await expect(startIcon).toBeVisible()
      await expect(endIcon).toBeVisible()
      await expect(clearButton).toBeVisible()
      await expect(input).toMatchScreenshot()
    })
  })
})
