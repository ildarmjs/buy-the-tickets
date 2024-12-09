import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FiltersState {
	all: boolean
	noStops: boolean
	oneStop: boolean
	twoStops: boolean
	threeStops: boolean
}

const initialState: FiltersState = {
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
				// Включаем "Все", если он был снят
				state.all = true
				state.noStops = false
				state.oneStop = false
				state.twoStops = false
				state.threeStops = false
			} else {
				// Если снимаем фильтр, нужно проверить, не пустой ли он
				if (state[filter as keyof FiltersState]) {
					state[filter as keyof FiltersState] = false
					// Если все фильтры сняты, включаем "Все"
					if (
						!state.noStops &&
						!state.oneStop &&
						!state.twoStops &&
						!state.threeStops
					) {
						state.all = true
					}
				} else {
					// Если фильтр не был активен, ставим его активным
					state.all = false
					state[filter as keyof FiltersState] = true
				}
			}
		},
	},
})

export const { setFilter } = filtersSlice.actions
export default filtersSlice.reducer
