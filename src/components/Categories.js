import React from 'react';
import './categories.css';
import { useSelector } from 'react-redux';
const Categories = () => {
	const categories = useSelector((store) => store.data.categoriesState);

	return (
		<div className='container categoriesContainer'>
			<div className='categoryText'>
				<h1>Categories</h1>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
					velit iusto in eum deserunt pariatur perspiciatis odit eius magnam
					explicabo dolores
				</p>
			</div>
			<div className='categoryImage'>
				{categories.map((item) => (
					<div key={item.id} className='categoryCard'>
						<div className='categoryName'>
							<h5>{item.name}</h5>
						</div>
						<img className='categoryBg' src={item.image} alt={item.name} />
					</div>
				))}
			</div>
		</div>
	);
};

export default Categories;
