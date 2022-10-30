import { Link } from "react-router-dom"

const NotFound = () => {
	return (
		<div className='max-w-3xl mx-auto text-center'>
			<h2 className='text-2xl font-semibold uppercase'>Sorry</h2>
			<p className='mt-2 mb-4'>That page cannot be found</p>
			<Link to='/' className='font-semibold uppercase underline text-xs'>
				Home
			</Link>
		</div>
	)
}

export default NotFound