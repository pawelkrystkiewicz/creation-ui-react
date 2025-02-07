import clsx from 'clsx'
import { Loader } from '../loader'
import { Overlay } from '../overlay'
import type { LoadingOverlayProps } from './types'

export const LoadingOverlay = ({ cx, ...props }: LoadingOverlayProps) => {
  const { loaderColor = 'white', ...rest } = props

  return (
    <Overlay {...rest} cursorWait className={clsx(cx?.overlay)}>
      <Loader color={loaderColor} cx={cx?.loader} />
    </Overlay>
  )
}
