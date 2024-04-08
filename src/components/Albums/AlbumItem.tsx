import React from 'react';

interface IAlbumItemProps {
	id: number
	title: string;
}

export const AlbumItem: React.FC<IAlbumItemProps> = ({
	id,
	title

}) => {
	return (
		<div className='border-2 border-solid border-slate-700 px-4 py-2 rounded-lg shadow-md'>
			<div className='grow'>
				<strong className='text-lg '>Album {id}</strong>
				<h3 className='text-lg'>{title}</h3>
			</div>
		</div>
	)
};