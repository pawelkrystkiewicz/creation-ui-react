import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import get from 'lodash.get'
import merge from 'lodash.merge'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { Overlay } from '../overlay/overlay'
import { child, drawer, drawerAnimation } from './classes'
import type { DrawerProps } from './drawer.types'

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const {
    styles: { drawers },
    zIndex,
  } = useTheme()
  const { position = drawers?.position || 'right', onClose = () => {} } = props

  const cx = merge({}, props.cx, {
    width: get(props, 'cx.width', drawers?.width ?? ''),
    height: get(props, 'cx.height', drawers?.height ?? ''),
  })

  const verticalSize = cx.height
  const horizontalSize = cx.width

  const finalSize = {
    right: horizontalSize,
    left: horizontalSize,
    top: verticalSize,
    bottom: verticalSize,
  }[position]

  return (
    <>
      <Overlay className={'!fixed'} active={open} onClick={onOverlayClick} />
      <Transition
        show={open}
        as={Fragment}
        unmount={false}
        enter={clsx(drawerAnimation.animation)}
        leave={clsx(drawerAnimation.animation)}
        enterFrom={clsx(drawerAnimation.enter[position])}
        enterTo={clsx(drawerAnimation.leave[position])}
        leaveFrom={clsx(drawerAnimation.leave[position])}
        leaveTo={clsx(drawerAnimation.enter[position])}
      >
        <Dialog
          unmount={false}
          // @ts-ignore
          onClose={onClose}
          className={twMerge(
            drawer({
              className: [zIndex?.modals, finalSize, cx?.container?.outer],
              position,
            })
          )}
        >
          <div className={clsx(child, 'h-full', cx?.container?.inner)}>
            {children}
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Drawer
