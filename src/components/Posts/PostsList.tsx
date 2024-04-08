import React from 'react'

import { NotFoundBlock } from '../ui/NotFoundBlock'
import { IPost } from '../../models/IPost'
import { PostItem } from './PostItem'
interface IPostsListProps {
	posts: IPost[]
}
export const PostsList: React.FC<IPostsListProps> = ({ posts }) => {
	if (!posts.length) return <NotFoundBlock>Posts not found</NotFoundBlock>
	return (
		<div className='flex flex-col gap-2 my-4'>
			{posts?.map(post => <PostItem key={post.id} {...post} />)}
		</div>
	)
}
