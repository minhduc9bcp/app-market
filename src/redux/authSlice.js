import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        signIn: {
            currentUser: null,
            isFetching: false,
            error: false
        },
        signUp: {
            isFetching: false,
            error: false,
            success: false
        },
    },
    reducers: {
        signInStart: (state) => {
            state.signIn.isFetching = true;
        },
        signInSuccess: (state, action) => {
            state.signIn.isFetching = false;
            state.signIn.currentUser = action.payload;
            state.signIn.error = false;
        },
        signInFailed: (state) => {
            state.signIn.isFetching = false;
            state.signIn.error = true;
        },
        signUpStart: (state) => {
            state.signUp.isFetching = true;
        },
        signUpSuccess: (state) => {
            state.signUp.isFetching = false;
            state.signUp.error = false;
            state.signUp.success = true;
        },
        signUpFailed: (state) => {
            state.signUp.isFetching = false;
            state.signUp.error = true;
            state.signUp.success = false;
        }
    }
});

export const {
    signInStart,
    signInSuccess,
    signInFailed,
    signUpStart,
    signUpSuccess,
    signUpFailed
} = authSlice.actions;

export default authSlice.reducer;