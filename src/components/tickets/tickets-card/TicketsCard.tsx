import { FC } from 'react'
import { TypeTickets } from '../../../types/types.tickets'
import logo from '/public/images/logo-turkish.png'
import { getStops } from '../../../utils/getStops'
import { convertDate } from '../../../utils/convertDate'
import {
	convertCurrency,
	getCurrencySymbol
} from '../../../utils/convertCurrency'
type TypeTicketsCardProps = {
	ticket: TypeTickets
	currency: 'RUB' | 'USD' | 'EUR'
}

const TicketsCard: FC<TypeTicketsCardProps> = ({ ticket, currency }) => {
	const convertedPrice = convertCurrency(ticket.price, currency)
	const currencySymbol = getCurrencySymbol(currency)
	return (
		<div className='flex bg-slate-100 rounded-sm mb-5 p-4 border border-gray-300 gap-4'>
			<div className='border-r border-gray-300 -my-4 pb-4 pr-4'>
				<img src={logo} alt='' className='w-[200px]' />
				<button className='inline-flex justify-center items-center bg-orange-500 text-[16px] font-medium w-[170px] h-[60px] text-white rounded-md'>
					Купить
					<br /> за {convertedPrice.toFixed(0)} {currencySymbol}
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
