'use client'
import {
  Avatar,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Flex,
  Select,
} from '@creation-ui/react'
import { MALE_1, FEMALE_1, MALE_2, FEMALE_2 } from '@/examples/avatar'
import { ShowcaseCardProps } from './types'
import clsx from 'clsx'
enum Role {
  Owner = 'Owner',
  Developer = 'Developer',
  Designer = 'Designer',
  Manager = 'Manager',
  Tester = 'Tester',
}

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

const RoleSelector = ({
  value,
  disabled,
}: {
  value: Role
  disabled?: boolean
}) => {
  return (
    <div className='flex gap-4 h-fit flex-grow-0'>
      <Select value={value} disabled={disabled}>
        {Object.values(Role).map(role => (
          <option key={role} value={role}>
            {role}
          </option>
        ))}
      </Select>
    </div>
  )
}

export const TeamMembers = ({ className }: ShowcaseCardProps) => {
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
          <Flex key={member.name} gapX={4}>
            <Avatar src={member.image}>
              {/* uncomment this to show the initials
            {member.name
              .split(' ')
              .map(name => name[0])
              .join('')} */}
            </Avatar>
            <Flex column gapY={1} grow>
              <p className='text-sm font-bold'>{member.name}</p>
              <p className='text-sm text-text-secondary'>{member.email}</p>
            </Flex>
            <RoleSelector value={member.role} disabled={member.disabled} />
          </Flex>
        ))}
      </CardContent>
    </Card>
  )
}
