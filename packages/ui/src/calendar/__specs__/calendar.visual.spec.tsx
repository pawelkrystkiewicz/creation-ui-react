import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import Calendar from '..'

describe('Calendar Visual Tests', () => {
  it('renders default calendar (days view)', async () => {
    const onChange = vi.fn()
    const { container } = render(
      <Calendar onChange={onChange} startOn={new Date(2024, 0, 15)} />
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Mode', () => {
    it('renders calendar in date mode', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar mode="date" onChange={onChange} startOn={new Date(2024, 0, 15)} />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders calendar in range mode', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar mode="range" onChange={onChange} startOn={new Date(2024, 0, 15)} />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('With selected date', () => {
    it('renders calendar with selected single date', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          mode="date"
          value={new Date(2024, 0, 20)}
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders calendar with selected date range', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          mode="range"
          value={[new Date(2024, 0, 10), new Date(2024, 0, 20)]}
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Week start', () => {
    it('renders calendar with week starting on Sunday (0)', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          weekStartsOn={0}
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders calendar with week starting on Monday (1)', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          weekStartsOn={1}
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Number of months', () => {
    it('renders calendar with 1 month', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          numberOfMonths={1}
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders calendar with 2 months', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          numberOfMonths={2}
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Today selector', () => {
    it('renders calendar with today selector visible', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          showTodaySelector
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders calendar without today selector', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          showTodaySelector={false}
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders calendar with custom today text', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          showTodaySelector
          todayText="Dzisiaj"
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders calendar with custom className', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          className="shadow-lg border rounded-lg"
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Different months', () => {
    const months = [
      { month: 0, name: 'January' },
      { month: 5, name: 'June' },
      { month: 11, name: 'December' },
    ]

    for (const { month, name } of months) {
      it(`renders calendar for ${name}`, async () => {
        const onChange = vi.fn()
        const { container } = render(
          <Calendar onChange={onChange} startOn={new Date(2024, month, 15)} />
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Locale', () => {
    it('renders calendar with en locale', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          locale="en-US"
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders calendar with pl locale', async () => {
      const onChange = vi.fn()
      const { container } = render(
        <Calendar
          locale="pl-PL"
          onChange={onChange}
          startOn={new Date(2024, 0, 15)}
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})
