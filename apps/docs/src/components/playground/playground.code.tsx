'use client'
import { formatCode } from '@/utils/format-code'
import clsx from 'clsx'
import { useMemo, type FC } from 'react'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { isEmpty } from 'lodash'

const DEFAULT_PROPS_KEYS = ['props']

export const PlaygroundCode: FC = () => {
  const { state, code, propsKeys = DEFAULT_PROPS_KEYS } = usePlayground()
  if (!code) {
    return null
  }

  const withProps = useMemo(() => {
    if (!code) return ''

    if (propsKeys || isEmpty(propsKeys)) {
      return formatCode(plainProps(code, state))
    }

    return formatCode(propsByKeys(code, propsKeys, state))
  }, [code, propsKeys, state])

  return (
    <div className={clsx(classes.code)}>
      <CopyBlock
        text={withProps}
        language={'tsx'}
        showLineNumbers={true}
        theme={vs2015}
        customStyle={{
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          padding: '1rem',
          borderTopLeftRadius: '0px',
          borderTopRightRadius: '0px',
        }}
      />
    </div>
  )
}

const propsByKeys = (
  codeTemplates: string,
  keys: string[],
  values: Record<string, any>,
) => {
  return keys?.reduce((acc: string, key: string) => {
    const value = values?.[key]
    if (typeof value === 'boolean') {
      return acc.replace(`{{${key}}}`, value ? `{true}` : `{false}`)
    } else {
      return acc.replace(`{{${key}}}`, `{${JSON.stringify(value)}}`)
    }
  }, codeTemplates)
}

const plainProps = (codeTemplates: string, values: Record<string, any>) => {
  const keys = Object.keys(values)
  const hasChildren = keys.includes('children')

  const props = keys
    .map(key => {
      if (key === 'children') {
        return
      }

      const value = values[key]
      if (typeof value === 'boolean') {
        return value ? key : ''
      }
      return `${key}={${JSON.stringify(value)}}`
    })
    .filter(Boolean)

  let code = codeTemplates.replace('{{props}}', props.join('\n'))
  if (hasChildren) {
    code = code.replace('{{children}}', values.children)
  }
  return code
}
