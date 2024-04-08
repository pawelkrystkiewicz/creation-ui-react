export const cssToArray = (classes: string): string[] =>
  classes
    .split(' ')
    .map(c => c.trim())
    .filter(Boolean)
