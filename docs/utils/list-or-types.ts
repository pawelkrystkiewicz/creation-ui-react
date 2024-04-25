export const ListOrTypes = (types: any[]) => types.map(t => t).join(' | ')
export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)
