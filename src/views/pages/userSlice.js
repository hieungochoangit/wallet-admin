import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "src/api/userApi";

const initialState = {
    isLogin: false,
    username: "",
};

export const getUser = createAsyncThunk("user/setUser", async (data, { rejectWithValue }) => {
    const response = await userApi.getUser();
    return response;
});

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
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, (state, actions) => {
            console.log("get user pending");
            console.log("state: ", state);
            console.log("actions: ", actions);
        });

        builder.addCase(getUser.fulfilled, (state, actions) => {
            console.log("get user fulfilled");
            console.log("state: ", state);
            console.log("actions: ", actions);
            state.username = actions.payload.data.username;
        });

        builder.addCase(getUser.rejected, (state, actions) => {
            console.log("get user rejected");
            console.log("state: ", state);
            console.log("actions: ", actions);
        });
    },
});

export const { checkUserLogin, setCurrentUser } = userSlice.actions;
export default userSlice.reducer;
