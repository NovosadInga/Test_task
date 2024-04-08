import React from 'react'
import { User } from './User'
import { IUser } from '../models/IUser'
interface IUsersListProps {
	users: IUser[]
}
export const UsersList: React.FC<IUsersListProps> = ({ users }) => {
	return (
		<div className='flex flex-col gap-2 my-4'>
			{users?.map(user => (
				<User key={user.id} id={user.id} username={user.username} name={user.name} email={user.email} />
			))}
		</div>
	)
}
