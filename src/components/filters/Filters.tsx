import { FC } from 'react'

const Filters: FC = () => {
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
					<h3>Колличество пересадок</h3>
					<div>
						<input type='checkbox' />
						<label>Все</label>
					</div>
					<div>
						<input type='checkbox' />
						<label>Без пересадок</label>
					</div>
					<div>
						<input type='checkbox' />
						<label>1 пересадка</label>
					</div>
					<div>
						<input type='checkbox' />
						<label>2 пересадка</label>
					</div>
					<div>
						<input type='checkbox' />
						<label>3 пересадка</label>
					</div>
				</div>
				<div>
					<button>Применить</button>
					<button>Сбросить</button>
				</div>
			</div>
		</div>
	)
}

export default Filters
