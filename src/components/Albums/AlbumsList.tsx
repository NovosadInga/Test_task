import React from 'react'

import { NotFoundBlock } from '../ui/NotFoundBlock'
import { IAlbum } from '../../models/IAlbum'
import { AlbumItem } from './AlbumItem'
interface IAlbumsListProps {
	albums: IAlbum[]
}
export const AlbumsList: React.FC<IAlbumsListProps> = ({ albums }) => {
	if (!albums.length) return <NotFoundBlock>Albums not found</NotFoundBlock>
	return (
		<div className='flex flex-col gap-2 my-5'>
			{albums?.map(album => <AlbumItem key={album.id} {...album} />)}
		</div>
	)
}
