import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './list.css';
import Card from '../Card';
const List = () => {
	const [data, setdata] = useState([]);
	useEffect(() => {
		const get = async () => {
			const data = await axios.get('https://api.escuelajs.co/api/v1/products');
			setdata(data.data);
		};
		get();
	}, []);
	return (
		<div className='container'>
			<h1>List</h1>
			<div className='listContainer'>
				{data.length &&
					data.map((item) => (
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
		</div>
	);
};

export default List;
