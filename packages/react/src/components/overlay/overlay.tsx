import { Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { overlay } from './classes'
import type { OverlayProps } from './types'

export const Overlay = ({
  active,
  onClick,
  className,
  cursorWait,
  children,
}: OverlayProps) => {
  const { zIndex, styles } = useTheme()

  return (
    <Transition
      show={!!active}
      as={Fragment}
      unmount={false}
      enter={clsx(styles.animations.microInteractionsAll)}
      leave={clsx(styles.animations.microInteractionsAll)}
      enterTo='opacity-100'
      enterFrom='opacity-0'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div
        className={twMerge(
          overlay({ cursorWait }),
          zIndex?.overlays,
          className
        )}
        onClick={onClick}
      >
        {children}
      </div>
    </Transition>
  )
}
