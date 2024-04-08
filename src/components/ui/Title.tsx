import React from 'react'
type ITitleProps = {
	children: string;
};
export const Title: React.FC<ITitleProps> = ({ children }) => {
	return (
		<h1 className='text-[36px] font-bold my-5'>{children}</h1>
	)
}
