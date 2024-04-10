export const objectToPropsText = (state: any): string[] =>
  Object.entries(state).flatMap(([key, value]) => {
    if (typeof value === 'boolean') {
      return value ? `${key}` : ''
    } else {
      return `${key}={${JSON.stringify(value)}}`
    }
  })
