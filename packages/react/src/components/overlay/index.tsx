import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { overlay } from './classes'
import type { OverlayProps } from './overlay.types'
import { Transition } from '@headlessui/react'
import { Fragment } from 'react'
import clsx from 'clsx'

const animation = ['transition-opacity', 'ease-in-out', 'duration-300']

export const Overlay = ({
  active,
  onClick,
  className,
  cursorWait,
  children,
}: OverlayProps) => {
  const { zIndex } = useTheme()

  return (
    <Transition
      show={!!active}
      as={Fragment}
      unmount={false}
      enter={clsx(animation)}
      leave={clsx(animation)}
      enterTo='opacity-100'
      enterFrom='opacity-0'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <div
        className={twMerge(
          overlay({ cursorWait }),
          zIndex?.overlays,
          className,
        )}
        onClick={onClick}
      >
        {children}
      </div>
    </Transition>
  )
}
