import { FC } from 'react'
import {
	convertCurrency,
	getCurrencySymbol
} from '../../../../utils/convertCurrency'
import { TypeCurrency } from '../../../../types/types.currency'

type TicketButtonProps = {
	price: number
	currency: TypeCurrency
}

const TicketButton: FC<TicketButtonProps> = ({ price, currency }) => {
	const convertedPrice = convertCurrency(price, currency)
	const currencySymbol = getCurrencySymbol(currency)

	return (
		<button className='inline-flex justify-center items-center bg-orange-500 text-[16px] font-medium w-[170px] h-[60px] text-white rounded-md'>
			Купить
			<br /> за {Math.round(convertedPrice)} {currencySymbol}
		</button>
	)
}

export default TicketButton
