import React from 'react'
import { SortElement } from './SortElement'
import { TSort } from './containers/HomeContent'

interface ISortProps {
	sortOrder: TSort,
	callback: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const Sort: React.FC<ISortProps> = ({
	sortOrder,
	callback
}) => {
	return (
		<div >
			<span>Sort: </span>
			<div className='flex gap-4'>
				<SortElement value="none" sortOrder={sortOrder} callback={callback}>None</SortElement>
				<SortElement value="asc" sortOrder={sortOrder} callback={callback}>Ascending</SortElement>
				<SortElement value="desc" sortOrder={sortOrder} callback={callback}>Descending</SortElement>
			</div>
		</div>
	)
}
