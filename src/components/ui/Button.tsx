import React from 'react'
import { Link } from 'react-router-dom'
interface IButton {
	url: string,
	variant?: 'light' | 'dark',
	children: string
}
export const Button: React.FC<IButton> = ({
	url,
	variant = 'light',
	children
}) => {
	return (
		<Link
			className='bg-slate-700 text-white font-bold rounded-lg h-[50px] min-w-[140px] p-2 border border-solid border-slate-700 inline-flex justify-center items-center hover:bg-slate-600 transition-colors'
			to={url}
		>
			{children}
		</Link>
	)
}

