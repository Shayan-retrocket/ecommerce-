import React from 'react';
import { useParams } from 'react-router-dom';
import './detail.css';
const Detail = () => {
	const { id } = useParams();
	return <div className='detailContainer'>Detail {id}</div>;
};

export default Detail;
