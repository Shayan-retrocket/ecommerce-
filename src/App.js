import './App.css';
import Home from './components/pages/Home';
import Nav from './components/ui/Nav';
import List from './components/pages/List.js';
import { Route, Routes } from 'react-router-dom';
import Basket from './components/pages/Basket';
import Detail from './components/pages/Detail';

function App() {
	return (
		<div className='App'>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/products' element={<List />}></Route>
				<Route path='/basket' element={<Basket />}></Route>
				<Route path='/detail/:id' element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
