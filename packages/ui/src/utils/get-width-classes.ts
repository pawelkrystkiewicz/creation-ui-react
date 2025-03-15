export const getWidthClasses = (classes: string[]) =>
  // pick only tailwind width classes
  classes?.filter(c => /^w-[\w-[\]]+$/.test(c))
