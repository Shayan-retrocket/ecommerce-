import { configureStore } from '@reduxjs/toolkit';
import basket from './features/basket';
import allSlice from './features/allDataSlice';
import likeSlice from './features/likes';
export const store = configureStore({
	reducer: {
		basket: basket,
		data: allSlice,
		like: likeSlice,
	},
});
