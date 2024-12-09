import { configureStore } from '@reduxjs/toolkit'
import ticketsReducer from './ticketsSlice/ticketsSlice'
import filtersReducer from './filtersSlice/filtersSlice'
import currencyReducer from './currencySlice/currencySlice'

export const store = configureStore({
	reducer: {
		tickets: ticketsReducer,
		filters: filtersReducer,
		currency: currencyReducer
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch