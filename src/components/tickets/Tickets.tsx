import { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import TicketsCard from './tickets-card/TicketsCard'

const Tickets: FC = () => {
	const tickets = useSelector((state: RootState) => state.tickets.tickets)

	return (
		<div className='col-span-3 col-start-3'>
			{tickets.map(ticket => (
				<TicketsCard ticket={ticket} key={ticket.id} />
			))}
		</div>
	)
}

export default Tickets
