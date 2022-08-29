import React from 'react';
import BasketItem from '../BasketItem';
import './basket.css';
const Basket = () => {
	return (
		<div className='container basketContainer'>
			<h1>Your Basket : </h1>
			<div>
				<BasketItem></BasketItem>
			</div>
		</div>
	);
};

export default Basket;
