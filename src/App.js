import Navbar from './Navbar';
import Home from './Home';
import Create from './Create'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
		<Router>
			<div className='max-w-5xl mx-auto'>
				<Navbar />
				<div className='content'>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/create' element={<Create />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App;
