import React from 'react';
import './bestSeller.css';
import Card from './Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const BestSeller = () => {
	const items = useSelector((store) => store.data.initialState);
	const cut = 15;
	const cutadd = cut + 5;
	const bestSeller = items.slice(cut, cutadd);
	return (
		<div className='container bestSellerContainer'>
			<h1>bestSeller</h1>

			<div className='bestSellerSection'>
				{bestSeller.map((item) => (
					<Card
						key={item.id}
						id={item.id}
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
