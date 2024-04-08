import React, { useState } from 'react'
import { useSearchUsers } from '../../hooks/useSearchUsers';
import { IUser } from '../../models/IUser';
import { Search } from '../Search';
import { Sort } from '../Sort';
import { UsersList } from '../UsersList';
import { useNavigate } from 'react-router-dom';
import { useHomeURLParams } from '../../hooks/useHomeURLParams';
interface IHomeContentProps {
	users: IUser[]
}
export type TSort = 'asc' | 'desc' | 'none'
export const HomeContent: React.FC<IHomeContentProps> = ({ users }) => {
	const { initialSearch, initialSort } = useHomeURLParams();
	const [sortOrder, setSortOrder] = useState<TSort>(initialSort);
	const [search, setSearch] = useState(initialSearch);
	const navigate = useNavigate();
	const handleSortChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSortOrder(e.target.value as TSort)
		navigate(`/?q=${search}&sort=${e.target.value}`)
	};
	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
		navigate(`/?q=${e.target.value}&sort=${sortOrder}`)
	};
	const filteredUsers = useSearchUsers(search, users)
	const sortedUsers = sortOrder === 'none' ? filteredUsers : filteredUsers.slice().sort((a, b) => {
		if (sortOrder === 'asc') {
			return a.username.localeCompare(b.username);
		} else {
			return b.username.localeCompare(a.username);
		}
	});
	return (
		<>
			<div className='flex flex-wrap align-center justify-between gap-3'>
				<Search search={search} callback={handleSearchChange} />
				<Sort sortOrder={sortOrder} callback={handleSortChange} />
			</div>
			<UsersList users={sortedUsers} />
		</>
	)
}
