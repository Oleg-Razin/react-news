import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import postReucer from "../features/postSlice";

export default configureStore({
	reducer: {
		user: userReducer,
		singlePost: postReucer,
	}
});