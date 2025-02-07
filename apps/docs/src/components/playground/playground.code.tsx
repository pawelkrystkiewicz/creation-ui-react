'use client'
import { formatCode } from '@/utils/format-code'
import clsx from 'clsx'
import { isEmpty } from 'lodash'
import { useEffect, useState, type FC } from 'react'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { plainProps, propsByKeys } from './utils/prepare-props'

export const PlaygroundCode: FC = () => {
  const [formattedCode, setFormattedCode] = useState<string>('')

  const { state, code, propsKeys } = usePlayground()
  if (!code) {
    return null
  }

  useEffect(() => {
    let _code = ''

    if (propsKeys && !isEmpty(propsKeys)) {
      _code = propsByKeys(code, propsKeys, state)
    } else {
      _code = plainProps(code, state)
    }

    formatCode(_code).then(setFormattedCode)
  }, [code, propsKeys, state])

  return (
    <div className={clsx(classes.code)}>
      <CopyBlock
        text={formattedCode}
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
