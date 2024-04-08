import React from 'react';
import { PageLayout } from './PageLayout';
import { HomeContainer } from '../components/containers/HomeContainer';

export const Home = () => {
	return (
		<PageLayout
			pageTitle='Home Page'
			pageDescription='description Home Page'
			title='Users List'
		>
			<HomeContainer />
		</PageLayout>

	);
}

