import { FC } from 'react'
import { TypeTickets } from '../../../types/types.tickets'
import logo from '/public/images/logo-turkish.png'
import TicketButton from './ticket-button/TicketButton'
import TicketDetails from './ticket-details/TicketDetails'
import TicketRoute from './ticket-route/TicketRoute'
type TypeTicketsCardProps = {
	ticket: TypeTickets
	currency: 'RUB' | 'USD' | 'EUR'
}

const TicketsCard: FC<TypeTicketsCardProps> = ({ ticket, currency }) => {
	return (
		<div className='flex bg-slate-100 rounded-sm mb-5 p-4 border border-gray-300 gap-4'>
			<div className='border-r border-gray-300 -my-4 pb-4 pr-4'>
				<img src={logo} alt='' className='w-[200px]' />
				<TicketButton price={ticket.price} currency={currency} />
			</div>
			<div className='flex items-center justify-between gap-3 w-[100%]'>
				<TicketDetails ticket={ticket} />
				<TicketRoute ticket={ticket} />
				<TicketDetails
					ticket={{
						...ticket,
						departure_time: ticket.arrival_time,
						origin: ticket.destination_name,
						origin_name: ticket.destination
					}}
				/>
			</div>
		</div>
	)
}

export default TicketsCard
