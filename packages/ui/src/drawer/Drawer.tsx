import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { Overlay } from '../overlay'
import { drawerAnimation, drawerChildClasses, drawerStyles } from './classes'
import type { DrawerProps } from './types'

export const Drawer = ({
  open,
  children,
  onOverlayClick,
  ...props
}: DrawerProps) => {
  const { position = 'right', onClose = () => {}, cx } = props

  const verticalSize = cx?.height ?? 'h-full'
  const horizontalSize = cx?.width ?? 'w-1/3'

  const finalSize = {
    right: horizontalSize,
    left: horizontalSize,
    top: verticalSize,
    bottom: verticalSize,
  }[position]

  return (
    <>
      <Overlay className={'fixed'} active={open} onClick={onOverlayClick} />
      <>
        <Transition
          show={open}
          as={Fragment}
          enter={clsx(drawerAnimation.animation)}
          leave={clsx(drawerAnimation.animation)}
          enterFrom={clsx(drawerAnimation.enter[position])}
          enterTo={clsx(drawerAnimation.leave[position])}
          leaveFrom={clsx(drawerAnimation.leave[position])}
          leaveTo={clsx(drawerAnimation.enter[position])}
        >
          <Dialog
            onClose={onClose}
            className={twMerge(
              drawerStyles({
                className: [finalSize, cx?.container?.outer],
                position,
              }),
            )}
          >
            <div
              className={clsx(
                drawerChildClasses,
                'h-full',
                cx?.container?.inner,
              )}
            >
              {children}
            </div>
          </Dialog>
        </Transition>
      </>
    </>
  )
}
