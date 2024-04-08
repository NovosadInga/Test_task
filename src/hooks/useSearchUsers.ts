import { useEffect, useMemo, useState } from "react"
import { IUser } from "../models/IUser"
import { useDebounce } from "./useDebounce"

export const useSearchUsers = (search: string, users: IUser[]) => {
	const [debounced, setDebounced] = useState('')
	const searchFetch = () => {
		setDebounced(search)
	}
	const debouncedSearch = useDebounce(searchFetch, 500);
	const debouncedFirstSearch = useDebounce(searchFetch, 0);
	useEffect(() => {
		debouncedFirstSearch(search)
	}, [])
	useEffect(() => {
		debouncedSearch(search)
	}, [search, debouncedSearch])
	const filteredUsers = useMemo(() => {
		return users.filter(user =>
			user.username.toLowerCase().includes(debounced.toLowerCase())
		)
	}, [debounced, users])
	return filteredUsers;
}