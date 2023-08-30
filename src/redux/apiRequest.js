import axios from "axios";
import { signInFailed, signInStart, signInSuccess, signUpFailed, signUpStart, signUpSuccess } from "./authSlice";
import { Navigate } from "react-router-dom";


export const signInUser = async (user, dispatch, Navigate) => {
    dispatch(signInStart());
    try {
        const request = await axios.get('http://localhost:3000/users');
        const res = await request.data;
        console.log(res);
        console.log(request);
        if (res.email === user.email && res.password === user.password) {
            dispatch(signInSuccess(res.data));
            Navigate("/")
        }
    } catch (err) {
        dispatch(signInFailed);
    }
}

export const signUpUser = async (user, dispatch, Navigate) => {
    dispatch(signUpStart);
    try {
        const res = await axios.post('http://localhost:3000/users', user);
        dispatch(signUpSuccess(res.data));
        Navigate("/login")
    } catch (err) {
        dispatch(signUpFailed);
    }
}