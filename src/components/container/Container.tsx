import type { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren<unknown>) => {
	return <div className='max-w-[1200px] mx-auto'>{children}</div>
}

export default Container
