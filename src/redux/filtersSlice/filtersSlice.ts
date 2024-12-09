import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeFilters } from '../../types/types.filters'

const initialState: TypeFilters = {
	all: true,
	noStops: false,
	oneStop: false,
	twoStops: false,
	threeStops: false,
}

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilter(state, action: PayloadAction<string>) {
			const filter = action.payload
			if (filter === 'all') {
				state.all = true
				state.noStops = false
				state.oneStop = false
				state.twoStops = false
				state.threeStops = false
			} else {
				if (state[filter as keyof TypeFilters]) {
					state[filter as keyof TypeFilters] = false
					if (
						!state.noStops &&
						!state.oneStop &&
						!state.twoStops &&
						!state.threeStops
					) {
						state.all = true
					}
				} else {
					state.all = false
					state[filter as keyof TypeFilters] = true
				}
			}
		},
	},
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
