import { FC, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import TicketsCard from './tickets-card/TicketsCard'
import TicketsQuantity from './tickets-quantity/TicketsQuantity'
import Pagination from '../pagination/Pagination'
import { setCurrentPage } from '../../redux/paginationSlice/PaginationSlice'
import ErrorBoundary from '../error-boundary/ErrorBoundary'
import NotFound from '../not-found/NotFound'
import Loader from '../Loader/Loader'
import { setSortCriteria } from '../../redux/sortSlice/sortSlice'
import TicketsSort from './tickets-sort/TicketsSort'
import { filterTickets, sortTickets } from '../../utils/ticketsHelper'

const Tickets: FC = () => {
	const dispatch = useDispatch()
	const tickets = useSelector((state: RootState) => state.tickets.tickets)
	const selectedFilters = useSelector((state: RootState) => state.filters)
	const currency = useSelector((state: RootState) => state.currency.currency)
	const [isLoading, setIsLoading] = useState(false)
	const currentPage = useSelector(
		(state: RootState) => state.pagination.currentPage
	)
	const sortCriteria = useSelector((state: RootState) => state.sort.criteria)
	const ticketsPerPage = 3

	const filteredTickets = filterTickets(tickets, selectedFilters)
	const sortedTickets = sortTickets(filteredTickets, sortCriteria)

	const indexOfLastTicket = currentPage * ticketsPerPage
	const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage
	const currentTickets = sortedTickets.slice(
		indexOfFirstTicket,
		indexOfLastTicket
	)

	const totalPages = Math.ceil(sortedTickets.length / ticketsPerPage)

	const handlePageChange = async (pageNumber: number) => {
		setIsLoading(true)
		dispatch(setCurrentPage(pageNumber))
		// Имитация задержки загрузки
		await new Promise(resolve => setTimeout(resolve, 500))
		setIsLoading(false)
	}

	const showPagination = sortedTickets.length > ticketsPerPage

	const handleSortChange = (criteria: string) => {
		dispatch(setSortCriteria(criteria))
	}

	return (
		<div>
			<TicketsQuantity quantity={filteredTickets.length} />
			<TicketsSort
				sortCriteria={sortCriteria}
				onSortChange={handleSortChange}
			/>
			<ErrorBoundary>
				{isLoading ? (
					<Loader />
				) : sortedTickets.length === 0 ? (
					<NotFound />
				) : (
					currentTickets.map(ticket => (
						<TicketsCard ticket={ticket} key={ticket.id} currency={currency} />
					))
				)}
			</ErrorBoundary>

			{showPagination && (
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={handlePageChange}
				/>
			)}
		</div>
	)
}

export default Tickets
