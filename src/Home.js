import { useState, useEffect } from "react"
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

	const [name, setName] = useState('mario')

	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs')

	return (
		<div className='home'>
			<h2 className='font-header text-4xl'>Homepage</h2>
			{error && <div> { error }</div>}
			{isPending && <span>Loading...</span>}
			{blogs && <BlogList blogs={blogs} title='Blog list' />}
		</div>
	)
}
 
export default Home;