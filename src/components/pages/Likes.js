import React from 'react';
import './likes.css';
import { useSelector } from 'react-redux';
import BasketItem from '../BasketItem';

const Likes = () => {
	const likes = useSelector((store) => store.like);
	const data = useSelector((store) => store.data);
	const value = likes.likes.map((i) => {
		return data.initialState.filter((item) => item.id === i);
	});
	return (
		<div className='likeContainer'>
			<h1>Your favorite items </h1>
			{likes.likes.length ? (
				value.map((item) => <BasketItem item={item}></BasketItem>)
			) : (
				<h2>Your card is empty</h2>
			)}
		</div>
	);
};

export default Likes;
