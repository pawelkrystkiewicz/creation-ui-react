import * as Headless from '@headlessui/react'
import clsx from 'clsx'
import { FC } from 'react'
import { RadioProps } from './types'
import { radioStyles } from './classes'

export const Radio: FC<RadioProps> = ({ className, ...props }) => {
  return (
    <Headless.Radio
      data-slot='control'
      {...props}
      className={clsx(className, 'group inline-flex focus:outline-hidden')}
    >
      <span className={radioStyles()}>
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
      </span>
    </Headless.Radio>
  )
}
