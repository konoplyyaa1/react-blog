const Navbar = () => {
	return (
		<nav className='flex justify-between max-w-5xl mx-auto items-center py-6 border-b border-b-black mb-10'>
			<h1 className="text-2xl font-header font-bold">React Blog</h1>
			<div className='flex space-x-4 underline'>
				<a href='/'>Home</a>
				<a href='/create'>Create blog</a>
			</div>
		</nav>
	)
}
 
export default Navbar;