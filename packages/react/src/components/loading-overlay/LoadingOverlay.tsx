import { Loader } from '../loader'
import { Overlay } from '../overlay'
import { ElementSize } from '../../types'
import type { LoaderProps } from '../loader/loader.types'
import type { OverlayProps } from '../overlay/overlay.types'

export interface LoadingOverlayProps extends LoaderProps, OverlayProps {
  size?: ElementSize
}

export const LoadingOverlay = ({
  className,
  ...props
}: LoadingOverlayProps) => {
  const { size, white, ...rest } = props
  return (
    <Overlay {...rest} cursorWait>
      <Loader size={size} white={white} active={props.active} />
    </Overlay>
  )
}
