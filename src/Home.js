import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

	const {
		data: blogs,
		isPending,
		error,
	} = useFetch('http://localhost:8000/blogs')

	return (
		<div className='pb-10'>
			<h2 className='font-header text-4xl font-semibold uppercase'>Homepage</h2>
			{error && <div> {error}</div>}
			{isPending && <span>Loading...</span>}
			{blogs && <BlogList blogs={blogs} title='Blog list' />}
		</div>
	)
}
 
export default Home;