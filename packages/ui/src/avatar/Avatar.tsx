import { forwardRef, useMemo } from 'react'
import { pick } from '../utils'
import { avatarStyles } from './classes'
import { AVATAR_CONTAINER_PROPS } from './constants'
import type AvatarProps from './types'

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { variant = 'circle', children, className, size = 40, ...rest } = props

  const style = useMemo(() => {
    const containerStyle = pick(props.style, AVATAR_CONTAINER_PROPS as any)
    return {
      //
      width: Number(size),
      height: Number(size),
      ...containerStyle,
    }
  }, [size, props.style])

  return (
    <div
      ref={ref}
      className={avatarStyles.img({ variant, container: true, className })}
      style={style}
    >
      {!children ? (
        <img
          {...rest}
          className={avatarStyles.img({ variant })}
          style={{ width: style.width, height: style.height }}
        />
      ) : (
        children
      )}
    </div>
  )
})
