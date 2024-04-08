import React from 'react';
import { Button } from './ui/Button';

interface IUserProps {
	id: number
	username: string;
	name: string;
	email: string;
}

export const User: React.FC<IUserProps> = ({
	id,
	username,
	name,
	email,
}) => {
	return (
		<div className='border-2 border-solid border-slate-700 px-4 py-2 rounded-lg shadow-md flex flex-wrap '>
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