import { Children, CSSProperties, ReactNode } from 'react'

export const _renderAvatarGroupSurplus = (count: number) => `+${count}`

export const getDetails = (
  children: ReactNode,
  limit: number | undefined,
  total: number,
  offset: number,
) => {
  const count = Children.count(children)

  // When total is provided with limit, surplus = total - limit (remaining users not shown)
  // When only limit is provided, surplus = count - limit (children exceeding limit)
  // When only total is provided, surplus = total - count
  const surplus =
    total && limit
      ? total - limit
      : limit
        ? count - limit
        : total
          ? total - count
          : 0

  return {
    surplusCount: Number(surplus),
    offset: {
      marginLeft: `${offset}%`,
    } as CSSProperties,
  }
}
