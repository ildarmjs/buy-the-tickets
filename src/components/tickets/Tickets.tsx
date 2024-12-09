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

const Tickets: FC = () => {
	const dispatch = useDispatch()
	const tickets = useSelector((state: RootState) => state.tickets.tickets)
	const selectedFilters = useSelector((state: RootState) => state.filters)
	const currency = useSelector((state: RootState) => state.currency.currency)
	const [isLoading, setIsLoading] = useState(false)
	const currentPage = useSelector(
		(state: RootState) => state.pagination.currentPage
	)
	const ticketsPerPage = 3

	const filteredTickets = tickets.filter(ticket => {
		if (selectedFilters.all) return true
		if (selectedFilters.noStops && ticket.stops === 0) return true
		if (selectedFilters.oneStop && ticket.stops === 1) return true
		if (selectedFilters.twoStops && ticket.stops === 2) return true
		if (selectedFilters.threeStops && ticket.stops === 3) return true
		return false
	})

	const indexOfLastTicket = currentPage * ticketsPerPage
	const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage
	const currentTickets = filteredTickets.slice(
		indexOfFirstTicket,
		indexOfLastTicket
	)

	const totalPages = Math.ceil(filteredTickets.length / ticketsPerPage)

	const handlePageChange = async (pageNumber: number) => {
		setIsLoading(true)
		dispatch(setCurrentPage(pageNumber))
		// Имитация задержки загрузки
		await new Promise(resolve => setTimeout(resolve, 500))
		setIsLoading(false)
	}

	const showPagination = filteredTickets.length > ticketsPerPage

	return (
		<div>
			<TicketsQuantity quantity={filteredTickets.length} />
			<ErrorBoundary>
				{isLoading ? (
					<Loader />
				) : filteredTickets.length === 0 ? (
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
