import './App.css';
import Home from './components/pages/Home';
import Nav from './components/ui/Nav';
import List from './components/pages/List.js';
import { Route, Routes } from 'react-router-dom';
import Basket from './components/pages/Basket';
import Detail from './components/pages/Detail';
import Likes from './components/pages/Likes';
function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/products' element={<List />}></Route>
				<Route path='/basket' element={<Basket />}></Route>
				<Route path='/likes' element={<Likes />}></Route>
				<Route exact path='products/detail/:idItem' element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
