import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CurrencyState = 'RUB' | 'USD' | 'EUR'

interface CurrencyStateInterface {
	currency: CurrencyState
}

const initialState: CurrencyStateInterface = {
	currency: 'RUB', // Изначально валютой является рубль
}

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		setCurrency(state, action: PayloadAction<CurrencyState>) {
			state.currency = action.payload
		},
	},
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer