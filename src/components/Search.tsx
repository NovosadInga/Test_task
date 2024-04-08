import React from 'react'
interface ISearchProps {
	search: string
	callback: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Search: React.FC<ISearchProps> = ({ search, callback }) => {
	return (
		<input
			className='rounded-lg h-[50px] px-4 border-solid border-slate-400 border'
			type='text'
			placeholder='Search by username'
			value={search}
			onChange={e => callback(e)}
		/>
	)
}
