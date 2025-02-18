import clsx from 'clsx'
import {
  CSSProperties,
  Children,
  FC,
  cloneElement,
  isValidElement,
  useMemo,
} from 'react'

import { Avatar } from './Avatar'
import { AVATAR_GROUP_OFFSET_MOD } from './constants'
import { AvatarGroupProps } from './types'

const _renderAvatarGroupSurplus = (count: number) => (
  <span>+{count}</span>
)

export const AvatarGroup: FC<AvatarGroupProps> = ({
  total = 0,
  max,
  renderSurplus = _renderAvatarGroupSurplus,
  children,
  className,
  surplusClassName,
  offsetMultiplier = AVATAR_GROUP_OFFSET_MOD,
  size = 40,
}) => {


  const { surplusCount, offset } = useMemo(() => {
    const count = Children.count(children)
    const surplus = max ? count - max : total - count

    return {
      childrenCount: count,
      surplusCount: surplus,
      offset: {
        marginLeft: size * offsetMultiplier,
      } as CSSProperties,
    }
  }, [children, max, total])

  return (
    <div className={clsx('flex', className)}>
      {Children.map(children, (child, index) => {
        if (max && index >= max) return null
        if (isValidElement(child)) {
          return <div style={offset}>{cloneElement<any>(child, { size })}</div>
        }
        return null
      })}
      {surplusCount > 0 && (
        <div style={offset}>
          <Avatar size={size} className={surplusClassName}>
            {renderSurplus?.(surplusCount)}
          </Avatar>
        </div>
      )}
    </div>
  )
}
