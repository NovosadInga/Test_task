import React from 'react';
import { useLocation } from 'react-router-dom';
import { useGetPostsQuery } from '../../store/api/testTaskApi';

export const PostsContainer = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const userId = queryParams.get('userId') || ''
	const { data: posts = [], isError, isLoading } = useGetPostsQuery(userId)
	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error fetching users</div>;
	return (
		<div className='flex flex-wrap align-center justify-between gap-3'>
			<div className='flex flex-col gap-2 my-4'>
				{posts?.map(post => (
					<div key={post.id} className='border-2 border-solid border-slate-700 px-4 py-2 rounded-lg shadow-md flex flex-wrap '>
						<div className='grow'>
							<strong className='text-lg '>Post {post.id}</strong>
							<h3 className='text-lg font-bold'>{post.title}</h3>
							<div>{post.body}</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
