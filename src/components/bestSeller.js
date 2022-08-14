import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './bestSeller.css';
import Card from './Card';
import { Link } from 'react-router-dom';
const BestSeller = () => {
	const [bestSeller, setBestSeller] = useState([]);
	useEffect(() => {
		const get = async () => {
			const data = await axios.get(' https://api.escuelajs.co/api/v1/products');
			const cut = Math.ceil(Math.random() * 202);
			const cutadd = cut + 5;
			const cuttedData = data.data.slice(cut, cutadd);
			setBestSeller(cuttedData);
		};
		get();
	}, []);
	return (
		<div className='container bestSellerContainer'>
			<h1>bestSeller</h1>
			{console.log(bestSeller)}
			<div className='bestSellerSection'>
				{bestSeller.map((item) => (
					<Card
						key={item.id}
						title={item.title}
						price={item.price}
						desc={item.description}
						image={item.images[0]}></Card>
				))}
			</div>
			<Link className='Seeall' to='products'>
				See all products
			</Link>
		</div>
	);
};

export default BestSeller;
