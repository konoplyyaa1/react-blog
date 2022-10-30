import { useState } from "react";
import { useNavigate } from 'react-router-dom'


const Create = () => {
	const [title, setTitle] = useState('')
	const [body, setBody] = useState('')
	const [author, setAuthor] = useState('yoshi')
	const [isPending, setIsPending] = useState(false)
	const history = useNavigate()

	const handeSubmit = (e) => {
		e.preventDefault();
		const blog = {title, body, author}

		setIsPending(true)

		setTimeout(() => {
			fetch('http://localhost:8000/blogs/', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(blog)
		}).then(() => {
			console.log('blog added')
			setIsPending(false)
			history('/')
		})
		}, 1000)
	
	}

	return (
		<div className='w-full max-w-xs mx-auto'>
			<h2 className='text-2xl text-center font-bold uppercase'>
				Create a blog
			</h2>
			<form onSubmit={handeSubmit} className='flex flex-col mt-10'>
				<label>Title</label>
				<input
					className='border rounded-xl mb-3 py-1 px-2'
					required
					value={title}
					onChange={e => setTitle(e.target.value)}
				/>

				<label>Body</label>
				<textarea
					className='border rounded-xl mb-3 py-1 px-2 h-28'
					required
					value={body}
					onChange={e => setBody(e.target.value)}
				></textarea>

				<label>Author</label>
				<select
					className='border rounded-xl mb-3 py-2 px-2'
					value={author}
					onChange={e => setAuthor(e.target.value)}
				>
					<option value='mario'>Mario</option>
					<option value='yoshi'>Yoshi</option>
				</select>

				{!isPending && (
					<button className='border mt-4 py-2 rounded-xl border-black bg-black text-white'>
						Add blog
					</button>
				)}
				{isPending && (
					<button disabled className='border mt-4 py-2 rounded-xl border-black bg-black text-white'>
						Adding blog...
					</button>
				)}
			</form>

			{title && body && author && (
				<div className='mt-10'>
					<h2>How you blog will look like:</h2>
					<div className='border border-gray-400 rounded-xl w-full p-4 mt-4'>
						<h4 className='font-bold'>{title}</h4>
						<div className='text-xs mb-2'>
							Written by:{' '}
							<span className='font-semibold uppercase underline'>
								{author}
							</span>
						</div>
						<p className='text-xs'>{body}</p>
					</div>
				</div>
			)}
		</div>
	)
}

export default Create;