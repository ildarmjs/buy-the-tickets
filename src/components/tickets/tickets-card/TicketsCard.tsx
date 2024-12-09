import { FC } from 'react'
import { TypeTickets } from '../../../types/types.tickets'
import logo from '/public/images/logo-turkish.png'
import { getStops } from '../../../utils/getStops'
import { convertDate } from '../../../utils/convertDate'
type TypeTicketsCardProps = {
	ticket: TypeTickets
}

const TicketsCard: FC<TypeTicketsCardProps> = ({ ticket }) => {
	return (
		<div className='flex bg-slate-100 rounded-sm mb-5 p-4 border border-gray-300 gap-4'>
			<div className='border-r border-gray-300 -my-4 pb-4 pr-4'>
				<img src={logo} alt='' className='w-[200px]' />
				<button className='inline-flex justify-center items-center bg-orange-500 w-[170px] h-[60px] text-white rounded-md'>
					Купить
					<br /> за {ticket.price} руб
				</button>
			</div>
			<div className='flex items-center justify-between w-[100%]'>
				<div>
					<div className='text-[40px]'>{ticket.departure_time}</div>
					<div className='font-medium'>
						{ticket.origin}, {ticket.origin_name}
					</div>
					<div>{convertDate(ticket.departure_date)}</div>
				</div>
				<div className='relative'>
					<div className='absolute left-[20%] -top-3 '>
						{getStops(ticket.stops)}
					</div>
					<div>{'------------------------>'}</div>
				</div>
				<div>
					<div className='text-[40px]'>{ticket.arrival_time}</div>
					<div className='font-medium'>
						{ticket.destination_name}, {ticket.destination}
					</div>
					<div>{convertDate(ticket.arrival_date)}</div>
				</div>
			</div>
		</div>
	)
}

export default TicketsCard
