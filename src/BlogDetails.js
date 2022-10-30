import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
	const { id } = useParams();
	const history = useNavigate()
	const {
		data: blog,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs/' + id)

	const handleDelete = () => {
		fetch('http://localhost:8000/blogs/' + blog.id, {
			method: 'DELETE'
		}).then(() => {
			history('/')
		})
	}

	return (
		<div>
			{isPending && <div>Loading...</div>}
			{error && <div>{error}</div>}
			{blog && (
				<article className='max-w-3xl mx-auto'>
					<h2 className='text-2xl text-center font-semibold uppercase'>
						{blog.title}
					</h2>
					<div className='text-center text-xs mt-2 mb-4'>
						Written by:{' '}
						<span className='font-semibold uppercase underline'>
							{blog.author}
						</span>
					</div>
					<p>{blog.body}</p>
					<button
						onClick={handleDelete}
						className='border mt-4 py-2 rounded-xl border-black bg-black text-white px-4'
					>
						Delete
					</button>
				</article>
			)}
		</div>
	)
}

export default BlogDetails;