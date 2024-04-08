import React from 'react';
import { PostsContainer } from '../components/containers/PostsContainer';
import { PageLayout } from './PageLayout'
export const Posts = () => {
	return (
		<PageLayout
			pageTitle='Posts Page'
			pageDescription='description Posts Page'
			title='Posts'
		>
			<PostsContainer />
		</PageLayout>
	)
}
