import { FC } from 'react'
import CurrencySelector from './currency-selector/CurrencySelector'
import TransferFilter from './transfer-filter/TransferFilter'

const Filters: FC = () => {
	return (
		<div>
			<div className='sticky top-5 bg-slate-100 rounded-sm border border-gray-300 h-[auto] p-4'>
				<CurrencySelector />
				<TransferFilter />
			</div>
		</div>
	)
}
export default Filters
