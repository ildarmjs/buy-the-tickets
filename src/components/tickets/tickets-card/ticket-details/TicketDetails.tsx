import { FC } from 'react'
import { TypeTickets } from '../../../../types/types.tickets'
import { convertDate } from '../../../../utils/convertDate'

type TicketDetailsProps = {
	ticket: TypeTickets
}

const TicketDetails: FC<TicketDetailsProps> = ({ ticket }) => {
	return (
		<div>
			<div className='text-[40px]'>{ticket.departure_time}</div>
			<div className='font-medium'>
				{ticket.origin}, {ticket.origin_name}
			</div>
			<div>{convertDate(ticket.departure_date)}</div>
		</div>
	)
}

export default TicketDetails
