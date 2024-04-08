import { useMemo } from "react"
import { IUser } from "../models/IUser"
import { TSort } from "../components/containers/HomeContent"

export const useSortUsers = (sortOrder: TSort, users: IUser[]) => {
	return useMemo(() => {
		return (sortOrder === 'none') ? users :
			users
				.slice()
				.sort((a, b) => sortOrder === 'asc' ? a.username.localeCompare(b.username) : b.username.localeCompare(a.username))
	}, [users, sortOrder]);
}