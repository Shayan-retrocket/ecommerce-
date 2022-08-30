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

	let total = 0;
	value.map((i) => {
		return (total += i[0].price);
	});

	return (
		<div className='container basketContainer'>
			<div className='basketShapes'>
				<div>
					<div>
						<h3>Amount</h3>
						<br />
						<h3>{items.cartItems.length}</h3>
					</div>
				</div>
				<div>
					<div>
						<h3>Total</h3>
						<br />

						<h3>{total}$</h3>
					</div>
				</div>
				<div>
					<div>
						<h3>Clear Card</h3>
					</div>
				</div>
				{/* <h1>Your Basket : </h1> */}
			</div>
			{value.map((item) => (
				<BasketItem item={item}></BasketItem>
			))}
		</div>
	);
};

export default Basket;
