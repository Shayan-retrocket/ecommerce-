import React from 'react';
import './banner.css';
import Img1 from '../assests/images/freestocks-_3Q3tsJ01nc-unsplash.jpg';
import Img2 from '../assests/images/matheus-ferrero-4QotHf68gSg-unsplash.jpg';
const Banner = () => {
	return (
		<div className='bannerContainer container'>
			<div className='bannerItem'>
				{' '}
				<img src={Img1} alt='' />{' '}
			</div>
			<div className='bannerItem'>
				{' '}
				<img src={Img2} alt='' />{' '}
			</div>
		</div>
	);
};

export default Banner;
