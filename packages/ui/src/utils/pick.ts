export const pick = <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> =>
  keys.reduce(
    (acc, key) => {
      if (obj?.hasOwnProperty(key)) {
        acc[key] = obj[key]
      }
      return acc
    },
    {} as Pick<T, K>,
  )
