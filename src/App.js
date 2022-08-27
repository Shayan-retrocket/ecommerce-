import './App.css';
import Home from './components/pages/Home';
import Nav from './components/ui/Nav';
import List from './components/pages/List.js';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
function App() {
	//https://api.escuelajs.co/api/v1/categories
	// axios
	// 	.get(' https://api.escuelajs.co/api/v1/products')
	// 	.then(function (response) {
	// 		console.log(response.data);
	// 	})
	// 	.catch(function (error) {
	// 		console.error(error);
	// 	});
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/products' element={<List />}></Route>
			</Routes>
		</div>
	);
}

export default App;
