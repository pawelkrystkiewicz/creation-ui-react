import { Loader } from '../loader'
import { Overlay } from '../overlay'
import type { LoadingOverlayProps } from './loading-overlay.types'
import clsx from 'clsx'

export const LoadingOverlay = ({
                                 cx,
                                 ...props
                               }: LoadingOverlayProps) => {
  const { size, white, ...rest } = props
  return (
    <Overlay {...rest} cursorWait className={clsx(cx?.overlay)}>
      <Loader size={size} white className={clsx(cx?.loader)} />
    </Overlay>
  )
}
