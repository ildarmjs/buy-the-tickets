import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice/ticketsSlice'
import filtersReducer from './filtersSlice/filtersSlice'

export const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		filters: filtersReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch