import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import TicketsCard from './tickets-card/TicketsCard'
import TicketsQuantity from './tickets-quantity/TicketsQuantity'

const Tickets: FC = () => {
	const tickets = useSelector((state: RootState) => state.tickets.tickets)
	const selectedFilters = useSelector((state: RootState) => state.filters)
	const currency = useSelector((state: RootState) => state.currency.currency)

	const filteredTickets = tickets.filter(ticket => {
		if (selectedFilters.all) return true
		if (selectedFilters.noStops && ticket.stops === 0) return true
		if (selectedFilters.oneStop && ticket.stops === 1) return true
		if (selectedFilters.twoStops && ticket.stops === 2) return true
		if (selectedFilters.threeStops && ticket.stops === 3) return true
		return false
	})

	return (
		<div>
			<TicketsQuantity quantity={filteredTickets.length} />
			{filteredTickets.map(ticket => (
				<TicketsCard ticket={ticket} key={ticket.id} currency={currency} />
			))}
		</div>
	)
}

export default Tickets
