import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	likes: [],
};
const likeSlice = createSlice({
	name: 'likeSlice',
	initialState,
	reducers: {
		addToLike: (state, { payload }) => {
			let isIn = state.likes.find((item) => item === payload);
			if (isIn === undefined) state.likes.push(payload);
		},
		removeFromLike: (state, { payload }) => {
			let isIn = state.likes.find((item) => item === payload);
			if (isIn !== undefined) {
				state.likes = state.likes.filter((item) => {
					return item !== payload;
				});
			}
		},
	},
});

export default likeSlice.reducer;
export const { addToLike, removeFromLike } = likeSlice.actions;
