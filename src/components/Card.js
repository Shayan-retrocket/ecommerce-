import React from 'react';
import { BsBasket3 } from 'react-icons/bs';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/basket';

const Card = ({ id, image, price, title, desc }) => {
	const dispatch = useDispatch();
	const items = useSelector((store) => store.basket);
	const isIn = items.cartItems.find((item) => item === id);
	return (
		<div className='productCard'>
			<div className='productImg'>
				<img src={image} alt='' />
				<div className='productprice'>
					<h5>{price}$</h5>
				</div>
			</div>
			<div className='proDetail'>
				<h4>{title}</h4>
				<p>{desc}</p>
			</div>
			<hr style={{ width: '90%' }} />
			<div className='cardActions'>
				{isIn === undefined ? (
					<BsBasket3
						size={20}
						cursor='pointer'
						onClick={() => {
							dispatch(addToCart(id));
						}}></BsBasket3>
				) : (
					<BsFillBasket3Fill size={20} cursor='pointer'></BsFillBasket3Fill>
				)}
				<button>more</button>
				<AiOutlineHeart size={20} cursor='pointer'></AiOutlineHeart>
			</div>
		</div>
	);
};

export default Card;
