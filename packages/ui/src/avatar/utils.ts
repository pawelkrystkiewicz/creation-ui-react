import { Children, CSSProperties, ReactNode } from 'react'

export const _renderAvatarGroupSurplus = (count: number) => `+${count}`

/**
 * Calculates the surplus count for avatar groups.
 * - When total and limit are provided: surplus = total - limit (remaining users not shown)
 * - When only limit is provided: surplus = count - limit (children exceeding limit)
 * - When only total is provided: surplus = total - count
 * - When neither is provided: surplus = 0
 *
 * @returns Non-negative surplus count
 */
export const calculateSurplus = (
  count: number,
  limit: number | undefined,
  total: number | undefined,
): number => {
  const hasTotal = typeof total === 'number'
  const hasLimit = typeof limit === 'number'

  let surplus: number

  if (hasTotal && hasLimit) {
    surplus = total - limit
  } else if (hasLimit) {
    surplus = count - limit
  } else if (hasTotal) {
    surplus = total - count
  } else {
    surplus = 0
  }

  return Math.max(surplus, 0)
}

export const getDetails = (
  children: ReactNode,
  limit: number | undefined,
  total: number | undefined,
  offset: number,
) => {
  const count = Children.count(children)

  return {
    surplusCount: calculateSurplus(count, limit, total),
    offset: {
      marginLeft: `${offset}%`,
    } as CSSProperties,
  }
}
