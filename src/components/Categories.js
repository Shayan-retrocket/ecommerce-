import React, { useState, useEffect } from 'react';
import './categories.css';
import axios from 'axios';
const Categories = () => {
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		axios
			.get(' https://api.escuelajs.co/api/v1/categories')
			.then(function (response) {
				setCategories(response.data);
			})
			.catch(function (error) {
				alert(error);
			});
	}, []);

	return (
		<div className='container categoriesContainer'>
			<div className='categoryText'>
				<h2>this is a title</h2>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
					velit iusto in eum deserunt pariatur perspiciatis odit eius magnam
					explicabo dolores neque esse saepe, maxime optio repudiandae
					praesentium vero fuga?
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
