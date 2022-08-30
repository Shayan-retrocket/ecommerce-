import { configureStore } from '@reduxjs/toolkit';
import basket from './features/basket';
import allSlice from './features/allDataSlice';
export const store = configureStore({
	reducer: {
		basket: basket,
		data: allSlice,
	},
});
