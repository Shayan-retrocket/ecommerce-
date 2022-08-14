import React from 'react';
import { BsBasket3 } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';
const Card = ({ id, image, price, title, desc }) => {
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
				<BsBasket3 size={20}></BsBasket3>
				<button>more</button>
				<AiOutlineHeart size={20}></AiOutlineHeart>
			</div>
		</div>
	);
};

export default Card;
