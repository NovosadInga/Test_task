import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser } from '../../models/IUser'
import { IPost } from '../../models/IPost'
import { IAlbum } from '../../models/IAlbum'

export const testTaskApi = createApi({
	reducerPath: 'testTaskApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
	endpoints: (builder) => ({
		getUsers: builder.query<IUser[], void>({
			query: () => `/users`,
		}),
		getPosts: builder.query<IPost[], string>({
			query: (userId) => `/posts?userId=${userId}`,
		}),
		getAlbums: builder.query<IAlbum[], string>({
			query: (userId) => `/albums?userId=${userId}`,
		}),
	}),
})
export const { useGetUsersQuery, useGetPostsQuery, useGetAlbumsQuery } = testTaskApi