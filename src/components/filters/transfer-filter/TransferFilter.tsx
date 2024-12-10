import { FC, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setFilter } from '../../../redux/filtersSlice/filtersSlice'
import TransferCheckbox from './transfer-checkbox/TransferCheckbox'
import { resetCurrentPage } from '../../../redux/paginationSlice/PaginationSlice'

const TransferFilter: FC = () => {
	const dispatch = useDispatch()
	const selectedFilters = useSelector((state: RootState) => state.filters)

	const handleFilterChange = useCallback(
		(filterId: string) => {
			dispatch(setFilter(filterId))
			dispatch(resetCurrentPage())
		},
		[dispatch]
	)

	return (
		<div>
			<h3 className='text-[18px] font-semibold uppercase mb-2'>
				Количество пересадок
			</h3>
			<TransferCheckbox
				id='all'
				label='Все'
				isChecked={selectedFilters.all}
				onChange={handleFilterChange}
			/>
			<TransferCheckbox
				id='noStops'
				label='Без пересадок'
				isChecked={selectedFilters.noStops}
				onChange={handleFilterChange}
			/>
			<TransferCheckbox
				id='oneStop'
				label='1 пересадка'
				isChecked={selectedFilters.oneStop}
				onChange={handleFilterChange}
			/>
			<TransferCheckbox
				id='twoStops'
				label='2 пересадки'
				isChecked={selectedFilters.twoStops}
				onChange={handleFilterChange}
			/>
			<TransferCheckbox
				id='threeStops'
				label='3 пересадки'
				isChecked={selectedFilters.threeStops}
				onChange={handleFilterChange}
			/>
		</div>
	)
}

export default TransferFilter
