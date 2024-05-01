import { Container } from '@components/container'
import { Playground } from '@components/playground'
import {
  Callout,
  CalloutProps,
  Description,
  ELEMENT_VARIANTS,
  For,
  H5,
  Show,
  useTheme,
  type ElementVariant,
} from '@creation-ui/react'
import { Flex } from '@creation-ui/react/dist/components/flex/flex'
import clsx from 'clsx'
import { DocumentedProperty } from 'models/system'
import { colorControl } from './shared-playground-controls'
import { childrenProp, colorProp, variantProp } from './shared-props'

interface CalloutExampleProps extends Omit<CalloutProps, 'children' | 'variant'> {
  title?: string
  content?: string
}

export const Example = ({ title, content, ...props }: CalloutExampleProps) => {
  const { styles } = useTheme()

  return (
    <Container variant='column'>
      <For each={[...ELEMENT_VARIANTS]}>
        {(variant: ElementVariant) => (
          <Callout {...props} variant={variant} key={variant} className={clsx(styles?.animations.microInteractionsAll)}>
            <Flex column>
              <Show when={!!title}>
                <H5>{title}</H5>
              </Show>
              <Description className='!text-inherit'>{content}</Description>
            </Flex>
          </Callout>
        )}
      </For>
    </Container>
  )
}

export const CalloutPlayground = () => (
  <Playground
    component={Example}
    name='Callout'
    showCode={false}
    controls={[
      colorControl,
      {
        name: 'title',
        type: 'string',
        defaultValue: 'Action completed',
      },
      {
        name: 'content',
        type: 'string',
        defaultValue: 'Your request has been processed successfully.',
      },
    ]}
  />
)

export const properties: DocumentedProperty[] = [childrenProp, colorProp, variantProp]
