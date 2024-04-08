import React from 'react';
import { PageLayout } from './PageLayout'
import { AlbumsContainer } from '../components/containers/AlbumsContainer';

export const Albums = () => {
	return (
		<PageLayout
			pageTitle='Albums Page'
			pageDescription='description Albums Page'
			title='Albums Page'
		>
			<AlbumsContainer />
		</PageLayout>
	)
}
