import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TypeCurrency } from '../../types/types.currency'



interface CurrencyStateInterface {
	currency: TypeCurrency
}

const initialState: CurrencyStateInterface = {
	currency: 'RUB', // Изначально валютой является рубль
}

const currencySlice = createSlice({
	name: 'currency',
	initialState,
	reducers: {
		setCurrency(state, action: PayloadAction<TypeCurrency>) {
			state.currency = action.payload
		},
	},
})

export const { setCurrency } = currencySlice.actions
export default currencySlice.reducer