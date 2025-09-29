import { describe, expect, it } from 'vitest'
import { render } from 'vitest-browser-react'
import { Select } from '..'

describe('Select Visual Tests', () => {
  it('default component renders correctly', async () => {
    const screen = await render(
      <Select>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render disabled state', async () => {
    const screen = await render(
      <Select disabled>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toBeDisabled()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render readOnly state', async () => {
    const screen = await render(
      <Select readOnly>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with selected value', async () => {
    const screen = await render(
      <Select value="option2" onChange={() => {}}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render multiple select', async () => {
    const screen = await render(
      <Select multiple value={['option1', 'option3']} onChange={() => {}}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    )
    const element = screen.getByRole('listbox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with startAdornment', async () => {
    const screen = await render(
      <Select startAdornment={<span>@</span>}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with endAdornment', async () => {
    const screen = await render(
      <Select endAdornment={<span>$</span>}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with both adornments', async () => {
    const screen = await render(
      <Select
        startAdornment={<span>@</span>}
        endAdornment={<span>$</span>}
      >
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toMatchScreenshot()
  })

  it('should correctly render with optgroups', async () => {
    const screen = await render(
      <Select>
        <optgroup label="Group 1">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
        </optgroup>
        <optgroup label="Group 2">
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
        </optgroup>
      </Select>
    )
    const element = screen.getByRole('combobox').element()
    await expect(element).toMatchScreenshot()
  })
})