import { FC } from 'react'
import Tickets from './components/tickets/Tickets'
import Container from './components/container/Container'
import Filters from './components/filters/Filters'

const App: FC = () => {
	return (
		<Container>
			<div className='flex gap-10 mt-10'>
				<Filters />
				<Tickets />
			</div>
		</Container>
	)
}

export default App
