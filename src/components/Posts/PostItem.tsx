import React from 'react';

interface IPostItemProps {
	id: number
	title: string;
	body: string;

}

export const PostItem: React.FC<IPostItemProps> = ({
	id,
	title,
	body
}) => {
	return (
		<div className='border-2 border-solid border-slate-700 px-4 py-2 rounded-lg shadow-md'>
			<div className='grow'>
				<strong className='text-lg '>Post {id}</strong>
				<h3 className='text-lg font-bold'>{title}</h3>
				<div>{body}</div>
			</div>
		</div>
	)
};