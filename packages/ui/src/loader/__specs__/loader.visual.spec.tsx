import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Loader } from '..'

const LOADER_COLORS = [
  'primary',
  'destructive',
  'success',
  'warning',
  'white',
  'black',
] as const

describe('Loader Visual Tests', () => {
  it('default loader renders correctly', async () => {
    const { getByTestId } = render(<Loader />)
    const element = getByTestId('cui-loader')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  for (const color of LOADER_COLORS) {
    it(`renders correctly with [${color}] color`, async () => {
      const { getByTestId } = render(<Loader color={color} />)
      const element = getByTestId('cui-loader')
      expect(element).toBeVisible()
      await expect(element).toMatchScreenshot()
    })
  }

  it('renders with custom color class', async () => {
    const { getByTestId } = render(<Loader color="text-purple-500" />)
    const element = getByTestId('cui-loader')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders with custom cx.outer class', async () => {
    const { getByTestId } = render(<Loader cx={{ outer: 'p-4' }} />)
    const element = getByTestId('cui-loader')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })

  it('renders with custom cx.inner class', async () => {
    const { getByTestId } = render(<Loader cx={{ inner: 'size-8' }} />)
    const element = getByTestId('cui-loader')
    expect(element).toBeVisible()
    await expect(element).toMatchScreenshot()
  })
})
