'use client'

import { Playground } from '@/components/playground'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardStats,
  CardTitle,
} from '@creation-ui/react'
import { DocumentedProperty } from '@/models/system'
import type { FC } from 'react'
import { childrenProp, classNameProps } from './shared-props'
import { PeopleTag } from 'iconoir-react'

interface CardExampleProps {
  title: string
  description: string
  content: string
}

export const CardExample: FC<CardExampleProps> = ({
  title,
  content,
  description,
}) => (
  <>
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <PeopleTag />
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
    controls={[
      { name: 'title', type: 'string', defaultValue: 'Active users' },
      { name: 'content', type: 'string', defaultValue: '1,234' },
      {
        name: 'description',
        type: 'string',
        defaultValue: 'Updated 10mins ago',
      },
    ]}
    code={`
import { Card, CardContent, CardDescription, CardHeader, CardStats, CardTitle } from '@creation-ui/react'
import { PeopleTag } from 'iconoir-react'
import type { FC } from 'react'

interface CardExampleProps {
  title: string
  description: string
  content: string
}

export const CardExample: FC<CardExampleProps> = ({
  title,
  content,
  description,
}) => (
    <Card>
      <CardHeader>
        <CardTitle>{{title}}</CardTitle>
        <PeopleTag />
      </CardHeader>
      <CardContent>
        <CardStats>{{content}}</CardStats>
      </CardContent>
      <CardDescription>{{description}}</CardDescription>
    </Card>
)`}
  />
)

export const properties: DocumentedProperty[] = [childrenProp, classNameProps]
