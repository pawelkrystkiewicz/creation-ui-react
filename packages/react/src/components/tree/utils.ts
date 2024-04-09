import { BranchType, RawElement, TreeType } from './types'
import { MIN_ITEM_PADDING, TREE_OFFSET_MULTIPLIER } from './constants'

export const buildTree = (entries: RawElement[]): TreeType => {
  const entryMap = entries.reduce((acc, entry: BranchType) => {
    acc[entry.id] = { ...entry, children: [] }
    return acc
  }, {} as Record<string, BranchType>)

  entries.forEach(entry => {
    if (entry.parentId) {
      const parentBranch = entryMap[entry.parentId]
      if (parentBranch) {
        const e = entryMap[entry.id]
        e && parentBranch?.children?.push(e)
      }
    }
  })

  return Object.values(entryMap).filter(branch => !branch.parentId)
}

export const _getItemOffset = (level: number) =>
  level > 0 ? level * TREE_OFFSET_MULTIPLIER : MIN_ITEM_PADDING
