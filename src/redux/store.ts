import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice/ticketsSlice'
import filtersReducer from './filtersSlice/filtersSlice'
import currencyReducer from './currencySlice/currencySlice'
import paginationReducer from './paginationSlice/PaginationSlice'

export const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		filters: filtersReducer,
		currency: currencyReducer,
		pagination: paginationReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch