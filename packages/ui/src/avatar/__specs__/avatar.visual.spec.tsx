import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { Avatar } from '..'
import { AvatarGroup } from '../AvatarGroup'

const AVATAR_VARIANTS = ['circle', 'rounded'] as const
const AVATAR_SIZES = [24, 32, 40, 48, 64] as const

describe('Avatar Visual Tests', () => {
  it('default avatar renders correctly', async () => {
    const { container } = render(
      <Avatar src="https://i.pravatar.cc/150?img=1" alt="User avatar" />
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Variants', () => {
    for (const variant of AVATAR_VARIANTS) {
      it(`renders [${variant}] variant`, async () => {
        const { container } = render(
          <Avatar
            variant={variant}
            src="https://i.pravatar.cc/150?img=2"
            alt="User avatar"
          />
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Sizes', () => {
    for (const size of AVATAR_SIZES) {
      it(`renders size ${size}px`, async () => {
        const { container } = render(
          <Avatar
            size={size}
            src="https://i.pravatar.cc/150?img=3"
            alt="User avatar"
          />
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('With children (initials)', () => {
    it('renders avatar with text children', async () => {
      const { container } = render(
        <Avatar className="bg-primary text-white">JD</Avatar>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders avatar with icon children', async () => {
      const { container } = render(
        <Avatar className="bg-gray-200">
          <svg className="size-6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </Avatar>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders avatar with custom className', async () => {
      const { container } = render(
        <Avatar
          className="ring-2 ring-primary ring-offset-2"
          src="https://i.pravatar.cc/150?img=4"
          alt="User avatar"
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders avatar with custom style', async () => {
      const { container } = render(
        <Avatar
          style={{ border: '3px solid red' }}
          src="https://i.pravatar.cc/150?img=5"
          alt="User avatar"
        />
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})

describe('AvatarGroup Visual Tests', () => {
  it('default avatar group renders correctly', async () => {
    const { container } = render(
      <AvatarGroup>
        <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
        <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
        <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
      </AvatarGroup>
    )
    expect(container).toBeVisible()
    await expect(container.firstChild).toMatchScreenshot()
  })

  describe('Limit', () => {
    it('renders avatar group with limit', async () => {
      const { container } = render(
        <AvatarGroup limit={3} total={5}>
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
          <Avatar src="https://i.pravatar.cc/150?img=4" alt="User 4" />
          <Avatar src="https://i.pravatar.cc/150?img=5" alt="User 5" />
        </AvatarGroup>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders surplus count when exceeding limit', async () => {
      const { container, getByText } = render(
        <AvatarGroup limit={2} total={10}>
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        </AvatarGroup>
      )
      expect(getByText('+8')).toBeVisible()
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Size', () => {
    it('renders avatar group with custom size', async () => {
      const { container } = render(
        <AvatarGroup size={32}>
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        </AvatarGroup>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Variant', () => {
    for (const variant of AVATAR_VARIANTS) {
      it(`renders avatar group with [${variant}] variant`, async () => {
        const { container } = render(
          <AvatarGroup variant={variant}>
            <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
            <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
            <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
          </AvatarGroup>
        )
        await expect(container.firstChild).toMatchScreenshot()
      })
    }
  })

  describe('Stacking offset', () => {
    it('renders avatar group with custom stacking offset', async () => {
      const { container } = render(
        <AvatarGroup stackingOffsetPercent={50}>
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        </AvatarGroup>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders avatar group with minimal stacking offset', async () => {
      const { container } = render(
        <AvatarGroup stackingOffsetPercent={20}>
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        </AvatarGroup>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })

  describe('Custom styling', () => {
    it('renders avatar group with custom className', async () => {
      const { container } = render(
        <AvatarGroup className="p-2 bg-gray-100 rounded-lg">
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
        </AvatarGroup>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })

    it('renders avatar group with custom surplus className', async () => {
      const { container } = render(
        <AvatarGroup
          limit={2}
          total={5}
          surplusClassName="bg-primary text-white"
        >
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar src="https://i.pravatar.cc/150?img=2" alt="User 2" />
          <Avatar src="https://i.pravatar.cc/150?img=3" alt="User 3" />
        </AvatarGroup>
      )
      await expect(container.firstChild).toMatchScreenshot()
    })
  })
})
