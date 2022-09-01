import React from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
import { useSelector } from 'react-redux';
const Detail = () => {
	const { idItem } = useParams();
	const items = useSelector((store) => store.data.initialState);
	const item = items.find((item) => {
		return item.id === Number(idItem);
	});
	console.log(item);
	return (
		<div className='detailContainer container'>
			<div className='detail'>
				<img src={item.images[0]} alt='' />

				<div className='detailText'>
					<h2>{item.title}</h2>
					<h3>price : {item.price}$</h3>
					<h3>category : {item.category.name}</h3>
					<p>{item.description}</p>
				</div>
			</div>
		</div>
	);
};

export default Detail;
