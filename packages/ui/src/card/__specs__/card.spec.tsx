import { render } from '@testing-library/react'
import { axe } from 'jest-axe'
import { describe, expect, it } from 'vitest'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardStats,
  CardTitle,
} from '..'

describe('Card', () => {
  it('applies custom className', async () => {
    const { getByTestId } = await render(
      <Card data-testid='card' className='custom-class'>
        <CardContent>Card content</CardContent>
      </Card>,
    )
    const card = getByTestId('card')
    expect(card).toBeDefined()
    expect(card.classList).toContain('custom-class')
  })

  it('renders as link when href is provided', async () => {
    const { getByRole } = await render(
      <Card href='/test'>
        <CardContent>Card content</CardContent>
      </Card>,
    )
    const link = getByRole('link')
    expect(link).toBeDefined()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('renders children content correctly', async () => {
    const { getByText } = await render(
      <Card>
        <CardContent>Card content</CardContent>
      </Card>,
    )
    expect(getByText('Card content')).toBeDefined()
  })

  it('has no accessibility violations', async () => {
    const { container } = await render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description</CardDescription>
        </CardHeader>
        <CardContent>Card content</CardContent>
        <CardFooter>Card footer</CardFooter>
      </Card>,
    )
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})

describe('CardTitle', () => {
  it('applies custom className', async () => {
    const { getByText } = await render(
      <CardTitle className='custom-class'>Card Title</CardTitle>,
    )
    const title = getByText('Card Title')
    expect(title).toBeDefined()
    expect(title.classList).toContain('custom-class')
  })

  it('renders as heading element', async () => {
    const { getByText } = await render(<CardTitle>Card Title</CardTitle>)
    const title = getByText('Card Title')
    expect(title.tagName).toBe('H3')
  })
})

describe('CardDescription', () => {
  it('applies custom className', async () => {
    const { getByText } = await render(
      <CardDescription className='custom-class'>
        Card description
      </CardDescription>,
    )
    const description = getByText('Card description')
    expect(description).toBeDefined()
    expect(description.classList).toContain('custom-class')
  })

  it('renders as paragraph element', async () => {
    const { getByText } = await render(
      <CardDescription>Card description</CardDescription>,
    )
    const description = getByText('Card description')
    expect(description.tagName).toBe('P')
  })
})

describe('CardContent', () => {
  it('applies custom className', async () => {
    const { getByText } = await render(
      <CardContent className='custom-class'>Card content</CardContent>,
    )
    const content = getByText('Card content')
    expect(content).toBeDefined()
    expect(content.classList).toContain('custom-class')
  })

  it('renders as div element', async () => {
    const { getByText } = await render(<CardContent>Card content</CardContent>)
    const content = getByText('Card content')
    expect(content.tagName).toBe('DIV')
  })
})

describe('CardHeader', () => {
  it('applies custom className', async () => {
    const { getByTestId } = await render(
      <CardHeader data-testid='header' className='custom-class'>
        <CardTitle>Header Title</CardTitle>
      </CardHeader>,
    )
    const header = getByTestId('header')
    expect(header).toBeDefined()
    expect(header.classList).toContain('custom-class')
  })

  it('renders as div element', async () => {
    const { getByText } = await render(
      <CardHeader>
        <CardTitle>Header Title</CardTitle>
      </CardHeader>,
    )
    const header = getByText('Header Title').closest('div')
    expect(header).toBeDefined()
    expect(header?.tagName).toBe('DIV')
  })
})

describe('CardFooter', () => {
  it('applies custom className', async () => {
    const { getByTestId } = await render(
      <CardFooter data-testid='footer' className='custom-class'>
        Footer content
      </CardFooter>,
    )
    const footer = getByTestId('footer')
    expect(footer).toBeDefined()
    expect(footer.classList).toContain('custom-class')
  })

  it('renders as div element', async () => {
    const { getByText } = await render(<CardFooter>Footer content</CardFooter>)
    const footer = getByText('Footer content')
    expect(footer.tagName).toBe('DIV')
  })

  it('applies flex layout classes', async () => {
    const { getByText } = await render(<CardFooter>Footer content</CardFooter>)
    const footer = getByText('Footer content')
    expect(footer.classList).toContain('flex')
    expect(footer.classList).toContain('items-center')
    expect(footer.classList).toContain('gap-2')
  })
})

describe('CardStats', () => {
  it('applies custom className', async () => {
    const { getByText } = await render(
      <CardStats className='custom-class'>1234</CardStats>,
    )
    const stats = getByText('1234')
    expect(stats).toBeDefined()
    expect(stats.classList).toContain('custom-class')
  })

  it('renders as div element', async () => {
    const { getByText } = await render(<CardStats>1234</CardStats>)
    const stats = getByText('1234')
    expect(stats.tagName).toBe('DIV')
  })

  it('applies responsive text size classes', async () => {
    const { getByText } = await render(<CardStats>1234</CardStats>)
    const stats = getByText('1234')
    expect(stats.classList).toContain('text-2xl')
    expect(stats.classList).toContain('sm:text-xl')
    expect(stats.classList).toContain('md:text-2xl')
    expect(stats.classList).toContain('lg:text-3xl')
    expect(stats.classList).toContain('xl:text-4xl')
  })

  it('applies font weight and margin classes', async () => {
    const { getByText } = await render(<CardStats>1234</CardStats>)
    const stats = getByText('1234')
    expect(stats.classList).toContain('font-bold')
    expect(stats.classList).toContain('my-1.5')
  })
})
