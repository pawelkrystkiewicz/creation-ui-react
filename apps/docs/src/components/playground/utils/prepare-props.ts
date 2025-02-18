export const propsByKeys = (
  codeTemplates: string,
  keys: string[],
  values: Record<string, any>,
) => {
  return keys?.reduce((acc: string, key: string) => {
    const value = values?.[key]
    switch (true) {
      case typeof value === 'boolean':
        return acc.replace(`{{${key}}}`, value ? `{true}` : `{false}`);

      case !isNaN(value):
        return acc.replace(`{{${key}}}`, `{${value}}`);

      default:
        return acc.replace(`{{${key}}}`, `{${JSON.stringify(value)}}`);
    }
  }, codeTemplates)
}

export const plainProps = (
  codeTemplates: string,
  values: Record<string, any>,
) => {
  const keys = Object.keys(values)
  const hasChildren = keys.includes('children')

  const props = keys
    .map(key => {
      if (key === 'children') {
        return
      }

      const value = values[key]

      switch (typeof value) {
        case 'boolean':
          return value ? key : ''

        case 'number':
          return `${key}={${value}}`

        default:
          return `${key}={${JSON.stringify(value)}}`
      }
    })
    .filter(Boolean)

  let code = codeTemplates.replace('{{props}}', props.join('\n'))
  if (hasChildren) {
    code = code.replace('{{children}}', values.children)
  }
  return code
}
