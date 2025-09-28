import { render } from 'vitest-browser-react'
import { describe, expect, it } from 'vitest'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardStats, CardTitle } from '..'
import { verifyComputedStyles } from '../../../test/utils/helpers'

describe('Card CT', () => {
  it('renders basic card with all components', async () => {
    const screen = await render(
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

    const card = screen.getByTestId('card').element()
    await expect(card).toBeVisible()
    await expect(card).toMatchScreenshot()

    // Verify basic card styles
    await verifyComputedStyles(card, {
      'border-radius': '8px',
      'border-width': '1px',
      'padding-top': '20px',
      'padding-right': '20px',
      'padding-bottom': '20px',
      'padding-left': '20px',
    }, 'basic card styles')
  })

  it('renders card with stats', async () => {
    const screen = await render(
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

    const card = screen.getByTestId('stats-card').element()
    await expect(card).toBeVisible()
    await expect(card).toMatchScreenshot()

    // Verify stats styles
    const stats = screen.getByText('1,234').element()
    await verifyComputedStyles(stats, {
      'font-weight': '700',
      'font-size': '36px',
      'margin-top': '6px',
      'margin-bottom': '6px',
    }, 'card stats styles')
  })

  it('renders card as link when href is provided', async () => {
    const screen = await render(
      <Card href='/example' data-testid='link-card'>
        <CardContent>
          <CardTitle>Clickable Card</CardTitle>
          <CardDescription>This card is a link</CardDescription>
        </CardContent>
      </Card>,
    )

    const link = screen.getByRole('link').element()
    await expect(link).toBeVisible()
    await expect(link).toHaveAttribute('href', '/example')
    await expect(link).toMatchScreenshot()

    // Verify link styles
    await verifyComputedStyles(link, {
      display: 'block',
    }, 'card link styles')
  })

  it('renders card with custom className', async () => {
    const screen = await render(
      <Card data-testid='custom-card' className='bg-blue-100 border-blue-300'>
        <CardContent>
          <CardTitle>Custom Styled Card</CardTitle>
          <CardDescription>With custom background and border</CardDescription>
        </CardContent>
      </Card>,
    )

    const card = screen.getByTestId('custom-card').element()
    await expect(card).toBeVisible()
    await expect(card).toMatchScreenshot()

    // Verify custom classes are applied
    expect(card.className).toContain('bg-blue-100')
    expect(card.className).toContain('border-blue-300')
  })

  describe('Card Components', () => {
    it('renders CardTitle with correct styles', async () => {
      const screen = await render(
        <CardTitle data-testid='title'>Test Title</CardTitle>,
      )

      const title = screen.getByTestId('title').element()
      await expect(title).toBeVisible()
      await expect(title).toMatchScreenshot()

      await verifyComputedStyles(title, {
        'font-weight': '500',
        'font-size': '18px',
        'line-height': '1.55556',
        'letter-spacing': '-0.45px',
      }, 'card title styles')
    })

    it('renders CardDescription with correct styles', async () => {
      const screen = await render(
        <CardDescription data-testid='description'>Test description</CardDescription>,
      )

      const description = screen.getByTestId('description').element()
      await expect(description).toBeVisible()
      await expect(description).toMatchScreenshot()

      await verifyComputedStyles(description, {
        'font-size': '14px',
      }, 'card description styles')
    })

    it('renders CardHeader with full width', async () => {
      const screen = await render(
        <CardHeader data-testid='header'>
          <CardTitle>Header Title</CardTitle>
        </CardHeader>,
      )

      const header = screen.getByTestId('header').element()
      await expect(header).toBeVisible()
      await expect(header).toMatchScreenshot()

      await verifyComputedStyles(header, {
        width: '100%',
      }, 'card header styles')
    })

    it('renders CardFooter with flex layout', async () => {
      const screen = await render(
        <CardFooter data-testid='footer'>
          <button>Button 1</button>
          <button>Button 2</button>
        </CardFooter>,
      )

      const footer = screen.getByTestId('footer').element()
      await expect(footer).toBeVisible()
      await expect(footer).toMatchScreenshot()

      await verifyComputedStyles(footer, {
        display: 'flex',
        'align-items': 'center',
        gap: '8px',
      }, 'card footer styles')
    })

    it('renders CardContent as simple container', async () => {
      const screen = await render(
        <CardContent data-testid='content'>
          <p>Content goes here</p>
        </CardContent>,
      )

      const content = screen.getByTestId('content').element()
      await expect(content).toBeVisible()
      await expect(content).toMatchScreenshot()

      expect(content.tagName).toBe('DIV')
    })
  })

  describe('Card Layout Variations', () => {
    it('renders minimal card with just content', async () => {
      const screen = await render(
        <Card data-testid='minimal-card'>
          <CardContent>Simple content</CardContent>
        </Card>,
      )

      const card = screen.getByTestId('minimal-card').element()
      await expect(card).toBeVisible()
      await expect(card).toMatchScreenshot()
    })

    it('renders card with complex content structure', async () => {
      const screen = await render(
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

      const card = screen.getByTestId('complex-card').element()
      await expect(card).toBeVisible()
      await expect(card).toMatchScreenshot()
    })

    it('renders nested card structure', async () => {
      const screen = await render(
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

      const outerCard = screen.getByTestId('outer-card').element()
      const innerCard = screen.getByTestId('inner-card').element()

      await expect(outerCard).toBeVisible()
      await expect(innerCard).toBeVisible()
      await expect(outerCard).toMatchScreenshot()
    })
  })
})