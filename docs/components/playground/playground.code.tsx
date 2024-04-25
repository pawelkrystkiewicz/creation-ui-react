import { formatCode } from '@utils/format-code'
import clsx from 'clsx'
import { CopyBlock, vs2015 } from 'react-code-blocks'
import { classes } from './classes'
import { usePlayground } from './context/context'
import { getComponentCode } from './utils/get-component-code'
import { objectToPropsText } from './utils/object-to-props-text'

export const PlaygroundCode = ({ visible }) => {
  const {
    state: { children, ...state },
    name,
  } = usePlayground()

  if (!visible) return null

  const stateAsProps = objectToPropsText(state).join('\n')
  const code = getComponentCode(name, stateAsProps, children)

  return (
    <div className={clsx(classes.code)}>
      <CopyBlock
        text={formatCode(code)}
        language={'jsx'}
        showLineNumbers={true}
        theme={vs2015}
        customStyle={{
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          padding: '1rem',
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
      />
    </div>
  )
}
