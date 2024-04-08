
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetAlbumsQuery } from '../../store/api/testTaskApi';
export const AlbumsContainer = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userId = queryParams.get('userId') || ''
	const { data: albums = [], isError, isLoading } = useGetAlbumsQuery(userId)

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error fetching users</div>;
	return (
		<div className='flex flex-wrap align-center justify-between gap-3'>
			<div className='flex flex-col gap-2 my-4 w-full'>
				{albums?.map(album => (
					<div key={album.id} className='border-2 border-solid border-slate-700 px-4 py-2 rounded-lg shadow-md flex flex-wrap '>
						<div className='grow'>
							<strong className='text-lg '>Album {album.id}</strong>
							<h3 className='text-lg font-bold'>{album.title}</h3>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
