import { Dialog, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Fragment } from 'react'
import { twMerge } from 'tailwind-merge'
import { useTheme } from '../../theme'
import { Overlay } from '../overlay'
import { child, drawer, drawerAnimation } from './classes'
import type { DrawerProps } from './drawer.types'
import merge from 'lodash.merge'
import get from 'lodash.get'

const Drawer = ({ open, children, onOverlayClick, ...props }: DrawerProps) => {
  const {
    styles: { drawers },
    zIndex,
  } = useTheme()
  const { position = drawers?.position || 'right', onClose = () => {} } = props

  const cx = merge({}, props.cx, {
    width: get(props, 'cx.width', drawers?.widthClassNames ?? ''),
    height: get(props, 'cx.height', drawers?.heightClassNames ?? ''),
  })

  const finalSize = {
    right: cx.width,
    left: cx.width,
    top: cx.height,
    bottom: cx.height,
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
