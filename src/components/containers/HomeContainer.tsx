import React from 'react';
import { useGetUsersQuery } from '../../store/api/testTaskApi';
import { HomeContent } from './HomeContent';

export const HomeContainer = () => {
	const { data: users = [], isError, isLoading } = useGetUsersQuery()
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error fetching users</div>;
	return (
		<HomeContent users={users} />
	)
}
