import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState:{
		user: {
			userName: null,
			password: null,
			loginedIn: false,
		}
	},

	reducers: {
		signIn: (state, action) => {
			state.user = action.payload;
		},
		signOut: (state) => {
			state.user = {		
				userName: null,
				password: null,
				loginedIn: false,
			};
		},
	},
});

export const {signIn, signOut} = userSlice.actions;
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;