import React from 'react';
import Hero from '../Hero';
import Categories from '../Categories';
import BestSeller from '../bestSeller';
import Banner from '../Banner';
const Home = () => {
	return (
		<>
			<Hero />
			<Categories></Categories>
			{/* <Banner></Banner> */}
			<BestSeller></BestSeller>
		</>
	);
};

export default Home;
