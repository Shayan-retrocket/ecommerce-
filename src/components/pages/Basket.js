import React from 'react';
import BasketItem from '../BasketItem';
import './basket.css';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../features/basket';
import { useSelector } from 'react-redux';

const Basket = () => {
	const items = useSelector((store) => store.basket);
	const data = useSelector((store) => store.data);
	const value = items.cartItems.map((i) => {
		return data.initialState.filter((item) => item.id === i);
	});
	return (
		<div className='container basketContainer'>
			<h1>Your Basket : </h1>

			{value.map((item) => (
				<BasketItem item={item}></BasketItem>
			))}
		</div>
	);
};

export default Basket;
