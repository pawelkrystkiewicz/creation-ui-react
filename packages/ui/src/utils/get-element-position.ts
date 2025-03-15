export const getElementPosition = (array: unknown[], index: number) => {
  switch (true) {
    case index === 0:
      return 'first'
    case index === array?.length - 1:
      return 'last'
    default:
      return 'middle'
  }
}
