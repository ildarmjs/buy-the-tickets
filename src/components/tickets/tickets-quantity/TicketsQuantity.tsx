import { FC } from 'react'
import { quantityTickets } from '../../../utils/quantityTickets'

interface TypeTicketsQuantityProps {
	quantity: number
}

const TicketsQuantity: FC<TypeTicketsQuantityProps> = ({ quantity }) => {
	return (
		<div className='mb-5 font-medium text-[17px]'>
			Найден{quantity > 1 ? 'о' : ''}: {quantityTickets(quantity)}
		</div>
	)
}

export default TicketsQuantity
