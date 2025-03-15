'use client'
import { formatCode } from '@/utils/format-code'
import { LoadingOverlay } from '@creation-ui/react'
import clsx from 'clsx'
import { useEffect, useState, type FC } from 'react'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { assignPropsValues } from './utils/prepare-props'

export const PlaygroundCode: FC = () => {
  const [formattedCode, setFormattedCode] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)

  const { state, code } = usePlayground()

  if (!code) {
    return null
  }

  useEffect(() => {
    setLoading(true)
    const _code = assignPropsValues(code, state)

    formatCode(_code)
      .then(setFormattedCode)
      .finally(() => setLoading(false))
  }, [code, state])

  return (
    <div className={clsx(classes.code, 'relative')}>
      <LoadingOverlay active={loading} />
      {formattedCode && (
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
      )}
    </div>
  )
}
