import { FC } from 'react'
import Tickets from './components/tickets/Tickets'
import Container from './components/container/Container'
import Filters from './components/filters/Filters'

const App: FC = () => {
	return (
		<Container>
			<div className='grid grid-cols-5 grid-rows-5 gap-4 mt-10'>
				<Filters />
				<Tickets />
			</div>
		</Container>
	)
}

export default App
