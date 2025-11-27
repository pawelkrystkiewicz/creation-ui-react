'use client'
import { FEMALE_1, FEMALE_2, MALE_1, MALE_2 } from '@/examples/avatar'
import {
  Avatar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Flex,
} from '@creation-ui/react'
import clsx from 'clsx'
import { useState } from 'react'
import { RoleSelector } from './TeamRoleSelector'
import { ShowcaseCardProps } from './types'

export enum Role {
  Owner = 'Owner',
  Developer = 'Developer',
  Designer = 'Designer',
  Manager = 'Manager',
  Tester = 'Tester',
}

export const roles = Object.values(Role)

const memember = [
  {
    name: 'Cecil Pragma',
    image: MALE_1,
    role: Role.Owner,
    email: 'c.pragma@acme.com',
    disabled: true,
  },
  {
    name: 'Jane Foster',
    image: FEMALE_1,
    role: Role.Designer,
    email: 'j.foster@acme.com',
  },
  {
    name: 'Alan Menken',
    image: MALE_2,
    role: Role.Manager,
    email: 'a.menken@acme.com',
  },
  {
    name: 'Xiaoyu Li',
    image: FEMALE_2,
    role: Role.Developer,
    email: 'x.li@acme.com',
  },
]

const initials = (name: string) =>
  name
    .split(' ')
    .map(name => name[0])
    .join('')

export const TeamMembers = ({ className }: ShowcaseCardProps) => {
  const [memberRoles, setMemberRoles] = useState<Record<string, Role>>(() => {
    const initialRoles: Record<string, Role> = {}
    memember.forEach(member => {
      initialRoles[member.name] = member.role
    })
    return initialRoles
  })

  const handleRoleChange = (memberName: string) => (role: Role) => {
    setMemberRoles(prev => ({
      ...prev,
      [memberName]: role,
    }))
  }

  return (
    <Card className={clsx('flex flex-col gap-4', className)}>
      <CardHeader className='flex-col items-start gap-1'>
        <CardTitle>Team Members</CardTitle>
        <CardDescription>
          Manage your team members and their roles
        </CardDescription>
      </CardHeader>
      <CardContent className='flex flex-col gap-4'>
        {memember.map(member => (
          <div
            key={member.name}
            className='grid grid-cols-[40px_minmax(50px,150px)_auto] gap-4'
          >
            <Avatar src={member.image}>
              {/* missing image fallback */}
              {!member.image && initials(member.name)}
            </Avatar>
            <Flex column gapY={1} grow>
              <p
                title={member.name}
                className='text-sm font-bold truncate cursor-default'
              >
                {member.name}
              </p>
              <p
                title={member.email}
                className='text-sm text-muted-foreground truncate cursor-default'
              >
                {member.email}
              </p>
            </Flex>
            <RoleSelector
              value={memberRoles[member.name]}
              disabled={member.disabled}
              onChange={handleRoleChange(member.name)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
