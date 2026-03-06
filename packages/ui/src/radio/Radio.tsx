import { Radio as BaseRadio } from '@base-ui/react/radio'
import clsx from 'clsx'
import type { FC } from 'react'
import type { RadioProps } from './types'
import { radioStyles } from './classes'

export const Radio: FC<RadioProps> = ({ className, ...props }) => {
  return (
    <BaseRadio.Root
      data-slot='control'
      {...props}
      className={clsx(className, 'group inline-flex focus:outline-hidden')}
    >
      <BaseRadio.Indicator
        keepMounted
        className={radioStyles()}
      >
        <span
          className={clsx(
            'size-full',
            'rounded-full',
            'border-[4.5px]',
            'border-transparent',
            'bg-(--radio-indicator)',
            'bg-clip-padding',
            // Forced colors mode
            'forced-colors:border-[Canvas]',
            'forced-colors:group-data-checked:border-[Highlight]',
          )}
        />
      </BaseRadio.Indicator>
    </BaseRadio.Root>
  )
}
