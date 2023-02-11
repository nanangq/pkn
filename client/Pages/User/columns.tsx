import { UserResponse } from '@server/modules/iam/user/infrastructure/user.response'
import { Tag } from 'antd'
import { ColumnsType } from 'antd/es/table'
import React from 'react'
import { RowActionButtons } from '../../Components/Molecules/RowActionButtons/RowActionButtons'
import { Role } from '../../Enums/Role.enum'
import { Route } from '../../Enums/Route'

export const usersColumns: ColumnsType<UserResponse> = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Role',
    key: 'role',
    render: (data: UserResponse) => {
      if (data.role == Role.Administrator)
        return <Tag color="blue">{data.role}</Tag>

      return <Tag color="green">{data.role}</Tag>
    },
  },
  {
    title: 'Phone Number',
    dataIndex: 'phoneNumber',
    key: 'phoneNumber',
  },
  {
    title: 'Action',
    key: 'action',
    render: (data: UserResponse) => {
      return (
        <RowActionButtons
          actions={[
            {
              type: 'view',
              href: `${Route.User}/${data.id}`,
              title: 'view',
            },
            {
              type: 'edit',
              title: 'edit',
              onClick: () => {
                alert('Tambah Fitur CRUD User?')
              },
            },
            {
              type: 'delete',
              title: 'delete',
              onClick: () => {
                alert('Tambah Fitur CRUD User?')
              },
            },
          ]}
        />
      )
    },
  },
]
