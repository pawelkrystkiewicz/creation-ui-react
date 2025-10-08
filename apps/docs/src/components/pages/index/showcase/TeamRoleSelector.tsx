'use client'
import {
  Select,
  SelectButton,
  Selected,
  SelectOption,
  SelectOptions,
} from '@creation-ui/react'
import { roles, type Role } from './TeamMembers'



interface RoleSelectorProps {
  value: Role
  disabled?: boolean
  onChange?: (role: Role) => void
  className?: string
}

export const RoleSelector = ({
  value,
  disabled,
  onChange,
  className,
}: RoleSelectorProps) => {
  return (
    <>
      <Select value={value} onChange={(value) => onChange?.(value as Role)} disabled={disabled}>
        <SelectButton className='w-28'>
          <Selected placeholder='Select role' />
        </SelectButton>
        <SelectOptions>
          {roles.map(role => (
            <SelectOption key={role} value={role}>
              {role}
            </SelectOption>
          ))}
        </SelectOptions>
      </Select>
    </>
  )
}
