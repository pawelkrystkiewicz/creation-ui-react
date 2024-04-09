import { forwardRef, useMemo } from 'react'
import { Show, ShowFirstMatching } from '../show'
import type AvatarProps from './avatar.types'
import { avatar } from './classes'
import { AVATAR_CONTAINER_PROPS, AVATAR_SIZE_MAP } from './constants'
import { pick } from '../utils'
import { useTheme } from '../../theme'

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const theme = useTheme()
  const {
    variant = 'circle',
    children,
    className,
    size: userSize = theme.size ?? 'md',
    ...rest
  } = props

  const { style } = useMemo(() => {
    const size =
      typeof userSize === 'number' ? userSize : AVATAR_SIZE_MAP[userSize]
    //@ts-ignore
    const containerStyle = pick(props.style, AVATAR_CONTAINER_PROPS)

    return {
      size,
      style: { width: size, height: size, ...containerStyle },
    }
  }, [userSize, props.style])

  return (
    <div
      ref={ref}
      className={avatar.img({ variant, container: true, className })}
      style={style}
    >
      <ShowFirstMatching>
        <Show when={!children}>
          <img
            {...rest}
            className={avatar.img({ variant })}
            style={{ width: style.width, height: style.height }}
          />
        </Show>
        <Show when={!!children}>{children}</Show>
      </ShowFirstMatching>
    </div>
  )
})



