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
        setCurrentUser: (state, actions) => {
            const token = actions.payload;

            // Save to localStorange
            localStorage.setItem("token", token);

            // Change state
            state.isLogin = true;
        },
    },
});

export const { checkUserLogin, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
