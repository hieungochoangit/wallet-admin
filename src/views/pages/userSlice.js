import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLogin: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        checkUserLogin: (state) => {
            const token = localStorage.getItem("token");

            if (token) {
                state.isLogin = true;
            } else {
                state.isLogin = false;
            }
        },
    },
});

export const { checkUserLogin } = userSlice.actions;
export default userSlice.reducer;
