import { Transition } from '@headlessui/react'
import { Activity, type FC, Fragment, version as reactVersion } from 'react'
import { twMerge } from 'tailwind-merge'
import { overlay } from './classes'
import type { OverlayProps } from './types'

console.log('Activity', typeof Activity) //Activity undefined
console.log('React version', reactVersion) //React version 19.2.0-canary-0bdb9206-20250818

export const Overlay: FC<OverlayProps> = ({
  active,
  onClick,
  className,
  cursorWait,
  children,
}) => {
  return (
    <Activity mode={active ? 'visible' : 'hidden'}>
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
        <div
          className={twMerge(overlay({ cursorWait }), className)}
          onClick={onClick}
        >
          {children}
        </div>
      </Transition>
    </Activity>
  )
}
