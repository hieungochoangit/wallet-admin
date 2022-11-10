import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./views/pages/userSlice";
import categoryReducer from "./views/category/categorySlice";

const store = configureStore({
    reducer: {
        user: useReducer,
        category: categoryReducer,
    },
});

export default store;
