import React from 'react'
interface INotFoundProps {
	children: string
}
export const NotFoundBlock: React.FC<INotFoundProps> = ({ children }) => {
	return (
		<div className="text-[24px] font-bold py-5 ">{children}</div>
	)
}
