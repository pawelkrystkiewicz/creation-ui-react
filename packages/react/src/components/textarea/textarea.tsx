import type { Ref } from 'react'
import { forwardRef } from 'react'
import { useTheme } from '../../theme'
import { InputBase } from '../input-base'
import type { TextAreaProps } from './textarea.types'
import { TextAreaView } from './textarea.view'

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref: Ref<HTMLTextAreaElement>) => {
    const { size: defaultSize } = useTheme()
    const { size = defaultSize, ...rest } = props

    return (
      <InputBase {...rest} size={size} type={'textarea'}>
        <TextAreaView {...rest} ref={ref} size={size} />
      </InputBase>
    )
  }
)

TextArea.displayName = 'TextArea'

export default TextArea
