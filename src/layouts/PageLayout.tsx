import React from 'react'
import { Helmet } from 'react-helmet-async';
import { Title } from '../components/ui/Title';
interface IPageLayoutProps {
	pageTitle: string,
	pageDescription: string,
	title: string,
	children?: React.ReactNode
}
export const PageLayout: React.FC<IPageLayoutProps> = ({
	pageTitle,
	pageDescription,
	title,
	children
}) => {
	return (
		<div>
			<Helmet>
				<meta name="description" content={pageDescription} />
				<title>{pageTitle}</title>
			</Helmet>
			<div>
				<Title>{title}</Title>
				{children}
			</div>
		</div>

	)
}
