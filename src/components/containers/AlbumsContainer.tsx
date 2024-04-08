
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetAlbumsQuery } from '../../store/api/testTaskApi';
import { AlbumsList } from '../Albums/AlbumsList';
export const AlbumsContainer = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userId = queryParams.get('userId') || ''
	const { data: albums = [], isError, isLoading } = useGetAlbumsQuery(userId)

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error fetching albums</div>;
	return (
		<AlbumsList albums={albums} />
	)
}
