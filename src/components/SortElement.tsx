import React from 'react'
interface ISortElementProps {
	value: string,
	sortOrder: string,
	children: string,
	callback: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export const SortElement: React.FC<ISortElementProps> = ({
	value,
	sortOrder,
	children,
	callback

}) => {
	return (
		<label className='flex gap-2 cursor-pointer'>
			<input
				type="radio"
				value={value}
				checked={sortOrder === value}
				onChange={e => callback(e)}
			/>
			{children}
		</label>
	)
}
