import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Select, SelectButton, SelectOptions, SelectOption } from '..'

describe('Select Visual Tests', () => {
  it('default component renders correctly', async () => {
    const { getByRole } = render(
      <Select>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
          <SelectOption value="option3">Option 3</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const { getByRole } = render(
      <Select disabled>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render readOnly state', async () => {
    const { getByRole } = render(
      <Select readOnly>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with selected value', async () => {
    const { getByRole } = render(
      <Select value="option2" onChange={() => {}}>
        <SelectButton>Option 2</SelectButton>
        <SelectOptions>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
          <SelectOption value="option3">Option 3</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with startAdornment', async () => {
    const { getByRole } = render(
      <Select startAdornment={<span>@</span>}>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with endAdornment', async () => {
    const { getByRole } = render(
      <Select endAdornment={<span>$</span>}>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with both adornments', async () => {
    const { getByRole } = render(
      <Select
        startAdornment={<span>@</span>}
        endAdornment={<span>$</span>}
      >
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with optgroups', async () => {
    const { getByRole } = render(
      <Select>
        <SelectButton>Select an option</SelectButton>
        <SelectOptions>
          <div className='px-2 py-1 text-sm font-medium text-gray-500'>Group 1</div>
          <SelectOption value="option1">Option 1</SelectOption>
          <SelectOption value="option2">Option 2</SelectOption>
          <div className='px-2 py-1 text-sm font-medium text-gray-500'>Group 2</div>
          <SelectOption value="option3">Option 3</SelectOption>
          <SelectOption value="option4">Option 4</SelectOption>
        </SelectOptions>
      </Select>
    )
    const element = getByRole('button')
    await expect(element).toMatchScreenshot()
  })
})