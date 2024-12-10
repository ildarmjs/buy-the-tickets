import { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setCurrency } from '../../../redux/currencySlice/currencySlice'
import { TypeCurrency } from '../../../types/types.currency'

const CurrencySelector: FC = () => {
	const dispatch = useDispatch()
	const selectedCurrency = useSelector(
		(state: RootState) => state.currency.currency
	)

	const handleCurrencyChange = useCallback(
		(currency: TypeCurrency) => {
			dispatch(setCurrency(currency))
		},
		[dispatch]
	)

	return (
		<div className='mb-5'>
			<h3 className='text-[18px] font-semibold uppercase mb-2'>Валюта</h3>
			<div className='inline-flex'>
				{['RUB', 'USD', 'EUR'].map(currency => (
					<button
						key={currency}
						className={`${
							selectedCurrency === currency
								? 'bg-blue-500 text-white px-4 py-1'
								: 'px-4 py-1 border border-gray-300 hover:bg-blue-200 hover:border-blue-500'
						}`}
						onClick={() =>
							handleCurrencyChange(currency as 'RUB' | 'USD' | 'EUR')
						}
					>
						{currency}
					</button>
				))}
			</div>
		</div>
	)
}

export default CurrencySelector
