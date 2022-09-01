import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './list.css';
import Card from '../Card';
import { Pagination } from '@mui/material';
import { useSelector } from 'react-redux';
const List = () => {
	// const [data, setdata] = useState([]);
	const data = useSelector((store) => store.data.initialState);
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
	return (
		<div className='container listContainerParent'>
			{data.length ? (
				<>
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
					)}{' '}
				</>
			) : (
				<h1>Loading . . .</h1>
			)}
		</div>
	);
};

export default List;
