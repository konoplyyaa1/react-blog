import { useState, useEffect } from "react"
import BlogList from "./BlogList";

const Home = () => {

	const [name, setName] = useState('mario')

	const [blogs, setBlogs] = useState([
		{ title: 'test title 1', body: 'lorem ipsum', author: 'auth1', id: 1 },
		{ title: 'test title 2', body: 'lorem ipsum', author: 'auth2', id: 2 },
		{ title: 'test title 3', body: 'lorem ipsum', author: 'auth1', id: 3 }
	]);

	const handleDelete = (id) => {
		const newBlogs = blogs.filter((blog) => blog.id !== id);
		setBlogs(newBlogs)
	}

	useEffect(() => {
		console.log('works')
		console.log(name)
	}, [name])

	return (
		<div className='home'>
			<h2 className='font-header text-4xl'>Homepage</h2>
			<BlogList blogs={blogs} title='Blog list' handleDelete={handleDelete} />
			<button onClick={() => setName('luigi')}>Click me</button>
		</div>
	)
}
 
export default Home;