import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./views/pages/userSlice";

const store = configureStore({
    reducer: {
        user: useReducer,
    },
});

export default store;
