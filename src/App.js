import './App.css';
import Home from './components/pages/Home';
import Nav from './components/ui/Nav';
import axios from 'axios';
function App() {
	//https://api.escuelajs.co/api/v1/categories
	axios
		.get(' https://api.escuelajs.co/api/v1/products')
		.then(function (response) {
			console.log(response.data);
		})
		.catch(function (error) {
			console.error(error);
		});
	return (
		<div className='App'>
			{/* <Nav /> */}
			<Home />
		</div>
	);
}

export default App;
