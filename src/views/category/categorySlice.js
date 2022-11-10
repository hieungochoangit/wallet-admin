import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

export const categorySlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        updateListCategory: (state, actions) => {
            state.list = actions.payload;
        },
    },
});

export const { updateListCategory } = categorySlice.actions;
export default categorySlice.reducer;
