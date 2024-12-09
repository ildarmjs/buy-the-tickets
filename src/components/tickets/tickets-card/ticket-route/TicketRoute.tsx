import { FC } from 'react'

import planeIcon from '/public/images/plane-icon.png'
import { TypeTickets } from '../../../../types/types.tickets'
import { getStops } from '../../../../utils/getStops'

type TicketRouteProps = {
	ticket: TypeTickets
}

const TicketRoute: FC<TicketRouteProps> = ({ ticket }) => {
	return (
		<div className='relative'>
			<div className='absolute left-[25%] -top-4 '>
				{getStops(ticket.stops)}
			</div>
			<div className='flex items-center'>
				<div className='w-[200px] h-[2px] rounded-md bg-black' />
				<img className='w-6' src={planeIcon} alt='' />
			</div>
		</div>
	)
}

export default TicketRoute
