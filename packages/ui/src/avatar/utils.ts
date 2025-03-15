import { Children, CSSProperties, ReactNode } from 'react'

export const _renderAvatarGroupSurplus = (count: number) => `+${count}`

export const getDetails = (
  children: ReactNode,
  limit: number | undefined,
  total: number,
  offset: number,
) => {
  const count = Children.count(children)

  const surplus = total ? total - count : limit ? count - limit : total - count

  return {
    surplusCount: Number(surplus),
    offset: {
      marginLeft: `${offset}%`,
    } as CSSProperties,
  }
}
