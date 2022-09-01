import React from 'react';
import './basketItem.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/basket';
import { useLocation } from 'react-router-dom';
import { removeFromLike } from '../features/likes';

const BasketItem = ({ item }) => {
	const dispatch = useDispatch();
	const loc = useLocation();

	return (
		<div className='basketItemContainer'>
			<img src={item[0].images[0]} alt='' />
			<p>{item[0].title}</p>
			<p>Price : {item[0].price}$</p>
			{loc.pathname === '/likes' ? (
				<button
					onClick={() => {
						dispatch(removeFromLike(item[0].id));
					}}>
					Remove
				</button>
			) : (
				<button
					onClick={() => {
						dispatch(removeFromCart(item[0].id));
					}}>
					Remove
				</button>
			)}
		</div>
	);
};

export default BasketItem;
