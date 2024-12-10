import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SortState {
	criteria: string;
}

const initialState: SortState = {
	criteria: 'price', // По умолчанию сортировка по цене
};

const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		setSortCriteria(state, action: PayloadAction<string>) {
			state.criteria = action.payload;
		},
	},
});

export const { setSortCriteria } = sortSlice.actions;
export default sortSlice.reducer;