import clsx from 'clsx'
import { Children, FC, cloneElement, isValidElement } from 'react'

import { Avatar } from './Avatar'

import { AvatarGroupProps } from './types'
import { _renderAvatarGroupSurplus, getDetails } from './utils'
import { AVATAR_GROUP_OFFSET } from './constants'

export const AvatarGroup: FC<AvatarGroupProps> = ({
  total = 0,
  limit,
  renderSurplus = _renderAvatarGroupSurplus,
  children,
  className,
  surplusClassName,
  stackingOffsetPercent: stackingOffsetPercent = AVATAR_GROUP_OFFSET,
  size = 40,
  variant,
}) => {
  const { surplusCount, offset } = getDetails(
    children,
    limit,
    total,
    stackingOffsetPercent,
  )

  return (
    <div className={clsx('flex', className)}>
      {Children.map(children, (child, index) => {
        if (limit && index >= limit) return null
        if (isValidElement(child)) {
          return (
            <div style={offset}>
              {cloneElement<any>(child, { size, variant })}
            </div>
          )
        }
        return null
      })}
      {surplusCount > 0 && (
        <div style={offset}>
          <Avatar size={size} className={surplusClassName} variant={variant}>
            <span>{renderSurplus?.(surplusCount)}</span>
          </Avatar>
        </div>
      )}
    </div>
  )
}
