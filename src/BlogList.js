const BlogList = ({blogs, title}) => {

	return (
		<div>
			<h2 className='font-header text-2xl mt-6'>{title}</h2>
			{blogs.map(blog => (
				<div className='border border-gray-400 w-full p-4 mt-4' key={blog.id}>
					<h2 className='font-bold'>{blog.title}</h2>
					<p className='mb-2'>Written by {blog.author}</p>
				</div>
			))}
		</div>
	)
}
 
export default BlogList;