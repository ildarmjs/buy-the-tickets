import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import TicketsCard from './tickets-card/TicketsCard'

const Tickets: FC = () => {
	const tickets = useSelector((state: RootState) => state.tickets.tickets)
	const selectedFilters = useSelector((state: RootState) => state.filters)

	const filteredTickets = tickets.filter(ticket => {
		if (selectedFilters.all) return true
		if (selectedFilters.noStops && ticket.stops === 0) return true
		if (selectedFilters.oneStop && ticket.stops === 1) return true
		if (selectedFilters.twoStops && ticket.stops === 2) return true
		if (selectedFilters.threeStops && ticket.stops === 3) return true
		return false
	})

	return (
		<div className='col-span-3 col-start-3'>
			{filteredTickets.map(ticket => (
				<TicketsCard ticket={ticket} key={ticket.id} />
			))}
		</div>
	)
}

export default Tickets
