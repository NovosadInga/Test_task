import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { testTaskApi } from './api/testTaskApi'

export const store = configureStore({
	reducer: {
		[testTaskApi.reducerPath]: testTaskApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(testTaskApi.middleware),
})
setupListeners(store.dispatch)