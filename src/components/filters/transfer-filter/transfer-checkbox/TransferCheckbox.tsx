import { FC } from 'react'
import classNames from 'classnames'

type TransferCheckboxProps = {
	id: string
	label: string
	isChecked: boolean
	onChange: (id: string) => void
}

const TransferCheckbox: FC<TransferCheckboxProps> = ({
	id,
	label,
	isChecked,
	onChange
}) => {
	return (
		<div
			className={classNames(
				'flex items-center gap-2 px-4 py-1 -mx-4 hover:bg-blue-200',
				isChecked && 'bg-blue-200'
			)}
		>
			<input
				type='checkbox'
				className='cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500'
				id={id}
				checked={isChecked}
				onChange={() => onChange(id)}
			/>
			<label htmlFor={id} className='text-[18px] cursor-pointer'>
				{label}
			</label>
		</div>
	)
}

export default TransferCheckbox
