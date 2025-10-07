import { render } from '@testing-library/react'
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
import { verifyComputedStyles } from '../../../test/utils/helpers'

describe('Card CT', () => {
  it('renders basic card with all components', async () => {
    const { getByTestId } = render(
      <Card data-testid='card'>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description text</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Main card content goes here</p>
        </CardContent>
        <CardFooter>
          <button>Action</button>
        </CardFooter>
      </Card>,
    )

    const card = getByTestId('card')
    expect(card).toBeVisible()
    await expect(card).toMatchScreenshot()

    // Verify basic card styles
    await verifyComputedStyles(
      card,
      {
        'border-radius': '8px',
        'border-width': '1px',
        'padding-top': '20px',
        'padding-right': '20px',
        'padding-bottom': '20px',
        'padding-left': '20px',
      },
      'basic card styles',
    )
  })

  it('renders card with stats', async () => {
    const { getByTestId, getByText } = render(
      <Card data-testid='stats-card'>
        <CardHeader>
          <CardTitle>Statistics</CardTitle>
          <CardDescription>Monthly overview</CardDescription>
        </CardHeader>
        <CardContent>
          <CardStats>1,234</CardStats>
          <p>Total visits this month</p>
        </CardContent>
      </Card>,
    )

    const card = getByTestId('stats-card')
    expect(card).toBeVisible()
    await expect(card).toMatchScreenshot()

    // Verify stats styles
    const stats = getByText('1,234')
    await verifyComputedStyles(
      stats,
      {
        'font-weight': '700',
        'font-size': '36px',
        'margin-top': '6px',
        'margin-bottom': '6px',
      },
      'card stats styles',
    )
  })

  it('renders card as link when href is provided', async () => {
    const { getByRole } = render(
      <Card href='/example' data-testid='link-card'>
        <CardContent>
          <CardTitle>Clickable Card</CardTitle>
          <CardDescription>This card is a link</CardDescription>
        </CardContent>
      </Card>,
    )

    const link = getByRole('link')
    expect(link).toBeVisible()
    expect(link).toHaveAttribute('href', '/example')
    await expect(link).toMatchScreenshot()

    // Verify link styles
    await verifyComputedStyles(
      link,
      {
        display: 'block',
      },
      'card link styles',
    )
  })

  it('renders card with custom className', async () => {
    const { getByTestId } = render(
      <Card data-testid='custom-card' className='bg-blue-100 border-blue-300'>
        <CardContent>
          <CardTitle>Custom Styled Card</CardTitle>
          <CardDescription>With custom background and border</CardDescription>
        </CardContent>
      </Card>,
    )

    const card = getByTestId('custom-card')
    expect(card).toBeVisible()
    await expect(card).toMatchScreenshot()

    // Verify custom classes are applied
    expect(card.className).toContain('bg-blue-100')
    expect(card.className).toContain('border-blue-300')
  })

  describe('Card Components', () => {
    it('renders CardTitle with correct styles', async () => {
      const { getByTestId } = render(
        <CardTitle data-testid='title'>Test Title</CardTitle>,
      )

      const title = getByTestId('title')
      expect(title).toBeVisible()
      await expect(title).toMatchScreenshot()

      await verifyComputedStyles(
        title,
        {
          'font-weight': '500',
          'font-size': '18px',
          'line-height': '1.55556',
          'letter-spacing': '-0.45px',
        },
        'card title styles',
      )
    })

    it('renders CardDescription with correct styles', async () => {
      const { getByTestId } = render(
        <CardDescription data-testid='description'>
          Test description
        </CardDescription>,
      )

      const description = getByTestId('description')
      expect(description).toBeVisible()
      await expect(description).toMatchScreenshot()

      await verifyComputedStyles(
        description,
        {
          'font-size': '14px',
        },
        'card description styles',
      )
    })

    it('renders CardHeader with full width', async () => {
      const { getByTestId } = render(
        <CardHeader data-testid='header'>
          <CardTitle>Header Title</CardTitle>
        </CardHeader>,
      )

      const header = getByTestId('header')
      expect(header).toBeVisible()
      await expect(header).toMatchScreenshot()

      await verifyComputedStyles(
        header,
        {
          width: '100%',
        },
        'card header styles',
      )
    })

    it('renders CardFooter with flex layout', async () => {
      const { getByTestId } = render(
        <CardFooter data-testid='footer'>
          <button>Button 1</button>
          <button>Button 2</button>
        </CardFooter>,
      )

      const footer = getByTestId('footer')
      expect(footer).toBeVisible()
      await expect(footer).toMatchScreenshot()

      await verifyComputedStyles(
        footer,
        {
          display: 'flex',
          'align-items': 'center',
          gap: '8px',
        },
        'card footer styles',
      )
    })

    it('renders CardContent as simple container', async () => {
      const { getByTestId } = render(
        <CardContent data-testid='content'>
          <p>Content goes here</p>
        </CardContent>,
      )

      const content = getByTestId('content')
      expect(content).toBeVisible()
      await expect(content).toMatchScreenshot()

      expect(content.tagName).toBe('DIV')
    })
  })

  describe('Card Layout Variations', () => {
    it('renders minimal card with just content', async () => {
      const { getByTestId } = render(
        <Card data-testid='minimal-card'>
          <CardContent>Simple content</CardContent>
        </Card>,
      )

      const card = getByTestId('minimal-card')
      expect(card).toBeVisible()
      await expect(card).toMatchScreenshot()
    })

    it('renders card with complex content structure', async () => {
      const { getByTestId } = render(
        <Card data-testid='complex-card'>
          <CardHeader>
            <CardTitle>Complex Card</CardTitle>
            <CardDescription>Multiple content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <CardStats>5,678</CardStats>
            <p>Some descriptive text</p>
            <div>
              <span>Tag 1</span>
              <span>Tag 2</span>
            </div>
          </CardContent>
          <CardFooter>
            <button>Primary Action</button>
            <button>Secondary Action</button>
          </CardFooter>
        </Card>,
      )

      const card = getByTestId('complex-card')
      expect(card).toBeVisible()
      await expect(card).toMatchScreenshot()
    })

    it('renders nested card structure', async () => {
      const { getByTestId } = render(
        <Card data-testid='outer-card'>
          <CardHeader>
            <CardTitle>Outer Card</CardTitle>
          </CardHeader>
          <CardContent>
            <Card data-testid='inner-card' className='bg-gray-50'>
              <CardContent>
                <CardTitle>Inner Card</CardTitle>
                <CardDescription>Nested content</CardDescription>
              </CardContent>
            </Card>
          </CardContent>
        </Card>,
      )

      const outerCard = getByTestId('outer-card')
      const innerCard = getByTestId('inner-card')

      expect(outerCard).toBeVisible()
      expect(innerCard).toBeVisible()
      await expect(outerCard).toMatchScreenshot()
    })
  })
})
