import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

	return (
		<div>
			<h2 className='font-header text-xl mt-6 font-semibold uppercase'>{title}</h2>
			{blogs.map(blog => (
				<div
					className='border border-gray-400 rounded-xl w-full p-4 mt-4'
					key={blog.id}
				>
					<Link to={`/blogs/${blog.id}`}>
						<h2 className='font-bold'>{blog.title}</h2>
						<p className='mb-2'>Written by {blog.author}</p>
					</Link>
				</div>
			))}
		</div>
	)
}
 
export default BlogList;