import React from 'react';
import { BsBasket3 } from 'react-icons/bs';
import { BsFillBasket3Fill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../features/basket';
import { addToLike, removeFromLike } from '../features/likes';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

const Card = ({ id, image, price, title, desc }) => {
	const dispatch = useDispatch();
	const items = useSelector((store) => store.basket);
	const likes = useSelector((store) => store.like);
	const isIn = items.cartItems.find((item) => item === id);
	const isInlikes = likes.likes.find((item) => item === id);
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
				<p>{desc.slice(0, 50)} . . . </p>
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
					<BsFillBasket3Fill
						size={20}
						cursor='pointer'
						onClick={() => {
							dispatch(removeFromCart(id));
						}}></BsFillBasket3Fill>
				)}
				<Link to={`detail/${id}`}>
					<button>More</button>
				</Link>
				{isInlikes === undefined ? (
					<AiOutlineHeart
						size={20}
						cursor='pointer'
						onClick={() => dispatch(addToLike(id))}></AiOutlineHeart>
				) : (
					<FavoriteIcon
						size={20}
						cursor='pointer'
						onClick={() => {
							dispatch(removeFromLike(id));
						}}></FavoriteIcon>
				)}
			</div>
		</div>
	);
};

export default Card;
