import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	cartItems: [],
};
const basketSlice = createSlice({
	name: 'basketSlice',
	initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		addToCart: (state, { payload }) => {
			let isIn = state.cartItems.find((item) => item === payload);
			if (isIn === undefined) state.cartItems.push(payload);
		},
	},
});

export default basketSlice.reducer;
export const { clearCart, addToCart } = basketSlice.actions;
