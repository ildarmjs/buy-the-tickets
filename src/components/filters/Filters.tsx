import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { setFilter } from '../../redux/filtersSlice/filtersSlice'

const Filters: FC = () => {
	const dispatch = useDispatch()
	const selectedFilters = useSelector((state: RootState) => state.filters)

	const handleFilterChange = (filter: string) => {
		dispatch(setFilter(filter))
	}

	return (
		<div className='col-span-2'>
			<div className='sticky top-5 bg-slate-100 rounded-sm border border-gray-300 h-[auto] p-4'>
				<div>
					<h3>Валюта</h3>
					<div>
						<button>RUB</button>
						<button>USD</button>
						<button>EUR</button>
					</div>
				</div>
				<div>
					<h3>Количество пересадок</h3>
					<div>
						<input
							type='checkbox'
							checked={selectedFilters.all}
							onChange={() => handleFilterChange('all')}
						/>
						<label>Все</label>
					</div>
					<div>
						<input
							type='checkbox'
							checked={selectedFilters.noStops}
							onChange={() => handleFilterChange('noStops')}
						/>
						<label>Без пересадок</label>
					</div>
					<div>
						<input
							type='checkbox'
							checked={selectedFilters.oneStop}
							onChange={() => handleFilterChange('oneStop')}
						/>
						<label>1 пересадка</label>
					</div>
					<div>
						<input
							type='checkbox'
							checked={selectedFilters.twoStops}
							onChange={() => handleFilterChange('twoStops')}
						/>
						<label>2 пересадки</label>
					</div>
					<div>
						<input
							type='checkbox'
							checked={selectedFilters.threeStops}
							onChange={() => handleFilterChange('threeStops')}
						/>
						<label>3 пересадки</label>
					</div>
				</div>
			</div>
		</div>
	)
}
export default Filters
