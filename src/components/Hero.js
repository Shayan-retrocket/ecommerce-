import React from 'react';
import './hero.css';
import Img from '../assests/images/kisspng-fashion-model-america-s-next-top-model-season-2-a-fashion-women-5b312ee2450104.7301032815299499222827.png';
const Hero = () => {
	return (
		<div className='container heroContainer'>
			<div className='heroText'>
				<h1>E-commerce sample</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
					<br />
					aliquid consequatur earum veritatis facere unde nihil eaque?
					<br /> Saepe, temporibus quis.
				</p>
			</div>
			<img src={Img} alt='' />
		</div>
	);
};

export default Hero;
