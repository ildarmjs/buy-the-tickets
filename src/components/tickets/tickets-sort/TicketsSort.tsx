import { FC } from 'react'

type TypeTicketsSortProps = {
	sortCriteria: string
	onSortChange: (criteria: string) => void
}

const TicketsSort: FC<TypeTicketsSortProps> = ({
	sortCriteria,
	onSortChange
}) => {
	return (
		<div className='mb-4'>
			<label htmlFor='sort' className='mr-2'>
				Сортировать по:
			</label>
			<select
				id='sort'
				value={sortCriteria}
				onChange={e => onSortChange(e.target.value)}
				className='border rounded p-1'
			>
				<option value='price'>Цене</option>
				<option value='departureTime'>Времени вылета</option>
				<option value='arrivalTime'>Времени прибытия</option>
				<option value='stops'>Количество пересадок</option>
			</select>
		</div>
	)
}

export default TicketsSort
