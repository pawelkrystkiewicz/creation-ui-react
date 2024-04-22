import { Container } from '@components/container'
import { Playground } from '@components/playground'
import { Callout, CalloutProps, Description, ELEMENT_VARIANTS, For, H5, Show, useTheme } from '@creation-ui/react'
import { Flex } from '@creation-ui/react/dist/components/flex/flex'
import { DocumentedProperty } from 'models/system'
import { statusControlWithUndef } from './shared-playground-controls'
import { childrenProp, statusProp, variantProp } from './shared-props'

interface CalloutExampleProps extends Omit<CalloutProps, 'children' | 'variant'> {
  title?: string
  content?: string
}

export const Example = ({ title, content, ...props }: CalloutExampleProps) => {
  const { styles } = useTheme()

  return (
    <Container variant='column'>
      <For each={ELEMENT_VARIANTS}>
        {variant => (
          <Callout {...props} variant={variant} key={variant} className={styles.animations.microInteractions}>
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
      statusControlWithUndef,
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

export const properties: DocumentedProperty[] = [childrenProp, statusProp, variantProp]
