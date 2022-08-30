import React from 'react';
import './basketItem.css';

const BasketItem = ({ item }) => {
	console.log(item[0]);
	return (
		<div className='basketItemContainer'>
			<img src={item[0].images[0]} alt='' />
			<p>{item[0].title}</p>
			<p>Price : {item[0].price}$</p>
		</div>
	);
};

export default BasketItem;
