import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './list.css';
import Card from '../Card';
import { Pagination } from '@mui/material';
const List = () => {
	const [data, setdata] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);

	/////////////////PAGINATION////////////////////
	const itemNum = data.length;
	const itemPerPage = 10;
	const last = currentPage * itemPerPage;
	const first = last - itemPerPage;
	const currentOfPage = data.slice(first, last);

	const paginate = (e, value) => {
		setCurrentPage(value);
	};
	useEffect(() => {
		const get = async () => {
			const data = await axios.get('https://api.escuelajs.co/api/v1/products');
			setdata(data.data);
			// itemNum(data.data.length);
		};
		get();
	}, []);
	return (
		<div className='container listContainerParent'>
			<h1>List</h1>
			<div className='listContainer'>
				{data.length &&
					currentOfPage.map((item) => (
						<Card
							key={item.id}
							title={item.title}
							image={item.images[0]}
							desc={item.description}
							id={item.id}
							price={item.price}
						/>
					))}
			</div>
			{itemNum > 9 && (
				<Pagination
					count={Math.ceil(itemNum / itemPerPage)}
					page={currentPage}
					onChange={paginate}></Pagination>
			)}
		</div>
	);
};

export default List;
