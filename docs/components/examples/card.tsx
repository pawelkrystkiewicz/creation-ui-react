import Icon from '@components/icon'
import { Playground } from '@components/playground'
import { Card, CardContent, CardDescription, CardHeader, CardStats, CardTitle } from '@creation-ui/react'
import { mdiAccount } from '@mdi/js'
import { DocumentedProperty } from 'models/system'
import type { FC } from 'react'
import { childrenProp, classNameProps } from './shared-props'

interface CardExampleProps {
  title: string
  description: string
  content: string
}

export const CardExample: FC<CardExampleProps> = ({ title, content, description }) => (
  <>
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <Icon path={mdiAccount} className='block flex-shrink-0' />
      </CardHeader>
      <CardContent>
        <CardStats>{content}</CardStats>
      </CardContent>
      <CardDescription>{description}</CardDescription>
    </Card>
  </>
)

export const CardPlayground = () => (
  <Playground
    component={CardExample}
    showCode={false}
    name='CardExample'
    controls={[
      { name: 'title', type: 'string', defaultValue: 'Active users' },
      { name: 'content', type: 'string', defaultValue: '1,234' },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Updated 10mins ago',
      },
    ]}
  />
)

export const properties: DocumentedProperty[] = [childrenProp, classNameProps]
