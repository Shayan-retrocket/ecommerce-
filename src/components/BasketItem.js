import React from 'react';
import './basketItem.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../features/basket';
const BasketItem = ({ item }) => {
	const dispatch = useDispatch();
	return (
		<div className='basketItemContainer'>
			<img src={item[0].images[0]} alt='' />
			<p>{item[0].title}</p>
			<p>Price : {item[0].price}$</p>
			<button
				onClick={() => {
					dispatch(removeFromCart(item[0].id));
				}}>
				Remove
			</button>
		</div>
	);
};

export default BasketItem;
