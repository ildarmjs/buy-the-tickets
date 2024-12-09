import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setFilter } from '../../redux/filtersSlice/filtersSlice'
import { setCurrency } from '../../redux/currencySlice/currencySlice'
import classNames from 'classnames'

const Filters: FC = () => {
	const dispatch = useDispatch()
	const selectedFilters = useSelector((state: RootState) => state.filters)
	const selectedCurrency = useSelector(
		(state: RootState) => state.currency.currency
	)
	const handleFilterChange = (filter: string) => {
		dispatch(setFilter(filter))
	}
	const handleCurrencyChange = (currency: 'RUB' | 'USD' | 'EUR') => {
		dispatch(setCurrency(currency))
	}

	return (
		<div className=''>
			<div className='sticky top-5 bg-slate-100 rounded-sm border border-gray-300 h-[auto] p-4 '>
				<div className='mb-5'>
					<h3 className='text-[18px] font-semibold uppercase mb-2'>Валюта</h3>
					<div className='inline-flex'>
						<button
							className={
								selectedCurrency === 'RUB'
									? 'bg-blue-500 text-white px-4 py-1 '
									: 'px-4 py-1 border border-gray-300 hover:bg-blue-200 hover:border-blue-500'
							}
							onClick={() => handleCurrencyChange('RUB')}
						>
							RUB
						</button>
						<button
							className={
								selectedCurrency === 'USD'
									? 'bg-blue-500 text-white px-4 py-1'
									: 'px-4 py-1 border border-gray-300 hover:bg-blue-200 hover:border-blue-500'
							}
							onClick={() => handleCurrencyChange('USD')}
						>
							USD
						</button>
						<button
							className={
								selectedCurrency === 'EUR'
									? 'bg-blue-500 text-white px-4 py-1 '
									: 'px-4 py-1 border border-gray-300 hover:bg-blue-200 hover:border-blue-500'
							}
							onClick={() => handleCurrencyChange('EUR')}
						>
							EUR
						</button>
					</div>
				</div>

				<div>
					<h3 className='text-[18px] font-semibold uppercase mb-2'>
						Количество пересадок
					</h3>
					<div
						className={classNames(
							'flex items-center gap-2 px-4 py-1 -mx-4 hover:bg-blue-200',
							selectedFilters.all && 'bg-blue-200'
						)}
					>
						<input
							className='cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 '
							type='checkbox'
							id='all'
							checked={selectedFilters.all}
							onChange={() => handleFilterChange('all')}
						/>
						<label htmlFor='all' className='text-[18px] cursor-pointer'>
							Все
						</label>
					</div>
					<div
						className={classNames(
							'flex items-center gap-2 px-4 py-1 -mx-4 hover:bg-blue-200',
							selectedFilters.noStops && 'bg-blue-200'
						)}
					>
						<input
							className='cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 '
							type='checkbox'
							id='noStops'
							checked={selectedFilters.noStops}
							onChange={() => handleFilterChange('noStops')}
						/>
						<label htmlFor='noStops' className='text-[18px] cursor-pointer'>
							Без пересадок
						</label>
					</div>
					<div
						className={classNames(
							'flex items-center gap-2 px-4 py-1 -mx-4 hover:bg-blue-200',
							selectedFilters.oneStop && 'bg-blue-200'
						)}
					>
						<input
							type='checkbox'
							className='cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 '
							id='oneStop'
							checked={selectedFilters.oneStop}
							onChange={() => handleFilterChange('oneStop')}
						/>
						<label htmlFor='oneStop' className='text-[18px] cursor-pointer'>
							1 пересадка
						</label>
					</div>
					<div
						className={classNames(
							'flex items-center gap-2 px-4 py-1 -mx-4 hover:bg-blue-200',
							selectedFilters.twoStops && 'bg-blue-200'
						)}
					>
						<input
							type='checkbox'
							className='cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 '
							id='twoStops'
							checked={selectedFilters.twoStops}
							onChange={() => handleFilterChange('twoStops')}
						/>
						<label htmlFor='twoStops' className='text-[18px] cursor-pointer'>
							2 пересадки
						</label>
					</div>
					<div
						className={classNames(
							'flex items-center gap-2 px-4 py-1 -mx-4 hover:bg-blue-200',
							selectedFilters.threeStops && 'bg-blue-200'
						)}
					>
						<input
							type='checkbox'
							className='cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 '
							id='threeStops'
							checked={selectedFilters.threeStops}
							onChange={() => handleFilterChange('threeStops')}
						/>
						<label htmlFor='threeStops' className='text-[18px] cursor-pointer'>
							3 пересадки
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Filters
