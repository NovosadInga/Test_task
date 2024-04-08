import React from 'react';
import { Button } from '../ui/Button';

interface IUserItemProps {
	id: number
	username: string;
	name: string;
	email: string;
}

export const UserItem: React.FC<IUserItemProps> = ({
	id,
	username,
	name,
	email,
}) => {
	return (
		<div className='border-2 border-solid border-slate-700 px-4 py-2 rounded-lg shadow-md flex flex-col gap-3  md:flex-row '>
			<div className='grow'>
				<strong className='text-lg '>{username}</strong>
				<div>- {name} ({email})</div>
			</div>
			<div className='flex gap-3 shrink-0'>
				<Button url={`/posts?userId=${id}`}> Posts </Button>
				<Button url={`/albums?userId=${id}`}> Albums </Button>
			</div>
		</div >
	)
};