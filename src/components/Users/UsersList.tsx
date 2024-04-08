import React from 'react'
import { UserItem } from './UserItem'
import { IUser } from '../../models/IUser'
import { NotFoundBlock } from '../ui/NotFoundBlock'
interface IUsersListProps {
	users: IUser[]
}
export const UsersList: React.FC<IUsersListProps> = ({ users }) => {
	if (!users.length) return <NotFoundBlock>Users not found</NotFoundBlock>
	return (
		<div className='flex flex-col gap-2 my-5'>
			{users?.map(user => (
				<UserItem key={user.id} {...user} />
			))}
		</div>
	)
}
