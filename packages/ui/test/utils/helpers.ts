import type { StandardLonghandPropertiesHyphen } from 'csstype'

export const verifyComputedStyles = async (
  element: Element,
  rules: StandardLonghandPropertiesHyphen,
  debugMessage?: string,
) => {
  debugMessage && console.log(debugMessage)

  if (!element) {
    throw new Error('Element not found')
  }

  for (const [property, value] of Object.entries(rules)) {
    const actual = element.computedStyleMap().get(property)?.toString()
    console.log(property, actual, value)
    await expect(actual).toBe(value)
  }
}
