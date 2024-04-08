
import { useCallback, useRef } from "react"

export const useDebounce = (callback: any, delay: number) => {
	const timer = useRef<ReturnType<typeof setTimeout> | null>()
	const debounceCallback = useCallback((str: string) => {
		if (timer.current) {
			clearTimeout(timer.current)
		}
		timer.current = setTimeout(() => {
			callback(str)
		}, delay)
	}, [callback, delay])
	return debounceCallback
}