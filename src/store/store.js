import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import counterReducer from "./counterSlice";
import postsReducer from './postSlice';

const store = configureStore({
    reducer:{
        auth : authSlice,
        counter:counterReducer,
        posts:postsReducer,
    }
});

export default store;