import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import dataTickets from '../../data/tickets.json'
import { TypeTickets } from '../../types/types.tickets'
export interface TicketsState {
	tickets: TypeTickets[]

}

const initialState: TicketsState = {
	tickets: dataTickets.tickets
}

export const ticketsSlice = createSlice({
	name: 'tickets',
	initialState,
	reducers: {
	},
})

export const { } = ticketsSlice.actions

export default ticketsSlice.reducer