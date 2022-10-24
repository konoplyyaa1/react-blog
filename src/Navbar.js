import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<nav className='flex justify-between max-w-5xl mx-auto items-center py-6 border-b border-b-black mb-10'>
			<h1 className="text-2xl font-header font-bold">React Blog</h1>
			<div className='flex space-x-4 underline'>
				<Link to='/'>Home</Link>
				<Link to='/create'>Create blog</Link>
			</div>
		</nav>
	)
}
 
export default Navbar;