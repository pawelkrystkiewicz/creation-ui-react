import { Loader } from '../loader'
import { Overlay } from '../overlay/overlay'
import type { LoadingOverlayProps } from './types'
import clsx from 'clsx'

export const LoadingOverlay = ({ cx, ...props }: LoadingOverlayProps) => {
  const { size, loaderColor, ...rest } = props

  return (
    <Overlay {...rest} cursorWait className={clsx(cx?.overlay)}>
      <Loader size={size} color={loaderColor} cx={cx.loader} />
    </Overlay>
  )
}
