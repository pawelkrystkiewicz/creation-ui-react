'use client'
import { formatCode } from '@/utils/format-code'
import clsx from 'clsx'
import { useMemo, type FC } from 'react'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import { classes } from './classes'
import { usePlayground } from './context/context'

const DEFAULT_PROPS_KEYS = ['props']

export const PlaygroundCode: FC = () => {
  const { state, code, propsKeys = DEFAULT_PROPS_KEYS } = usePlayground()
  if (!code) {
    return null
  }
  const withProps = useMemo(() => {
    if (!code) return ''
    return propsKeys?.reduce((acc: string, key: string) => {
      const value = state?.[key]
      if (typeof value === 'boolean') {
        return acc.replace(`{{${key}}}`, value ? `{true}` : `{false}`)
      } else {
        return acc.replace(`{{${key}}}`, `{${JSON.stringify(value)}}`)
      }
    }, code)
  }, [code, propsKeys, state])

  return (
    <div className={clsx(classes.code)}>
      <CopyBlock
        text={formatCode(withProps)}
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
