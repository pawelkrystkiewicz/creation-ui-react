import { Transition } from '@headlessui/react'
import { Activity, type FC, Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { overlay } from './classes'
import type { OverlayProps } from './types'

export const Overlay: FC<OverlayProps> = ({
  active,
  onClick,
  className,
  cursorWait,
  children,
}) => {
  return (
    <Transition
      show={!!active}
      as={Fragment}
      enter={'micro-interactions'}
      leave={'micro-interactions'}
      enterTo='opacity-100'
      enterFrom='opacity-0'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
    >
      <Activity mode={active ? 'visible' : 'hidden'}>
        <div
          className={twMerge(overlay({ cursorWait }), className)}
          onClick={onClick}
        >
          {children}
        </div>
      </Activity>
    </Transition>
  )
}
