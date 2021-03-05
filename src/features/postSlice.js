import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
	name: 'singlePost',
	initialState:{
		post: null,
	},

	reducers: {
		getPost: (state, action) =>{
			state.post = action.payload;
		},
	}
});

export const {getPost} = postSlice.actions;
export const selectPost = (state) => state.singlePost.post.article;

export default postSlice.reducer;