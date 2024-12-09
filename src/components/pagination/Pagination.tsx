import React from 'react'

type TypePaginationProps = {
	currentPage: number
	totalPages: number
	onPageChange: (page: number) => void
}

const Pagination: React.FC<TypePaginationProps> = ({
	currentPage,
	totalPages,
	onPageChange
}) => {
	const renderPageNumbers = () => {
		const pageNumbers = []
		const maxPagesToShow = 2

		let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
		let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

		if (endPage === totalPages) {
			startPage = Math.max(1, totalPages - maxPagesToShow + 1)
		}

		if (startPage > 1) {
			pageNumbers.push(
				<span key='start-ellipsis' className='px-2 py-1 mx-1 text-gray-500'>
					...
				</span>
			)
		}

		for (let i = startPage; i <= endPage; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => onPageChange(i)}
					className={`px-3 py-1 mx-1 rounded ${
						currentPage === i
							? 'bg-blue-500 text-white'
							: 'bg-gray-200 text-gray-700 hover:bg-gray-300'
					}`}
				>
					{i}
				</button>
			)
		}

		if (endPage < totalPages) {
			pageNumbers.push(
				<span key='end-ellipsis' className='px-2 py-1 mx-1 text-gray-500'>
					...
				</span>
			)
		}

		return pageNumbers
	}

	return (
		<div className='flex justify-center items-center mt-4 space-x-2'>
			<button
				onClick={() => onPageChange(currentPage - 1)}
				disabled={currentPage === 1}
				className='px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300'
			>
				Предыдущая
			</button>

			<div className='flex items-center'>{renderPageNumbers()}</div>

			<button
				onClick={() => onPageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
				className='px-4 py-1 bg-blue-500 text-white rounded disabled:bg-gray-300'
			>
				Следующая
			</button>
		</div>
	)
}

export default Pagination
