import { createSlice } from '@reduxjs/toolkit';
import { products } from '../data/products';
import { categories } from '../data/categories';

const initialState = products;
const categoriesState = categories;

const allSlice = createSlice({
	name: 'allSlice',
	initialState: {
		initialState,
		categoriesState,
	},
});

export default allSlice.reducer;
