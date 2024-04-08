import { useLocation } from "react-router-dom";

export const useHomeURLParams = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const initialSearch = queryParams.get('q') || ''
	const initialSort = () => {
		const sort = queryParams.get('sort')
		if (sort === 'asc' || sort === 'desc') return sort
		return 'none'
	}
	return { initialSearch, initialSort }
}