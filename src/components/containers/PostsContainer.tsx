import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetPostsQuery } from '../../store/api/testTaskApi';
import { PostsList } from '../Posts/PostsList';

export const PostsContainer = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userId = queryParams.get('userId') || ''
	const { data: posts = [], isError, isLoading } = useGetPostsQuery(userId)
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error fetching posts</div>;
	return (
		<PostsList posts={posts} />
	)
}
