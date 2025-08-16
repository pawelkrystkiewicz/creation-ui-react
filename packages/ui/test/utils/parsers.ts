const COLOR_TYPES = ['oklch', 'oklab', 'rgb', 'rgba'] as const

export type ColorType = (typeof COLOR_TYPES)[number]

interface ColorObject {
  type: ColorType
  values: [number, number, number]
  opacity: number
}

const float = (v: string): number => parseFloat(v)

export const parseColorString = (color?: string): ColorObject => {
  if (!color) {
    throw new Error('Color not provided')
  }
  const type = color.split('(')[0] as ColorType

  if (!COLOR_TYPES.includes(type)) {
    throw new Error(`Invalid color type: ${type}`)
  }

  // extract all values in braces
  // expect possibility for opacity divider /0.1
  // oklab(0.6048 -0.0479284 -0.211128 / 0.1)

  if (type === 'rgba') {
    const [first, second, third, opacity] = color
      .split('(')[1]
      .split(')')[0]
      .split(' ')

    return {
      type,
      values: [first, second, third].map(float) as [number, number, number],
      opacity: float(opacity),
    }
  }

  const [first, second, _third] = color.split('(')[1].split(')')[0].split(' ')
  const [third, opacity = '1'] = _third.split('/').map(e => e.trim())

  return {
    type,
    values: [first, second, third].map(float) as [number, number, number],
    opacity: float(opacity),
  }
}
